/*
  # Add Detailed Content Fields to Case Studies

  1. New Columns
    - `slug` (text, unique, not null) - URL-friendly identifier for each case study (e.g., "acme-corp")
    - `heading` (text) - Unique heading for the detail page
    - `goal_title` (text) - Title for the goal section (e.g., "The Goal")
    - `goal_content` (text) - Full text content explaining the customer's goal
    - `goal_image_url` (text, nullable) - Optional image URL for the goal section
    - `approach_title` (text) - Title for the approach section (e.g., "The Approach")
    - `approach_content` (text) - Full text content explaining the approach taken
    - `approach_image_url` (text, nullable) - Optional image URL for the approach section
    - `outcome_title` (text) - Title for the outcome section (e.g., "The Outcome")
    - `outcome_content` (text) - Full text content explaining the results achieved
    - `outcome_image_url` (text, nullable) - Optional image URL for the outcome section

  2. Changes
    - Adds all detail fields to support full case study pages
    - Creates unique index on slug for URL routing
    - All existing case studies will have NULL values for new fields initially
*/

DO $$
BEGIN
  -- Add slug column with unique constraint
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'case_studies' AND column_name = 'slug'
  ) THEN
    ALTER TABLE case_studies ADD COLUMN slug text;
    CREATE UNIQUE INDEX IF NOT EXISTS case_studies_slug_key ON case_studies(slug);
  END IF;

  -- Add heading column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'case_studies' AND column_name = 'heading'
  ) THEN
    ALTER TABLE case_studies ADD COLUMN heading text;
  END IF;

  -- Add goal section columns
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'case_studies' AND column_name = 'goal_title'
  ) THEN
    ALTER TABLE case_studies ADD COLUMN goal_title text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'case_studies' AND column_name = 'goal_content'
  ) THEN
    ALTER TABLE case_studies ADD COLUMN goal_content text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'case_studies' AND column_name = 'goal_image_url'
  ) THEN
    ALTER TABLE case_studies ADD COLUMN goal_image_url text;
  END IF;

  -- Add approach section columns
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'case_studies' AND column_name = 'approach_title'
  ) THEN
    ALTER TABLE case_studies ADD COLUMN approach_title text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'case_studies' AND column_name = 'approach_content'
  ) THEN
    ALTER TABLE case_studies ADD COLUMN approach_content text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'case_studies' AND column_name = 'approach_image_url'
  ) THEN
    ALTER TABLE case_studies ADD COLUMN approach_image_url text;
  END IF;

  -- Add outcome section columns
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'case_studies' AND column_name = 'outcome_title'
  ) THEN
    ALTER TABLE case_studies ADD COLUMN outcome_title text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'case_studies' AND column_name = 'outcome_content'
  ) THEN
    ALTER TABLE case_studies ADD COLUMN outcome_content text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'case_studies' AND column_name = 'outcome_image_url'
  ) THEN
    ALTER TABLE case_studies ADD COLUMN outcome_image_url text;
  END IF;
END $$;