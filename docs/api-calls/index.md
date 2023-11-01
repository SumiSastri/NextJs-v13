---
layout: default
parent: api-calls
has_children: true
last_updated: Oct 2023
---

# Data fetching with NextJS 13

To fetch data this app uses the mock-server `json-server`, mock data is in the folder `_db`. Since the components are server-side by default, the Fetch-API can be used directly in the component.

See `nextjs13-demo-app/app/tickets/ticketsList.jsx`

There is a great explaination of how data is fetched and cached in this Net Ninja Tutorial
[Tutorial 6 Data-fetching](https://www.youtube.com/watch?v=PAXWRgEo7Ns)

Also see json-server to set up a quick mock server.