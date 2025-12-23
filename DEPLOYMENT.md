# Deploying Payverge Documentation to GitHub Pages

This guide explains how to deploy the Docusaurus documentation site to GitHub Pages using GitHub Actions.

## Prerequisites

- GitHub repository (public or private)
- Push access to the repository
- GitHub Pages enabled in repository settings

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Configure Repository Permissions

The workflow is already configured with the necessary permissions:
- `contents: read` - Read repository contents
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - Required for GitHub Pages deployment

### 3. Update Docusaurus Configuration

Ensure your `docusaurus.config.ts` has the correct settings:

```typescript
// For GitHub Pages with custom domain
url: 'https://docs.payverge.io',
baseUrl: '/',

// OR for GitHub Pages without custom domain
// url: 'https://[username].github.io',
// baseUrl: '/[repo-name]/',

// GitHub deployment config
organizationName: 'payverge', // Your GitHub org/user name
projectName: 'payverge',      // Your repo name
```

### 4. Custom Domain (Optional)

If using a custom domain like `docs.payverge.io`:

1. Create a `CNAME` file in `/docs/static/`:
   ```
   docs.payverge.io
   ```

2. Configure DNS records:
   - Add a CNAME record pointing to `[username].github.io`
   - Or add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. In GitHub repository settings:
   - Go to **Settings** → **Pages**
   - Enter your custom domain
   - Enable **Enforce HTTPS**

## Deployment Workflow

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:

1. **Triggers on:**
   - Push to `main` branch
   - Changes in `docs/**` directory
   - Manual workflow dispatch

2. **Build Process:**
   - Checks out the repository
   - Sets up Node.js 20
   - Installs dependencies with `npm ci`
   - Builds the site with `npm run build`
   - Uploads build artifacts

3. **Deploy Process:**
   - Deploys to GitHub Pages
   - Makes site available at configured URL

## Manual Deployment

To manually trigger a deployment:

1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the branch and click **Run workflow**

## Local Testing

Before deploying, test the build locally:

```bash
cd docs
npm run build
npm run serve
```

Visit `http://localhost:3000` to preview the production build.

## Troubleshooting

### Build Fails

**Check the Actions logs:**
1. Go to **Actions** tab
2. Click on the failed workflow run
3. Review the build logs

**Common issues:**
- Broken links: Run `npm run build` locally to find them
- Missing dependencies: Ensure `package-lock.json` is committed
- Node version: Workflow uses Node.js 20

### Deployment Fails

**Permissions issue:**
- Verify GitHub Pages is enabled
- Check workflow permissions in repository settings
- Ensure `GITHUB_TOKEN` has necessary permissions

**Custom domain not working:**
- Verify DNS records are correct
- Wait for DNS propagation (up to 24 hours)
- Check CNAME file exists in `/docs/static/`

### Site Not Updating

**Clear cache:**
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Wait a few minutes for CDN propagation

**Check deployment:**
- Verify workflow completed successfully
- Check GitHub Pages settings show correct source
- Ensure correct branch is selected

## GitHub Pages with Private Repositories

**Important Notes:**

✅ **What Works:**
- GitHub Actions can deploy from private repos
- Workflow runs with repository secrets
- Build process is private

⚠️ **What to Know:**
- **Published site is always public** (even from private repos)
- Anyone with the URL can access the documentation
- GitHub Pages sites cannot be made private

**For truly private documentation:**
- Use alternative hosting (Netlify, Vercel with password protection)
- Self-host with authentication
- Use GitHub Enterprise with private Pages

## Workflow Configuration

The workflow is configured to:

- **Working Directory:** `./docs` (documentation subfolder)
- **Node Version:** 20.x
- **Cache:** npm dependencies for faster builds
- **Artifact Path:** `./docs/build` (Docusaurus output)
- **Concurrency:** Prevents multiple deployments at once

## Environment Variables

No environment variables are required for basic deployment. The workflow uses:

- `GITHUB_TOKEN` - Automatically provided by GitHub Actions
- No secrets needed for public documentation

## Monitoring Deployments

**View deployment status:**
1. **Actions tab** - See workflow runs
2. **Environments** - View deployment history
3. **Pages settings** - See current deployment

**Deployment URL:**
- Available in workflow output
- Shown in Pages settings
- Format: `https://docs.payverge.io` or `https://[username].github.io/[repo]`

## Best Practices

1. **Test locally** before pushing
2. **Review build logs** if deployment fails
3. **Use semantic commits** for clear deployment history
4. **Enable branch protection** on main branch
5. **Monitor deployment status** after pushing

## Additional Resources

- [Docusaurus Deployment Guide](https://docusaurus.io/docs/deployment)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Need help?** Contact support@payverge.io or check the GitHub Actions logs for detailed error messages.
