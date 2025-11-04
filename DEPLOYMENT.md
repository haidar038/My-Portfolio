# Deployment Guide

This document provides important information for deploying your portfolio website to production.

## Open Graph & Social Media Setup

### Before Deployment

The website includes comprehensive Open Graph (OG) and Twitter Card metadata for social media sharing. However, you **MUST** update the placeholder URLs with your actual domain before deploying.

### Files to Update

#### 1. `index.html`

Replace all instances of `https://haidar038.vercel.app/` with your actual domain:

```html
<!-- Find and replace these -->
<link rel="canonical" href="https://haidar038.vercel.app/" />
<meta property="og:url" content="https://haidar038.vercel.app/" />
<meta property="og:image" content="https://haidar038.vercel.app/og-image.png" />
<meta name="twitter:image" content="https://haidar038.vercel.app/og-image.png" />
```

**Example**: If your domain is `https://portfolio.example.com`:

```html
<link rel="canonical" href="https://portfolio.example.com/" />
<meta property="og:url" content="https://portfolio.example.com/" />
<meta property="og:image" content="https://portfolio.example.com/og-image.png" />
<meta name="twitter:image" content="https://portfolio.example.com/og-image.png" />
```

#### 2. Twitter Username (Optional)

Update the Twitter username in `index.html`:

```html
<!-- Replace @yourusername with your actual Twitter handle -->
<meta name="twitter:site" content="@yourusername" />
<meta name="twitter:creator" content="@yourusername" />
```

### Open Graph Image

The OG image is located at `public/og-image.png`. This image should be:

-   **Dimensions**: 1200x630 pixels (recommended for Facebook and Twitter)
-   **Format**: PNG or JPG
-   **Size**: Less than 5MB (smaller is better for faster loading)
-   **Content**: Should represent your portfolio/brand

The current image will be served from `/og-image.png` after build.

### Localization

The site supports both English and Indonesian. The OG metadata includes:

```html
<meta property="og:locale" content="en_US" /> <meta property="og:locale:alternate" content="id_ID" />
```

## Build & Deploy

### 1. Build the Project

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 2. Preview Build (Optional)

```bash
npm run preview
```

### 3. Deploy

Deploy the `dist` folder to your hosting service (Vercel, Netlify, GitHub Pages, etc.).

#### Vercel

```bash
vercel
```

#### Netlify

```bash
netlify deploy --prod
```

#### GitHub Pages

Push to the `gh-pages` branch or configure GitHub Actions for automatic deployment.

## Testing OG Tags

After deployment, test your OG tags using these tools:

1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Open Graph Check**: https://opengraphcheck.com/

### Important Notes

-   **Cache Issues**: Social media platforms cache OG data. After updating, use the debugger tools above to refresh the cache.
-   **Image URLs**: Must be absolute URLs (starting with `https://`), not relative paths.
-   **HTTPS**: Always use HTTPS for production domains.
-   **Redirects**: If you have redirects, ensure OG tags are on the final destination page.

## Environment Variables

Don't forget to configure your environment variables for production:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Post-Deployment Checklist

-   [ ] Update domain URLs in `index.html`
-   [ ] Update Twitter username (if applicable)
-   [ ] Configure environment variables
-   [ ] Build the project
-   [ ] Deploy to hosting service
-   [ ] Test OG tags with debugging tools
-   [ ] Test on different devices and browsers
-   [ ] Test language switching (EN/ID)
-   [ ] Verify contact form functionality
-   [ ] Check all links and images

## Troubleshooting

### OG Image Not Showing

1. Verify the image URL is absolute (starts with `https://`)
2. Check image dimensions (1200x630 recommended)
3. Ensure image is less than 5MB
4. Clear social media cache using debugger tools
5. Check browser console for errors

### Metadata Not Updating

1. Social media platforms cache OG data for 24-48 hours
2. Use debugger tools to force refresh
3. Try a different image URL to bypass cache
4. Check `<head>` tag in production HTML source

## Support

For issues or questions:

-   Check the main README.md
-   Review CLAUDE.md for development guidelines
-   Check Vite documentation for build issues
