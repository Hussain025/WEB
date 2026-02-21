# Supabase Setup Guide for HackIndia 2026 Registration System

This guide will walk you through setting up Supabase for the registration system.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create a free account
3. Click "New Project"
4. Fill in the project details:
   - **Name**: HackIndia 2026 (or any name you prefer)
   - **Database Password**: Create a strong password (save this securely)
   - **Region**: Choose the region closest to your users (e.g., Mumbai for India)
   - **Pricing Plan**: Free tier is sufficient for this project
5. Click "Create new project" and wait for the project to be provisioned (takes 1-2 minutes)

## Step 2: Get Your Project Credentials

1. Once your project is ready, go to **Settings** (gear icon in the sidebar)
2. Click on **API** in the settings menu
3. You'll see two important values:
   - **Project URL**: This is your `VITE_SUPABASE_URL`
   - **anon public key**: This is your `VITE_SUPABASE_ANON_KEY`
4. Copy these values

## Step 3: Update Environment Variables

1. Open the `.env` file in the root of this project
2. Replace the placeholder values with your actual credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

3. Save the file

**Important**: Never commit the `.env` file to version control. It's already in `.gitignore`.

## Step 4: Create the Database Table

1. In your Supabase project dashboard, click on **SQL Editor** in the sidebar
2. Click "New query"
3. Copy the entire contents of the `supabase-setup.sql` file
4. Paste it into the SQL editor
5. Click "Run" to execute the SQL
6. You should see a success message

This will:
- Create the `registrations` table with all required fields
- Add indexes for better performance
- Enable Row Level Security (RLS)
- Configure policies to allow anonymous inserts but prevent reads/updates/deletes

## Step 5: Verify the Setup

1. Go to **Table Editor** in the Supabase sidebar
2. You should see the `registrations` table listed
3. Click on it to view the table structure
4. Verify all columns are present:
   - id (uuid)
   - full_name (text)
   - email (text)
   - phone (text)
   - college (text)
   - team_size (int4)
   - tech_track (text)
   - created_at (timestamptz)

## Step 6: Test the Connection

1. Start your development server: `npm run dev`
2. Open the browser console (F12)
3. If there are no errors about missing Supabase variables, you're good to go!
4. If you see an error, double-check your `.env` file values

## Troubleshooting

### Error: "Missing Supabase environment variables"
- Make sure your `.env` file exists in the project root
- Verify the variable names are exactly `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Restart your development server after updating `.env`

### Error: "Invalid API key"
- Double-check you copied the **anon public** key, not the service role key
- Make sure there are no extra spaces or quotes in the `.env` file

### SQL execution fails
- Make sure you're running the SQL in the correct project
- Try running each section of the SQL separately if there are errors

## Security Notes

- The **anon key** is safe to use in client-side code (it's public)
- Row Level Security (RLS) policies protect your data
- Anonymous users can only INSERT data, not read or modify existing records
- Never use the **service role key** in client-side code

## Next Steps

Once Supabase is set up, you can proceed with implementing the registration form components!
