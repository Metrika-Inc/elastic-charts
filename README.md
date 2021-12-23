# Elastic Charts

This is a fork of Elastic Charts, before the latter was moved to a non-Open Source license. It includes Metrika-provided bugfixes and is licensed under Apache 2.0. We endeavour to continue to maintain and improve this library as long as we use it. Feel free to provide fixes and suggestions.


Thanks,

The Metrika Team.

## How to install on Apple Silicon (M1)

Node canvas https://github.com/Automattic/node-canvas requires building on the local machine as there is no prebuilt binary at the moment (2021-12-21)

```bash
brew install pkg-config cairo pango libpng jpeg giflib librsvg

yarn install --build-from-source
```
