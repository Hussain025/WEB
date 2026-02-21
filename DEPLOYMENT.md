# GitHub Pages Deployment Guide

## Setup Steps

### 1. Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., "hackindia-2026")
3. Don't initialize with README (we already have files)

### 3. Connect to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. Save the settings

### 5. Deploy
The site will automatically deploy when you push to the main branch:
```bash
git push origin main
```

## Your Site URL
After deployment, your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## Update Base Path (if using repository name in URL)
If your site is at `username.github.io/repo-name/`, update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repo-name/',  // Add your repo name here
  // ... rest of config
});
```

Then rebuild and push:
```bash
npm run build
git add .
git commit -m "Update base path"
git push origin main
```

## Environment Variables
Don't forget to add your Supabase credentials as GitHub Secrets:
1. Go to Settings > Secrets and variables > Actions
2. Add these secrets:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

Note: For client-side apps, environment variables are embedded at build time.
Make sure your `.env` file is in `.gitignore` and never commit secrets!

## Troubleshooting

### Build fails
- Check the Actions tab in your GitHub repository
- Review the build logs for errors
- Ensure all dependencies are in `package.json`

### 404 errors
- Make sure GitHub Pages is enabled
- Check that the base path in `vite.config.ts` matches your repo structure
- Wait a few minutes for deployment to complete

### Environment variables not working
- Prefix all variables with `VITE_` in your `.env` file
- Add them as GitHub Secrets
- Rebuild and redeploy
