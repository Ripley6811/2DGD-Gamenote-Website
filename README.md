# Game Testing and commenting website for 2DGD students

## Instructions

After logging in, click on "Create New Game" to add a post linking to your game site.
Also create an optional screenshot to display on this website and add the link to the post.

Whenever you make changes to your game, edit the "Version ID" in the post and the game link
if you store the new version in a different location. Each comment
shows which version it referred to.

## TODO:

- [ ] Homepage redirects automatically to `/games` page whenever logged in.
- [x] Fix google login redirect. Shows as `/#`, but should be `/#!/` or `/#!/games`.
- [x] Preserve newlines in comments.
- [x] Change tab icon.
- [ ] Add email notification option when comments are added.


## Setup notes

### Auth setup

Hosted on **OpenShift**.

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
