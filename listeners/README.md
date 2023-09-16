## @flatfile/listener

The `@flatfile/listener` is part of the powerful Typescript/NodeJS SDK provided by Flatfile for working with events. It is essentially a library used for listening to Flatfile events.

You can use it in a server-side listener or a client-side listener when handling various events regarding data transformation, scoping with namespaces or any specific event and use case supported by Flatfile.

This folder contains some useful listener examples for you to use.

Learn more about different ways to use the listener [here](https://flatfile.com/docs/guides/).

### Developing with Flatfile client-side

Reference a listener in your flatfileOptions, that's it! Note: not all npm packages are supported browser-side.

### Developing with Flatfile server-side

1. Open a terminal in the root of this project.
2. In your `.env`, make sure you have the follow:

```
FLATFILE_ENVIRONMENT_ID=us_env_123456
FLATFILE_API_KEY=sk_123456 (your secret key)
```

3. Run `npx flatfile@latest develop listeners/simple.js` from terminal to launch a local listener.

When you're ready, deploy. Learn how [here](https://flatfile.com/docs/developer-tools/deploying).
