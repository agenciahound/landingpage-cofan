/*
  # Create COFAN Leads Table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `area_size` (text)
      - `area_type` (text)
      - `credit_type` (text)
      - `annual_revenue` (text)
      - `objective_clear` (text)
      - `name` (text)
      - `whatsapp` (text)
      - `email` (text)
      - `city` (text)
      - `lead_score` (integer)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `leads`
    - Allow anonymous inserts
    - Prevent anonymous reads
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),

  area_size text NOT NULL DEFAULT '',
  area_type text NOT NULL DEFAULT '',
  credit_type text NOT NULL DEFAULT '',
  annual_revenue text NOT NULL DEFAULT '',
  objective_clear text NOT NULL DEFAULT '',

  name text NOT NULL DEFAULT '',
  whatsapp text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  city text NOT NULL DEFAULT '',

  lead_score integer NOT NULL DEFAULT 0,

  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
  