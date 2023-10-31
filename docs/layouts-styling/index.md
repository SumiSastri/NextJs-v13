---
layout: default
title:  Layouts and styling
parent: layouts-styling
has_children: true
last_updated: Oct 2023
---

# Layouts and styling

The `global.css` file is imported into the `layout.jsx` file which is a global layout page. Above the `children` props, you can nest components (Navbars/ headers/footers) than need to appear on every page of the app.

Links are added with the `Link` component that ships with NextJs - `import Link from 'next/link'` this is imported into components that require links and the links are fetched server-side.

More in the [NextJS docs on styling](https://nextjs.org/docs/app/building-your-application/styling)