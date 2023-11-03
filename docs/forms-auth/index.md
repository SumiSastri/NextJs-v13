---
layout: default
title: Forms and Authenticaton 
has_children: true
parent: forms-auth
last_updated: Nov 2023
---

# Forms and Authenticaton 

Once you introduce user forms, you may also consider how users may sign-in to premium or restricted content - sometimes known as content above and below the fold or paywall.

Form data needs to be validated and you can use a variety of front-end validators - regex, JavaScript libraries like Yup or Zod, or vanilla JavaScript to validate data that moves through the stack, from client to server side.

Authentication may require further resources like encrypted cookies, access tokens and 3rd-party authentication via google, aws and other social authentication options.

NextJS has its own methods of handling forms and form submission but has no built-in authentication options or form-builder options.