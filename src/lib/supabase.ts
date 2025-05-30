import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://<PROJECT_ID>.supabase.co';
const supabaseKey = '<YOUR_ANON_KEY>';
export const supabase = createClient(supabaseUrl, supabaseKey);