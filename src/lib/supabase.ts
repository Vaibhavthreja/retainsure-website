import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DemoAccessRequest {
  id: string;
  email: string;
  verified: boolean;
  verification_token: string | null;
  created_at: string;
  verified_at: string | null;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  company_name: string;
  image_url: string;
  metric_value: string;
  metric_label: string;
  background_color: string;
  display_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}
