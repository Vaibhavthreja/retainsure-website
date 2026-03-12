/*
  # Remove Case Study Detail Columns

  1. Dropped Columns from `case_studies`
    - `slug` - URL slug for detail pages (no longer used)
    - `heading` - Detail page heading
    - `goal_title` - Goal section title
    - `goal_content` - Goal section body text
    - `goal_image_url` - Goal section image
    - `approach_title` - Approach section title
    - `approach_content` - Approach section body text
    - `approach_image_url` - Approach section image
    - `outcome_title` - Outcome section title
    - `outcome_content` - Outcome section body text
    - `outcome_image_url` - Outcome section image

  2. Reason
    - Individual case study detail pages have been removed from the site
    - The listing page only uses base fields (title, subtitle, company_name, etc.)
    - These columns contained no meaningful data and are no longer referenced anywhere

  3. Notes
    - The base `case_studies` table and its core columns are preserved
    - RLS policies remain unchanged
*/

ALTER TABLE case_studies
  DROP COLUMN IF EXISTS slug,
  DROP COLUMN IF EXISTS heading,
  DROP COLUMN IF EXISTS goal_title,
  DROP COLUMN IF EXISTS goal_content,
  DROP COLUMN IF EXISTS goal_image_url,
  DROP COLUMN IF EXISTS approach_title,
  DROP COLUMN IF EXISTS approach_content,
  DROP COLUMN IF EXISTS approach_image_url,
  DROP COLUMN IF EXISTS outcome_title,
  DROP COLUMN IF EXISTS outcome_content,
  DROP COLUMN IF EXISTS outcome_image_url;
