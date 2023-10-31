
# Scaffolding:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


_Pre-install checks_
Ensure you have the right version of node

- [Node and nvm install guide from freecodecamp for ongoing package management](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

- Using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

- Keeping the [.nvmrc file] (https://kl1p.com/what-you-need-to-know-about-nvmrc-tips-and-tricks-with-step-by-step-code-examples/) up to date in the root of the repo

_Install NextJs 13_
Install - `npx create-next-app@13.4.9`
App name - nextjs13-demo-app (note can not contain upper case)
Not a TS app
In v13 there is no requirement for a `src` folder
NextJS 13 ships with an app folder for code; a public folder for static assets/ in root config files and a .gitignore file - you can add addtional ignore files if required and a `.env` file for access tokens and secrets.

_Set up_
1) Clean up `page.js` - remove boiler plate
2) Clean up `globals.css` - remove boiler plate styling but keep imports
3) Set up pages and routes in app folder - `page.jsx` is the equivalent of `index.jsx`
4) Folders create routes and nested folders create nested routes eg: `http://localhost:3000/events/nov-2023` are in nested folders in the app folder

These pages are server-components by default.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
