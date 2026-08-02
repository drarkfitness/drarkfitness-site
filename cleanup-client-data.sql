-- One-off cleanup of existing client_results rows.
-- Safe to re-run: every statement is idempotent.
--
-- Run it in Supabase → SQL Editor, or approve the Supabase MCP tool so
-- Claude can run it for you.

-- 1. Age: keep digits only, so "28 yrs" -> "28", "21 yrs" -> "21".
--    The website adds "yrs" itself, so the stored value must be a bare number.
update client_results
set age = nullif(regexp_replace(coalesce(age,''), '[^0-9]', '', 'g'), '')
where age is not null
  and age <> regexp_replace(coalesce(age,''), '[^0-9]', '', 'g');

-- 2. Quote: strip any leading/trailing quote marks (straight or curly) and
--    surrounding whitespace, so the website's own quote marks are not doubled.
update client_results
set quote = trim(both from
              regexp_replace(
                regexp_replace(quote, '^[\s"“”‘’]+', ''),
                '[\s"“”‘’]+$', ''))
where quote is not null
  and quote ~ '^[\s"“”‘’]|[\s"“”‘’]$';

-- 3. Waist unit: the program measures the waist in inches. Move any rows still
--    stored as cm (or blank) to inches.
update client_results
set waist_unit = 'in'
where waist_unit is distinct from 'in';
