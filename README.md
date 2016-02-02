## Initial steps

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