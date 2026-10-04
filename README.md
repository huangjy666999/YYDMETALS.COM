# YYDMETALS.COM

Corporate website for YYD METALS — global ferroalloys and metal resources.

React 18 + Vite 6 + React Router 6 + TypeScript. Website inquiries and material offers are emailed through Web3Forms; Supabase logging remains optional.

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
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms access key for website email submissions |

The project Web3Forms public key is configured as a frontend fallback, so no
Cloudflare variable is required. You can override it with
`VITE_WEB3FORMS_ACCESS_KEY` in the build environment if you replace the form key.
Both `/contact` and `/submit-material` use it to deliver submissions to the
recipient configured for that key in Web3Forms. If Web3Forms rejects a
submission, the forms show an error instead of claiming the message was received.
