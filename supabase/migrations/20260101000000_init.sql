-- =========================================================
-- Schema for ubaydullahnayeem.com
--
-- 1. `posts`            — blog content (published / draft)
-- 2. `contact_messages` — intake from the contact form
--
-- Run on a fresh Supabase project, then run the seed migration.
-- =========================================================

create extension if not exists "pgcrypto";

-- ----- POSTS -----------------------------------------------------------------

create table if not exists public.posts (
  id              uuid primary key default gen_random_uuid(),
  slug            text not null unique,
  title           text not null,
  title_bn        text,
  excerpt         text not null,
  category        text not null,
  reading_minutes int  not null default 5,
  content         text not null,
  status          text not null default 'draft' check (status in ('draft','published')),
  published_at    timestamptz not null default now(),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index if not exists posts_status_published_at_idx
  on public.posts (status, published_at desc);

-- Updated-at trigger
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists posts_set_updated_at on public.posts;
create trigger posts_set_updated_at
before update on public.posts
for each row execute function public.set_updated_at();

-- Row-Level Security: anonymous readers can only see published posts.
alter table public.posts enable row level security;

drop policy if exists "Public read published posts" on public.posts;
create policy "Public read published posts"
  on public.posts
  for select
  using (status = 'published');

-- ----- CONTACT MESSAGES ------------------------------------------------------

create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text,
  intent      text not null default 'other',
  message     text not null,
  user_agent  text,
  created_at  timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

-- Lock down — only the service role (server) may read or write.
alter table public.contact_messages enable row level security;

-- No public policies means anon/auth keys cannot read or write. Server
-- inserts use the service_role key which bypasses RLS.
