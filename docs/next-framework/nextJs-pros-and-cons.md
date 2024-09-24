---
layout: default
title: NextJS 
parent: next-framework
last_updated: Nov 2023
---

_Pros_
1) Uses React under the hood and manages all the package changes and updates of React and other code compilers/ transpilers like webpack, babel etc. Makes package management easier
2) Version changes - from 12, to 13 and now to 14 - are well documented, React recommends Next as the go-to framework. There are quick support tutorials from Vercel over and above the good documentation and several good free YouTube tutorials to take you through the documentation as well
3) Hosting with Vercel is smooth and painless, builds are easier and the whole process from code writing to releasing an app and incremental releases of packages so much better than using some of the options out there
4) Opinionated - the good parts are it takes a lot of grunt work out of thinking through what to do and how to add features. It is feature-rich and what's missing is tinkering around the edges
5) Better DX (developer experience) - for all the reasons above DX is significantly better, despite the learning curve. While initially confusing, Next can be easy to manage once the fundamentals are embedded


_Cons_
1) Opinionated and inflexible
2) Created and managed by Vercel so direction of travel led by owner for hosting options
3) Other hosting options to Vercel result in loss of support, especially for edge hosting - outside your territory and global coverage. Next supports hosting at the edge, which provides fast performance worldwide. But keep in mind that some Node.js APIs, such as Broadcast Channel aren't supported on edge servers, so you may want to dig into the details before embracing the edge hosting model
4) Serverless hosting  you may lose support for features like middleware and incremental static regeneration
5) Learning curve - you need to know JavaScript, React before you can work on NextJS
6) Frequent package updates with breaking changes
7) Server side hosting means you lose the Window object/ constructor if you need to access it or any of its methods
8) Next supports the micro frontend pattern, so you can compose multiple micro frontends within a given Next.js page. However, page‑level routing makes it difficult to compose with more granularity. 
