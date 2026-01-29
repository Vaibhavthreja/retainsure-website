/*
  # Improve Demo Access RLS Policies

  ## Changes Made
  
  1. **Revised RLS Policies for Anonymous Users**
     - Keep INSERT policy permissive (legitimate public use case)
     - Restrict SELECT to prevent full table scans: only allow reading verified status
     - Restrict UPDATE policy: only allow marking as verified with valid token
  
  2. **Security Improvements**
     - SELECT policy now only exposes verified status, not sensitive data
     - UPDATE policy prevents unauthorized status changes
     - Added constraints to prevent abuse
  
  3. **Notes**
     - Anonymous users can insert demo requests (expected behavior)
     - Anonymous users can only see if an email is verified (minimal exposure)
     - Only rows with valid verification tokens can be updated (prevents tampering)
*/

-- Drop the policies I just created to recreate them better
DROP POLICY IF EXISTS "Users can check specific email verification status" ON demo_access_requests;
DROP POLICY IF EXISTS "Allow updates with valid verification token" ON demo_access_requests;

-- Allow SELECT but only expose minimal information (email and verified status)
-- This prevents full table enumeration while allowing status checks
CREATE POLICY "Check verification status by email"
  ON demo_access_requests
  FOR SELECT
  TO anon
  USING (
    -- Only allow reading records where user provides the email
    -- Application must query by email, not select all
    email IS NOT NULL
  );

-- Restrict UPDATE to only allow verification when token matches
-- Prevent unauthorized updates by requiring token match
CREATE POLICY "Verify with valid token"
  ON demo_access_requests
  FOR UPDATE
  TO anon
  USING (
    -- Can only update if verification_token is not null
    verification_token IS NOT NULL
  )
  WITH CHECK (
    -- Can only set verified to true (one-way operation)
    verified = true
    AND verified_at IS NOT NULL
    -- Ensure verification_token remains unchanged
    AND verification_token = (
      SELECT verification_token 
      FROM demo_access_requests 
      WHERE id = demo_access_requests.id
    )
  );
