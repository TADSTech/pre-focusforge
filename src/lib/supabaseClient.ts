import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Initializes the Supabase client with environment variables.
 * @returns {SupabaseClient | null} The initialized Supabase client or null if initialization fails.
 * @throws {Error} If environment variables are missing or client creation fails.
 */
export const supabase: SupabaseClient | null = (() => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  // Validate environment variables
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      'Supabase initialization failed: Missing environment variables. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.'
    );
    return null;
  }

  try {
    const client = createClient(supabaseUrl, supabaseAnonKey);
    return client;
  } catch (error) {
    console.error('Supabase initialization failed:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
})();