# Game Testing and commenting website for 2DGD students

## TODO:

- [ ] Redirect automatically to `/games` page after login.
- [ ] Fix google login redirect. Shows as `/#`, but should be `/#!/` or `/#!/games`.
- [ ] Preserve newlines in comments.


## Setup notes

### Auth setup

#### production.js
Changed 'http://localhost:3000/auth/github/callback' to
'http://gamenote-2dgd.rhcloud.com/auth/github/callback'. Looks the same on GitHub.

#### development.js
Changed 'http://localhost:3000/auth/github/callback' to
'http://localhost:1337/auth/github/callback'.

```
  http: {
	port: '1337',  // Port for web site
  },
  hostname: 'localhost',  // Host for web site
```
