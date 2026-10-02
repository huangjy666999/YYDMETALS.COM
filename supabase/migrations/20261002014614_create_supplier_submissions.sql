/*
# Create supplier_submissions table (single-tenant, no auth)

## Summary
Creates a table to store material submissions from suppliers around the world.
The website's "Submit Your Material" form writes here so YYD METALS staff can review
incoming supplier offers (material name, origin, quantity, chemical analysis, photos,
location, availability, and contact information).

## New Tables
- `supplier_submissions`
  - `id` (uuid, primary key)
  - `material_name` (text, not null) — name of the offered material
  - `material_category` (text) — which resource/product category it relates to
  - `origin` (text) — country/region of origin
  - `quantity` (text) — amount available (free text, may include units)
  - `chemical_analysis` (text) — composition / assay details
  - `photo_urls` (text[]) — image URLs supplied by the supplier
  - `location` (text) — current physical location of the material
  - `availability` (text) — when/how much is available
  - `contact_name` (text, not null)
  - `contact_email` (text, not null)
  - `contact_phone` (text)
  - `company` (text)
  - `message` (text) — additional notes
  - `status` (text, default 'pending') — review status
  - `created_at` (timestamptz, default now())

## Security
- Enable RLS on `supplier_submissions`.
- Public submission form with no sign-in: anon + authenticated can INSERT.
- SELECT/UPDATE/DELETE restricted to authenticated (staff) only.
*/

CREATE TABLE IF NOT EXISTS supplier_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  material_name text NOT NULL,
  material_category text,
  origin text,
  quantity text,
  chemical_analysis text,
  photo_urls text[] DEFAULT '{}',
  location text,
  availability text,
  contact_name text NOT NULL,
  contact_email text NOT NULL,
  contact_phone text,
  company text,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE supplier_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_submissions" ON supplier_submissions;
CREATE POLICY "anon_insert_submissions"
ON supplier_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_submissions" ON supplier_submissions;
CREATE POLICY "auth_select_submissions"
ON supplier_submissions FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_submissions" ON supplier_submissions;
CREATE POLICY "auth_update_submissions"
ON supplier_submissions FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_submissions" ON supplier_submissions;
CREATE POLICY "auth_delete_submissions"
ON supplier_submissions FOR DELETE
TO authenticated USING (true);
