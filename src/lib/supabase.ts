import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// ---------------------------------------------------------------------------
// WHY THIS FILE LOOKS LIKE THIS
//
// The previous version was:
//
//   const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
//   const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string
//   export const supabase = createClient(supabaseUrl, supabaseAnonKey)
//
// Vite inlines VITE_* values at BUILD time. When they are not configured in the
// hosting build settings they become undefined, and createClient(undefined, ...)
// THROWS "supabaseUrl is required." — at module-evaluation time.
//
// Because App.tsx -> SubmitMaterial.tsx -> this file is a static import chain,
// that one throw aborts the whole bundle before React ever renders, leaving
// <div id="root"> empty: the visitor sees the dark <body> background only,
// i.e. a completely black page on every route.
//
// So: never throw here. Create the client lazily, and let the form show a
// friendly message when the backend is not configured.
// ---------------------------------------------------------------------------

const env = import.meta.env as Record<string, string | undefined>

const supabaseUrl = env.VITE_SUPABASE_URL
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY

/** true when both env vars were present at build time. */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

let client: SupabaseClient | null = null
let initError: string | null = null

if (!isSupabaseConfigured) {
  initError = 'Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY at build time.'
  console.warn('[YYD METALS] Supabase is not configured:', initError)
}

/** Returns the Supabase client, or null when it cannot be created. */
export function getSupabase(): SupabaseClient | null {
  if (client) return client
  if (!isSupabaseConfigured) return null

  try {
    client = createClient(supabaseUrl as string, supabaseAnonKey as string)
    return client
  } catch (err) {
    initError = err instanceof Error ? err.message : String(err)
    console.error('[YYD METALS] Supabase init failed:', initError)
    return null
  }
}

export function getSupabaseError(): string | null {
  return initError
}
