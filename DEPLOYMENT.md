# Alpine Energy Systems - Deployment Guide

## Local Testing

### Development Mode
```bash
npm run dev
```
Visit http://localhost:3000

### Production Build
```bash
npm run build
npm run start
```

## Deploying to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. **Create GitHub Repository**
   ```bash
   git add .
   git commit -m "Complete VoltEdge Systems website"
   git push
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your site will be live at:**
   - `https://zenith-energy.vercel.app` (or similar)
   - You can add a custom domain later

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment Checklist

After deployment, verify:

- [ ] All pages load correctly (Home, About, Solution, Contact)
- [ ] Navigation works (header links, footer links)
- [ ] Mobile menu opens and closes
- [ ] Contact form validation works
- [ ] Legal pages (Privacy, Terms) are accessible
- [ ] Site is mobile responsive
- [ ] No console errors
- [ ] Images and icons load correctly

## Updating Sitemap

After deployment, update the sitemap URL in:
- `app/sitemap.ts` - Change `baseUrl` to your actual Vercel URL
- `public/robots.txt` - Update sitemap URL

## AWS Credit Application

Once deployed, use your site for the AWS Activate application:

**Business Name:** Alpine Energy Systems
**Website:** https://alpine-energy-systems.com
**Description:** IoT-based energy management platform for commercial buildings

**AWS Services Needed:**
- AWS IoT Core - Connect and manage sensors
- AWS Lambda - Serverless data processing
- Amazon S3 - Store sensor data and analytics
- Amazon SageMaker - Train ML models
- Amazon EC2 - Edge computing nodes
- Amazon CloudFront - CDN
- Amazon RDS - Database

## Environment Variables (Future)

If you add backend functionality, create `.env.local`:

```bash
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.alpine-energy-systems.com
DATABASE_URL=postgresql://...
AWS_REGION=eu-central-1
```

## Custom Domain (Optional)

To add a custom domain (e.g., alpine-energy-systems.com):

1. Purchase domain from registrar (Namecheap, GoDaddy, etc.)
2. In Vercel Dashboard: Settings → Domains
3. Add your custom domain
4. Update DNS records at your registrar
5. Wait for DNS propagation (up to 48 hours)

## Monitoring

Monitor your site with:
- **Vercel Analytics:** Built-in, free for personal projects
- **Google Analytics:** Add tracking code to `app/layout.tsx`
- **Vercel Logs:** View deployment logs and runtime errors

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

---

Good luck with your AWS credit application! 🚀
