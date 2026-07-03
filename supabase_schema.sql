-- BhanuWorks Leads Database Schema
-- Paste this script directly into your Supabase SQL Editor (Dashboard > SQL Editor > New Query) and click Run.

create table if not exists public.leads (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    name text not null,
    email text not null,
    phone text,
    business text,
    project_type text,
    industry text,
    timeline text,
    budget text,
    message text
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;

-- Create policy to allow service_role key insertions and anon key insertions
-- If you want anyone to insert directly from the client (anon):
create policy "Allow public inserts" on public.leads
    for insert to public
    with check (true);

-- Create policy to allow admins (service_role) to read/manage entries:
create policy "Allow full admin access" on public.leads
    for all to service_role
    using (true)
    with check (true);

-- Ensure database schema caches are refreshed
notify pgrst, 'reload schema';
