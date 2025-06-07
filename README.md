# Jocleyn's Personal Site

This is my personal [site](https://jocelynknight.dev), built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [MDX](https://mdxjs.com).
I know what you're thinking, "But [Jocelyn](https://jocelynknight.dev), you're like an expert in [Angular](https://angular.dev), why are you
using [React](https://react.dev) and [Nextjs](https://nextjs.org)!"
This is true. I have a **TON** of [Angular](https://angular.dev) experience, but I'm not a one trick pony!

At the end of the day, I'm a software developer and I love building useful things with software and a framework or library
is simply a tool to help you build.

![Toolbelt full of tools](https://m.media-amazon.com/images/I/611oxfcdJmL.__AC_SX300_SY300_QL70_FMwebp_.jpg)

A good craftsman has many tools in thier toolbelt and whilst I don't
get the opportunity to work with Nextjs professionally, I like to pull it out and sharpen my tools
for when the day does come that I need to use it on a large production application.

I knew if I built my personal site with [Nextjs](https://nextjs.org) and thus have to maintain it over time,
I'd be forced to get nice and cozy with it and have plenty of opportunity to learn more about it.

## Deployment

This site is deployed on [Vercel](https://vercel.com) with automatic deployments from the GitHub repository.

### Hosting Details

- **Platform**: Vercel
- **Production URL**: https://jocelynknight.dev
- **Deployment Method**: Automatic GitHub integration
- **Branch**: Deployments are triggered on push to `main` branch

### How It Works

1. **Automatic Deployments**: Every push to the `main` branch triggers a new deployment on Vercel
2. **Preview Deployments**: Pull requests automatically get preview URLs for testing changes
3. **Build Process**: Vercel automatically detects Next.js and runs `npm run build`
4. **Analytics**: The site uses Vercel Analytics and Speed Insights for performance monitoring

### Environment Variables

The following environment variables are used:

- `NEXT_PUBLIC_SITE_URL` - The production URL of the site (https://jocelynknight.dev)

To set up locally, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### Deploying Your Own Version

If you want to deploy your own version of this site:

1. Fork this repository
2. Sign up for a [Vercel account](https://vercel.com/signup)
3. Import your forked repository in Vercel
4. Set the environment variables in Vercel's dashboard
5. Deploy!

Vercel will automatically configure the build settings for Next.js applications.

### Build Commands

- `npm run dev` - Start development server locally
- `npm run build` - Build for production
- `npm run start` - Start production server locally
- `npm run lint` - Run ESLint

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation
- [Vercel](https://vercel.com/docs) - the official Vercel documentation

Last Updated On: January 6, 2025
