import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function saveUser({ name, email, interests }) {
  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, interests }]);

  if (error) throw error;
  return data;
}
