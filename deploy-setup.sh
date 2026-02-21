#!/bin/bash

echo "🚀 HackIndia 2026 - GitHub Pages Deployment Setup"
echo "=================================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: HackIndia 2026 website"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "📝 Next steps:"
echo "1. Create a new repository on GitHub: https://github.com/new"
echo "2. Run these commands (replace YOUR_USERNAME and YOUR_REPO):"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages in your repository settings:"
echo "   - Go to Settings > Pages"
echo "   - Set Source to 'GitHub Actions'"
echo ""
echo "4. Your site will be live at:"
echo "   https://YOUR_USERNAME.github.io/YOUR_REPO/"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
