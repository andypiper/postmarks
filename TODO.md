- [ ] add 404 route handler
- [ ] add settings
  - update description (about page)
  - enable/disable opensearch
  - override default icon, theme
- [ ] add robots.txt (send PR) 
  - maybe also bot detection / logging
  - bot noindex HTML meta tag
- [ ] add API
- [ ] strip crap from URLs / no tracking
- [ ] add Microformats support
  - include in FEDERATION.md
  - send PR
- [ ] implement content security?
- [ ] configure Helmet
- [ ] add Atom information in FEDERATION.md
- [ ] write user guide
- [ ] domain for project (.org, .dev?)
- [ ] admin console for checking on federation errors (e.g. failed AP exchanges)
  - make it easier to clean up followers
  - [ ] server side error alerting
~~- [ ] app.use favicon~~


- [ ] error handling for unknown routes (return 404, with HTML if user-agent is browser?)
```
/.well-known/x-nodeinfo2
/api/v3/site
/api/v3/federated_instances (lemmy-stats-crawler)
/api/v1/instance/peers
```

- [ ] landing page for project
  - “what is Postmarks”
  - link to source
  - to demo site
  - simple “up-and-running on Glitch/other” instructions
    - https://xavier.arnaus.net/blog/install-and-customize-postmarks-into-a-raspberry-pi
  - submit-your-own list of instances for others to explore and follow
  - add link to tools
    - [browser extension](https://github.com/andypiper/postmarks-ext)
    - [Apple Shortcut](https://routinehub.co/shortcut/16547/)


### Naming

- scrapyard
- mysparks
- fedispark
- dropcatch
- dewdrops
- inkwell
- jottery "From Sparks to Marks – Welcome to Jottery" "Jottery: Quick saves for curious minds."
- jotterings "Your web finds, connected and shared."


### Notes

- added autofocus to input field on search page
