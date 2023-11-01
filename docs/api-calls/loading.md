---
layout: default
title:  Page loading with NextJS 13
parent: api-calls
last_updated: Nov 2023
---

# Page loading with NextJS 13

A loading page can be created in the root of the app when large data sets or images/ videos need to be fetched and loaded.

A custom loading icon can be created in a file in the root of the app. The loading component has the React Suspense Hook built in by default.

You can scope a section of a page with the React Suspense Hook as well.  See `nextjs13-demo-app/app/not-found.jsx` for the demo.