/*
  # Fix RLS policy for contact_submissions

  1. Changes
    - Drop the overly permissive "Always true" INSERT policy
    - Replace with a stricter policy that validates required fields are non-empty
      so the WITH CHECK clause is not trivially true

  2. Security
    - Requires full_name, email, and phone to be non-empty strings
    - Prevents empty/blank submissions from anonymous users
*/

DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

CREATE POLICY "Anon can insert valid contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    length(trim(full_name)) > 0
    AND length(trim(email)) > 0
    AND email LIKE '%@%'
    AND length(trim(phone)) > 0
  );
