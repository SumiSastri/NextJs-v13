---
layout: default
title: What is incremental static regeneration with NextJs 13?
# has_children: true
parent: static-site-generation
last_updated: Oct 2023
---

# What is incremental static regeneration with NextJs 13?

ISG (incremental-static-generation) differs from static generation of a page which generates the whole page in one render method. It is also rendered in build-time. Hydration of pages with JavaScript happens after the page is loaded.

SSG (static site generation) renders all the pages of the site in one render method via the root HTML (hyper-text-markup) file.

ISG, does what it says, only increments of a single page are rendered statically - ie, you can have a form which needs user-interface (UI) that is dynamic as the user interacts with the form, however some part of the page needs to be rendered statically, general instructions or the header, ISG allows for this use case, as an example.

The section is rendered on demand and then cached. However, this may not be useful and this built-in method of caching when ISG is used can be disabled by disabling the auto-caching, or setting the cache with the revalidate object eg: `{revalidate: xx (seconds)}` , the cache then revalidates the cache after the number of seconds you specify.
