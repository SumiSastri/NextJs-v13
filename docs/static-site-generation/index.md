---
layout: default
title: What is a static-site generator
parent: static-site-generation
last_updated: Oct 2023
---

# What is a static-site generator

Static websites only hyper-text-markup-language (HTML) and cascading style sheets (CSS). They may have some JavaScript but these files hydrate the page post build.

An SSG (static-site-generator) is a package that then renders these pages on the browser via a CDN (content delivery network), as the pages are pre-rendered at build time allowing for caching of pages and serving up cached pages as they do not change frequently.

SSGs generate static HTML pages using a combination of pre-built templates, components and data.

API (application protocol interface) calls can be made in build time as well. This makes API-route handling on the server-side easier and more secure.

<!-- CHECK ME: Is this accurante -->

With NextJS 13 the `getStaticProps()` method which was used with NextJS 12 is less frequently used and has been replaced by `generateStaticParams()` method where only dynamic routes requiring the params of an URL (unique resource locator) for the id of the resource is used.

Also see client-side-rendering, server-side-rendering and server-components sections.
