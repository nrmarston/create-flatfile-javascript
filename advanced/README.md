## Advanced: Reusing a Space

Choose this option when users might need to wait or can’t finish in one go. It’s great for keeping work context and letting users continue where they left off until the task is done.

1. Open a terminal in the root of this project.
2. Update your `.env.example` to `.env` and add your keys.

```
BASE_URL=https://platform.flatfile.com/api
FLATFILE_API_KEY=sk_1234
SPACE_ID=us_sp_1234
```

3. Then, start your server with run `npm run server` in your terminal`
4. Then, run `npm run start-advanced-mode` in your terminal to start your client.
5. Head to your `localhost` url output in the terminal and click the Flatfile button. You'll see your Space just as you left it last time.
6. Upload a file (find getting-started.csv in root) or manually enter some data.

For more instructions, follow the guide [here](https://flatfile.com/docs/guides/use-cases/embedding/javascript)
