---
layout: default
title: NextJS alternatives
parent: next-framework
last_updated: Nov 2023
---

# NextJS alternatives


- React with CRA (create-react-app) - CRA bundles all the code you need, however the internals (webpack and babel) may cause some challenges with package updates and failures due to dependencies of depencies an issue. Too few opinions means you need to figure out everything from routing, auth and hosting

- React and custom stacks - MERN, MERNG, etc., this means deciding on a database, server, middleware, query language for API-routes - an option but you need a good solution architect to get it right and good developers who know your use case and can apply that knowledge to a custom build

- Vite - sometimes used with React to eliminate the need to use CRA, instead of webpack and babel, Vite uses ES-Build to compile and code-split. Vite uses plugins which can be added depending on your use case. This decreases package bloat as you can pick and mix what you need which is impossible with Next

- Remix - good for forms and if you want nested routes that has data dependecies Remix is more performant and light compared to Next

- Gatsby - an SSG, does not manage internals (webpack, babel, esbuild) as well as Next. Gatsby is better for GraphQL as it has GraphQl built into data fetching. Plugins with Gatsby are also not well maintained, so you need to wait for plugins to be improved and added either to React or Gatsby core.

- RedwoodJS - is considered good for startups, good with GraphQL and Prisma for API calls and connects with Storybook for building component libraries. Tradeoffs are RedwoodJS does not support SSG for dynamic routes, SSR - it is all client-side rendering.

- Hydrogen - is considered good for e-commerce, specifically good for Shopify integration