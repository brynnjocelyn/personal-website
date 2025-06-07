# Deployment Guide

This document provides detailed information about deploying and maintaining the jocelynknight.dev website.

## Current Deployment Setup

### Platform: Vercel

The site is currently hosted on Vercel with the following configuration:

- **Production Domain**: https://jocelynknight.dev
- **Git Integration**: Connected to the GitHub repository
- **Auto-Deploy Branch**: `main`
- **Framework**: Next.js (automatically detected)
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (default for Next.js)

### Deployment Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   GitHub    │────▶│   Vercel    │────▶│ Production  │
│  main push  │     │    Build    │     │   Website   │
└─────────────┘     └─────────────┘     └─────────────┘
```

1. Developer pushes code to `main` branch
2. Vercel webhook detects the push
3. Vercel clones the repository and installs dependencies
4. Build process runs (`npm run build`)
5. Static files are generated and optimized
6. New version is deployed to production
7. Old version is kept for instant rollback if needed

### Preview Deployments

Pull requests automatically receive preview deployments with unique URLs in the format:
- `https://personal-website-<pr-number>-<username>.vercel.app`

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | The production URL of the site | `https://jocelynknight.dev` |

### Setting Environment Variables

#### Local Development
1. Copy `.env.example` to `.env.local`
2. Update values as needed
3. Restart the development server

#### Production (Vercel)
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add each variable with its production value
3. Redeploy for changes to take effect

## Deployment Checklist

Before deploying to production:

- [ ] Run `npm run build` locally to ensure no build errors
- [ ] Run `npm run lint` to check for code issues
- [ ] Test all pages locally with `npm run start`
- [ ] Verify all images are optimized
- [ ] Check that SEO metadata is properly set
- [ ] Ensure environment variables are configured in Vercel
- [ ] Review any new dependencies for security issues

## Monitoring & Analytics

The site includes:

### Vercel Analytics
- Page views and visitor metrics
- Real User Metrics (Web Vitals)
- Geographic distribution

### Vercel Speed Insights
- Core Web Vitals monitoring
- Performance metrics by page
- Loading time analysis

Access these through the Vercel Dashboard → Analytics tab.

## Rollback Procedures

If issues arise after deployment:

1. **Instant Rollback**: 
   - Go to Vercel Dashboard → Deployments
   - Find the previous working deployment
   - Click "..." menu → "Promote to Production"

2. **Git Revert**:
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

## Domain Configuration

### Current Setup
- Domain registered with: [Domain Registrar]
- DNS managed by: Vercel
- SSL Certificate: Automatically provisioned by Vercel

### DNS Records
```
Type  Name    Value
A     @       76.76.21.21
AAAA  @       2606:4700:3033::6815:1515
CNAME www     cname.vercel-dns.com
```

## Build Optimization

### Current Optimizations
- Image optimization with Next.js Image component
- Static generation for all content pages
- Automatic code splitting
- CSS purging with Tailwind
- Sitemap generation at build time

### Build Performance
- Average build time: ~2-3 minutes
- Static pages: 23
- First Load JS: ~87 kB (shared by all pages)

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check build logs in Vercel Dashboard
   - Run `npm run build` locally to reproduce
   - Verify all dependencies are listed in package.json

2. **Environment Variable Issues**
   - Ensure variables are set in Vercel Dashboard
   - Remember that `NEXT_PUBLIC_` prefix is required for client-side variables
   - Redeploy after changing environment variables

3. **404 Errors**
   - Check that routes match file structure in `src/app`
   - Verify dynamic routes are properly configured
   - Clear browser cache

### Support Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

## Security Considerations

- Never commit `.env.local` or any file with secrets
- Use Vercel's environment variables for sensitive data
- Keep dependencies updated with `npm audit fix`
- Enable Vercel's DDoS protection (enabled by default)
- Use HTTPS only (enforced by Vercel)

Last Updated On: January 6, 2025