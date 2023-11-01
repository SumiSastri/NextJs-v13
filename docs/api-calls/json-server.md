---
layout: default
title:  Working with a mock server
parent: api-calls
has_children: true
last_updated: Oct 2023
---

# Working with a mock server

To fetch data this app uses the mock-server `json-server`  which is an npm package. There are other mock servers like MirageJs. The `json-server` is one of the quickest ways to build out a backend database with mock data and fake server calls to fetch data.

- To install cd into demo app and `npm install json-server -g`. The version installed is `json-server@0.17.4`. The package gets installed directly into node_modules - you will not see it in the `package-json` file it gets installed in a dotfile eg: `.nvm/versions/node/v20.6.0/lib/node_modules/json-server/lib/cli/bin.js`
- data mocks in `_db` folder
- Once installed you can spin-up the server with the command `json-server --watch --port 4000 ./_db/db.json`.  You will see the success message

```bash
 Loading ./_db/db.json
  Done
```

You can now open [http://localhost:4000/tickets](http://localhost:4000/tickets) with your browser.
