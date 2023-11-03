---
layout: default
title: What is client-side-rendering
has_children: true
parent: server-side-rending
last_updated: Oct 2023
---

# What is client-side-rendering

Client-side-rendering all code is rendered in the browser on the client-side. 

There are sites where the code is written all on the client side and is fed into the root HTML (hyper-text-markup-language) file.

Browser JavaScript engines then pick up the files, read or parse them and then display them.

The stack is read HTML first, then the CSS (cascading style sheets) markup and finally the JavaScript code.

A DOM-tree (document-object-model) is created once all the files are read and parsed.

With React, the code may be written on a virtual-DOM first and then via a process of tree-shaking of the DOM-tree the exact page is rendered. While this is more performant, the files are all still created and rendered on the DOM client-side.

This results in slower rendering as the browsers' JavaScript engine is parsing a lot of bundled JavaScript, HTML and files on the fly. Users notice this with loading spinners when a large data-set is retrieved from the servers, many pages are requested or with a slow internet speed and bandwidth.

With server-side-rendering, a smaller set of bundled JavaScript files hydrate the HTML root file and the CSS is written in JavaScript -  all of this happens server-side. The load on browser JavaScript engines is lower and page rendering is speeded up.

Also see server-side-rendering, static-site-generation and server-components sections.