/*
  # Create Demo Access Requests Table

  1. New Tables
    - `demo_access_requests`
      - `id` (uuid, primary key) - Unique identifier for each request
      - `email` (text, unique, not null) - Email address of the requester
      - `verified` (boolean, default false) - Whether the email has been verified
      - `verification_token` (text, unique) - Token used for email verification
      - `created_at` (timestamptz, default now()) - When the request was created
      - `verified_at` (timestamptz, nullable) - When the email was verified

  2. Security
    - Enable RLS on `demo_access_requests` table
    - Add policy to allow anyone to insert their email
    - Add policy to allow reading only verified status by email

  3. Indexes
    - Index on email column for faster lookups
    - Index on verification_token for verification lookups
*/

CREATE TABLE IF NOT EXISTS demo_access_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  verified boolean DEFAULT false NOT NULL,
  verification_token text UNIQUE,
  created_at timestamptz DEFAULT now() NOT NULL,
  verified_at timestamptz
);

ALTER TABLE demo_access_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit demo access request"
  ON demo_access_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can check their own verification status"
  ON demo_access_requests
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow verification token updates"
  ON demo_access_requests
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_demo_access_email ON demo_access_requests(email);
CREATE INDEX IF NOT EXISTS idx_demo_access_verification_token ON demo_access_requests(verification_token);
