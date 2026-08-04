# AshcrestHQ Website

Welcome to the official website of [AshcrestHQ](https://github.com/AshcrestHQ), forged in the cosmic void.

## About
This repository contains the static source code for the AshcrestHQ website. It serves as our central hub for projects, documentation, contributions, and community stats.

## Development

The site is built using pure HTML, Tailwind CSS (via CDN for static hosting), and Vanilla JavaScript. 

To run it locally, you don't need any complex build steps. Just serve the directory:

### Using Python:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Using Node:
```bash
npx serve .
```

## Features
- **Dynamic Projects**: Filters and searches through our open-source tools instantly on the client side.
- **Live Community Stats**: Hooks directly into the Discord Widget API and GitHub APIs to pull active network states.
- **Webhook Blog**: Live GitHub event stream pulling recent pushes, PRs, and issues directly from our repositories.

## License
Released under the MIT License.
