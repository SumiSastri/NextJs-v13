---
layout: default
title:  File-based routing
parent: client-side-routing
# has_children: true
last_updated: Nov 2023
---


# File-based routing

NextJS uses a file-based routing system. With NextJS 13 the `src`  folder has been eliminated, all client-side files are in the `app` folder.

Each subfolder forms a client-side route, with nested folders forming nested routes.
The [id] folder holds dynamic routes.

The next.config file in routes handles redirects on a permanent basis and international routes are baked in eg: fr/yoursite for france, but you can also use international domains if purchased.