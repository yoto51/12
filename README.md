# AI-Powered Website

This is a Next.js project that features various AI tools for content creation.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Background Video

To add the Tanjiro circle of fire background video:

1. Download the "tanjiro-circle-of-fire.1920x1080.mp4" video file
2. Place it in the `/public/videos/` directory
3. The video will automatically appear as the website background

## Features

- AI Video Generator
- Meme Finder
- AI Image Generator
- And many more AI-powered tools

## Deployment

You can deploy this website using:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Click Deploy

### GitHub Pages
1. Add the "gh-pages" package: `npm install --save-dev gh-pages`
2. Add deploy scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d out",
   "build": "next build && next export"
   ```
3. Run `npm run deploy`

## Pricing

- 3 Months: $25
- 6 Months: $50
- Lifetime: $99

## Contact

For more information, contact: officialprahant.org@gmail.com

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
