Reproduction case for wireit watchers failing on Windows machines. 
Steps to reproduce: 

1. Clone repo
1. Install deps, `npm install`
1. Run serve, `npm run serve --watch`
1. Wait, after a couple of minutes the issue usually result in an exception. 

Running without `--watch` allows the service to continue indefinitely. 