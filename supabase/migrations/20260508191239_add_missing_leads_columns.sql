/*
  # Add Missing Columns to Leads Table

  1. Changes
    - Add `objective_clear` column (text) - tracks if lead has clear credit objective
    - Add `lead_score` column (integer) - stores calculated lead qualification score

  2. Purpose
    - These columns support lead scoring and qualification system
    - Allow better lead prioritization and routing based on profile
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'objective_clear'
  ) THEN
    ALTER TABLE leads ADD COLUMN objective_clear text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'lead_score'
  ) THEN
    ALTER TABLE leads ADD COLUMN lead_score integer DEFAULT 0;
  END IF;
END $$;
