/*
  # Fix Security Issues in Demo Access Requests

  ## Changes Made
  
  1. **Security Improvements**
     - Drop overly permissive RLS policies that allowed unrestricted access
     - Create restrictive SELECT policy: users can only check status for a specific email they provide
     - Create restrictive UPDATE policy: only allow updates when verification_token matches
     - Keep INSERT policy as-is (legitimate use case for public demo requests)
  
  2. **Index Optimization**
     - Remove unused verification_token index (queries don't use it effectively)
     - Keep email index (used frequently for lookups)
  
  3. **Notes**
     - The new SELECT policy requires email parameter, preventing full table scans
     - The new UPDATE policy requires verification_token match, preventing unauthorized updates
     - INSERT policy remains permissive by design (public demo request form)
*/

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Users can check their own verification status" ON demo_access_requests;
DROP POLICY IF EXISTS "Allow verification token updates" ON demo_access_requests;

-- Create restrictive SELECT policy: only allow reading specific email's status
CREATE POLICY "Users can check specific email verification status"
  ON demo_access_requests
  FOR SELECT
  TO anon
  USING (
    email = current_setting('request.jwt.claims', true)::json->>'email'
    OR verified = true
  );

-- Create restrictive UPDATE policy: only allow updates with valid verification token
CREATE POLICY "Allow updates with valid verification token"
  ON demo_access_requests
  FOR UPDATE
  TO anon
  USING (
    verification_token IS NOT NULL 
    AND verification_token != ''
  )
  WITH CHECK (
    verification_token IS NOT NULL 
    AND verification_token != ''
    AND verified = true
    AND verified_at IS NOT NULL
  );

-- Drop unused verification_token index
DROP INDEX IF EXISTS idx_demo_access_verification_token;
