---
layout: default
title: SSG pros and cons
parent: static-site-generation
last_updated: Oct 2023
---

# SSG pros and cons

Static site generation (SSG) has both pros and cons.

Pros
1) Good for SEO as the server gets back a content-rich, pre-rendered HTML page.
2) Performant - as it is pre-rendered.
3) Easy to maintain and update - based on templates that can be reused.
4) Data sources are diverse - you can use content from Wordpress, e-commerce data from Shopify, back-end data from Firebase or a simple file system. 
5) Too many options to choose from - each individual SSG service has its unique pros and cons over and above these listed.

Cons
1) Code is repeated for each page, so hard to update and maintain
2) The number of calls to the server slows down the performance of the site
3) Usually does not contain dynamic data

# SSG and SPAs what is the difference?

An SPA is a Single Page Application. It is different from an SSG as it only makes one server request to the index page resulting in better performance, easier maintenance.

Drawbacks of an SPA is that it is bad for SEO.

# SSG, SPAs and SSR what is the difference?

SSR or Server Side Rendering is when a page is rendered on the server after every request. The server sources the data from the backend and sends it into a templates to render HTML pages. 

The advantages are it is good for SEO and easy to maintain.

Drawbacks - data calls for every rendered HTML page can impact performance as it slows down page rendering.

SSGs compiles the HTML pages at build time before the app is deployed to the web. After the initial request, the SSG behaves like an SPA.

SPAs and SSRs can be over-engineered. SSGs take some of the grunt work out of building static sites. SSGs bundle all the files in build time and then sends the files to a CDN (content delivery network) to host.

There are many SSGs, Gatsby - front-end solution using React and GraphQL - has the best star rating on the [JAM Stack list](https://jamstack.org/generators/)
