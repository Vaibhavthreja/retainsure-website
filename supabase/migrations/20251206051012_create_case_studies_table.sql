/*
  # Create case_studies table

  1. New Tables
    - `case_studies`
      - `id` (uuid, primary key) - Unique identifier for each case study
      - `title` (text) - Main case study heading
      - `subtitle` (text) - Case study description/subheading
      - `company_name` (text) - Name of the company featured
      - `image_url` (text) - URL or path to the case study image
      - `metric_value` (text) - Key metric displayed (e.g., "2X", "15%", "4X")
      - `metric_label` (text) - Description of the metric
      - `background_color` (text) - Gradient background color for the card
      - `display_order` (integer) - For ordering the cards on the page
      - `is_published` (boolean, default false) - To show/hide case studies
      - `created_at` (timestamptz) - Timestamp when record was created
      - `updated_at` (timestamptz) - Timestamp when record was last updated

  2. Security
    - Enable RLS on `case_studies` table
    - Add policy for public read access to published case studies only

  3. Initial Data
    - Insert 3 sample case studies based on homepage testimonials
*/

CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subtitle text NOT NULL,
  company_name text NOT NULL,
  image_url text NOT NULL,
  metric_value text NOT NULL,
  metric_label text NOT NULL,
  background_color text NOT NULL DEFAULT 'from-gray-50 to-gray-100',
  display_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published case studies"
  ON case_studies
  FOR SELECT
  USING (is_published = true);

-- Insert sample case studies based on the companies from the homepage
INSERT INTO case_studies (title, subtitle, company_name, image_url, metric_value, metric_label, background_color, display_order, is_published) VALUES
(
  'Reducing churn and boosting retention',
  'How LambdaTest used RetainSure to accurately predict churn and take proactive action',
  'LambdaTest',
  '/LambdaTestLogo.png',
  '2x',
  'More accurate predictions',
  'from-blue-50 to-blue-100',
  1,
  true
),
(
  'Cutting MBR preparation time by 95%',
  'How LimeChat automated customer reviews and saved hours every month',
  'LimeChat',
  '/LimeChat.png',
  '2 min',
  'Per customer review',
  'from-green-50 to-green-100',
  2,
  true
),
(
  'Achieving 20x ROI with targeted upsells',
  'How Mailmodo scaled upsell outreach to self-serve customers with AI-powered predictions',
  'Mailmodo',
  '/MailmodoLogo.png',
  '20x',
  'ROI in first month',
  'from-orange-50 to-orange-100',
  3,
  true
);