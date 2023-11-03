---
layout: default
title: What is static-rendering in NextJs 13
has_children: true
parent: static-site-generation
last_updated: Oct 2023
---

# What is static-rendering in NextJS 13

Static rendering helps you create a page with an id and serve it up via the CDN (content delivery network) that NextJS serves up files from, the page is served at build-time, not run time.

It is a bit like  SSG (static site generation) as it uses the same principle. SSG serves up the whole app by pre-rendering, this method `generateStaticParams()` from the NextJS 13 framework, only generates a single page by pre-rendering it.

It is particularly useful as the error handling with NextJS 13 works slightly differently and while in the  API-call (application programming interface call) for all the data, the error handling works with the Fetch-API.

With dynamic routes you need to serve up each page statically as the cache serves up a default page instead of handling the error in the response body of the Fetch-API call.

See this tutorial from NetNinja and the corresponding 
- [Tutorial 8: Static page rendering](https://www.youtube.com/watch?v=ihmyC4Ei2zY&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=8&t=129s)