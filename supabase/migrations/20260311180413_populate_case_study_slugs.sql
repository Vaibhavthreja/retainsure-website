/*
  # Populate Case Study Slugs

  1. Changes
    - Updates the `slug` column for all three existing case studies
    - LambdaTest -> 'lambdatest'
    - LimeChat -> 'limechat'
    - Mailmodo -> 'mailmodo'

  2. Notes
    - These slugs are required for case study detail pages to be reachable
    - The CaseStudyDetail page queries by slug, so null slugs made pages inaccessible
*/

UPDATE case_studies
SET slug = 'lambdatest'
WHERE company_name = 'LambdaTest' AND slug IS NULL;

UPDATE case_studies
SET slug = 'limechat'
WHERE company_name = 'LimeChat' AND slug IS NULL;

UPDATE case_studies
SET slug = 'mailmodo'
WHERE company_name = 'Mailmodo' AND slug IS NULL;