---
layout: default
title: What are server components?
has_children: true
parent: server-components
last_updated: Oct 2023
---

# What are server components?

Client components are sections of an app where the code is written on the client-side and rendered on the client-side to be read (parsed) by browser JavaScript engines.

Server components are sections of the app where the code is written on server-side and rendered via the root hyper-text-markup-language (HTML) page.

In the latest version of NextJS, these server-components are hydrated as well on the backend sending smaller JavaScript files to the client-side browsers to be hydrated.

Server components are good for API-keys, access tokens and large datasets that can be handled on the backend of the application rather than the front end.

Also see static-site-generation and server-side-generationc sections.