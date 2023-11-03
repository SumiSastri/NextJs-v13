---
layout: default
title: Authentication options with NextJS 13
has_children: true
parent: forms-auth
last_updated: Nov 2023
---

# Authentication options with NextJS 13

The auth options open with NextJS 13 are many and it is up to you to decide how your use case fits in with the options available.

Here is a short list of some options in no particular order:

- iron-session - a low level auth option
- next-auth - is also open source with built-in federated auth like github, google and you can use JWT/ JWE (json-web-tokens/ json-web-encryptation) as well as email/ passwords and magic links
- the docs with how to use these options are extensive
- AuthO
- Clerk
- Firebase
- Magic
- Nhost
- Ory
- Supabase
- Supertokens
- Userbase

- For premium pages that are static, `getStaticProps()` and `getServerSideProps()` allow you to fetch pages server-side. A redirect to home page or custom page using `getServerSideProps()` can push the user that does not have a session token to pages that do not require auth
- Another server side option is to serve up a spinner and delay the load by fetching data via an API route.