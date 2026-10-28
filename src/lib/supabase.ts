import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://mjfbzhkrafhajozmbxni.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZmJ6aGtyYWZoYWpvem1ieG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwMDYwNTksImV4cCI6MjEwODU4MjA1OX0.9XNSMJUT2OHV-fxyZdv6O3aVpkSvpGkvbJ3f_LVf5F0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export const checkSupabaseConnection = async (): Promise<{ ok: boolean; message: string }> => {
  try {
    const { error } = await supabase.from('players').select('count', { count: 'exact', head: true });
    if (!error) {
      return { ok: true, message: 'Connected to Supabase successfully' };
    }
    return { ok: false, message: error.message };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, message };
  }
};
