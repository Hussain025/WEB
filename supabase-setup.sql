-- HackIndia 2026 Registration System - Database Setup
-- Run this SQL in your Supabase SQL Editor

-- Create the registrations table
CREATE TABLE registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  college TEXT NOT NULL,
  team_size INTEGER NOT NULL CHECK (team_size >= 1 AND team_size <= 4),
  tech_track TEXT NOT NULL CHECK (tech_track IN ('Web3', 'AI')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX idx_registrations_email ON registrations(email);
CREATE INDEX idx_registrations_created_at ON registrations(created_at);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for registration form submissions)
CREATE POLICY "Allow anonymous inserts" ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Prevent anonymous reads (only authenticated users can view registrations)
CREATE POLICY "Prevent anonymous reads" ON registrations
  FOR SELECT
  TO anon
  USING (false);

-- Prevent anonymous updates
CREATE POLICY "Prevent anonymous updates" ON registrations
  FOR UPDATE
  TO anon
  USING (false);

-- Prevent anonymous deletes
CREATE POLICY "Prevent anonymous deletes" ON registrations
  FOR DELETE
  TO anon
  USING (false);
