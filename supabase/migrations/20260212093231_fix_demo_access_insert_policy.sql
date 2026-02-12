/*
  # Fix overly permissive INSERT policy on demo_access_requests

  1. Security Changes
    - Drop the existing "Anyone can submit demo access request" policy which uses WITH CHECK (true)
    - Replace with a restrictive policy that ensures:
      - `verified` must be false (prevents self-verification bypass)
      - `verified_at` must be null (prevents setting verification timestamp)
    - This prevents malicious actors from inserting pre-verified records

  2. Important Notes
    - The email and verification_token fields remain user-settable as designed
    - Anonymous users can still submit demo access requests normally
    - The only change is preventing abuse of the verified/verified_at fields
*/

DROP POLICY IF EXISTS "Anyone can submit demo access request" ON public.demo_access_requests;

CREATE POLICY "Anon can insert unverified demo requests"
  ON public.demo_access_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    verified = false
    AND verified_at IS NULL
  );
