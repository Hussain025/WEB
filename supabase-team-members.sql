-- Add team_members table to store individual team member details

CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_id UUID NOT NULL REFERENCES registrations(id) ON DELETE CASCADE,
  member_name TEXT NOT NULL,
  member_email TEXT NOT NULL,
  member_phone TEXT NOT NULL,
  member_position INTEGER NOT NULL CHECK (member_position >= 1 AND member_position <= 4),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster lookups
CREATE INDEX idx_team_members_registration_id ON team_members(registration_id);

-- Enable Row Level Security
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for registration form submissions)
CREATE POLICY "Allow anonymous inserts" ON team_members
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Prevent anonymous reads
CREATE POLICY "Prevent anonymous reads" ON team_members
  FOR SELECT
  TO anon
  USING (false);
