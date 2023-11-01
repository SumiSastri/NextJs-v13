---
layout: default
title:  Page not found with NextJS 13
parent: api-calls
last_updated: Nov 2023
---

# Page not found with NextJS 13

When you make an  API-call (application protocol interface call) with dynamic routes, it is best practice to think about your page-not-found or 404 page that the server returns when it can not fetch data.

To understand how errors are handled in the response body of the API-call see static rendering section first.

There are 2 types of 404 pages with NextJS 13 - the scoped 404 and the generic 404. The scoped 404 overrides the generic 404 and is nested in the folder that contains the pages related to the API-call.

For example, in the tickets section of the app, if a ticket page can not be found, then a specific ticket section 404 can be created to override the generic 404 which is created in the root folder.

The root 404 takes care of any mistyped URLs and accidental user errors as well as generic pages that the user may be searching for but is not contained within the app.

The page is created by adding a `not-found.jsx` file in the section required - the naming convention of this file is strict.

Also see static-rendering section and code in the app `nextjs13-demo-app/app/tickets/[ticketId]/page.jsx` && `nextjs13-demo-app/app/tickets/[ticketId]/not-found.jsx` files.
