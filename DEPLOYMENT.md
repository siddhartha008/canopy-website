# Deployment Guide for Vercel

## Overview

This project is configured for deployment on Vercel with the main entry point at
`/` (root domain).

## Configuration Files

### vercel.json

- Handles client-side routing for React Router
- Configures build command and output directory
- All routes redirect to `index.html` for SPA behavior

### vite.config.ts

- Removed base path configuration for root domain deployment
- Optimized for production builds

## Deployment Steps

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically detect the Vite configuration

2. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard
   - Copy from `.env.example` if you have environment-specific configs

3. **Domain Configuration**
   - Your domain is already connected to Vercel
   - The app will be served from the root domain (not `/canopy-website`)

## Build Process

- Vercel automatically runs `npm run build`
- Output directory: `dist/`
- Framework: Vite

## Navigation

All navigation links have been updated to work with the root domain:

- Home: `/`
- About pages: `/missions`, `/story`, `/meet-the-team`, etc.
- Work pages: `/ourwork`, `/canship`, `/katha-bunaun`
- Other pages: `/donate`, `/getinvolved`, `/publications`, etc.

## Troubleshooting

- If you encounter routing issues, check that `vercel.json` is properly
  configured
- Ensure all internal links use relative paths (they already do)
- PDF files should be in the `public/pdfs/` directory
