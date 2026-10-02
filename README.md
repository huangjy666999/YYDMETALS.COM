# YYDMETALS.COM

Corporate website for YYD METALS — global ferroalloys and metal resources.

React 18 + Vite 5 + React Router 6 + TypeScript. Supplier offers are stored in Supabase.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
```

## Environment variables

Set in Cloudflare → Workers & Pages → `yydmetals-com` → Settings → Build:

| Variable | Purpose |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous (public) key |

Without them the site still loads; the "Submit Your Material" form then shows a
message asking visitors to email instead.
