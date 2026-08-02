-- Adds an optional per-client result headline and a testimonial video
-- (with a saved thumbnail crop) to the client_results table.
--
-- Safe to run more than once — every column uses IF NOT EXISTS.
--
-- IMPORTANT: run this BEFORE deploying the matching admin.html / index.html,
-- because the dashboard saves these columns. Run it in the Supabase SQL editor
-- (Project → SQL Editor → New query → paste → Run), or via the Supabase MCP.
--
-- video_url        : a storage URL (uploaded file) OR a pasted YouTube/Vimeo link
-- video_zoom/x/y   : the thumbnail crop, same three numbers the photos use

alter table public.client_results
  add column if not exists headline   text,
  add column if not exists video_url  text,
  add column if not exists video_zoom double precision default 1,
  add column if not exists video_x    double precision default 0,
  add column if not exists video_y    double precision default 0;
