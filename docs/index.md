Scaffolding:

- [Node and nvm install guide from freecodecamp for ongoing package management](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

- Using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

- Keeping the [.nvmrc file] (https://kl1p.com/what-you-need-to-know-about-nvmrc-tips-and-tricks-with-step-by-step-code-examples/) up to date in the root of the repo


Install - `npx create-next-app@13.4.9`
App name - nextjs13-demo-app (note can not contain upper case)
Not a TS app
In v13 there is no requirement for a `src` folder
NextJS 13 ships with an app folder for code; a public folder for static assets/ in root config files and a .gitignore file - you can add addtional ignore files if required and a `.env` file for access tokens and secrets.