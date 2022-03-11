# Safient Wallet

A non custodial recoverable and inheritable wallet application built on [Safient Protocol](https://safient.io)

We are building this at [ETHDenver 2022](https://www.ethdenver.com) 👨‍🏭

## Getting Started

Install dependencies and start the client:

```bash
npm install | yarn install
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build the client:

```bash
npm install | yarn install
npm build
```

Add an `.env` in root folder with following variables
REACT_APP_MAGIC_PUBLISHABLE_KEY=MagicLinkKey
REACT_APP_SERVER_URL=http://localhost:8080
SKIP_PREFLIGHT_CHECK=true

Add an `.env` in middleware folder with following variables
MAGIC_SECRET_KEY=Secret
CLIENT_URL=http://localhost:3000

## Contributing

You are welcome to submit issues and enhancement requests and work on any of the existing issues. Follow this simple guide to contribute to the repository.

1.  **Create** or pick an existing issue to work on
2.  **Fork** the repo on GitHub
3.  **Clone** the forked project to your own machine
4.  **Commit** changes to your own branch
5.  **Push** your work back up to your forked repo
6.  Submit a **Pull request** from the forked repo to our repo so that we can review your changes

## Resources:

- [Web App](https://wallet.safient.co)

## Technologies used:

- [Ceramic IDX](https://idx.xyz/)
- [Textile ThreadDb](https://docs.textile.io/threads/)
