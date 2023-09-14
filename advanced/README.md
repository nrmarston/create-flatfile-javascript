## Advanced: Reusing a Space

Choose this option when users might need to wait or can’t finish in one go. It’s great for keeping work context and letting users continue where they left off until the task is done.

1. To get started, update your .env.example to .env and add your keys.

BASE_URL=https://platform.flatfile.com/api
SECRET_KEY=sk_1234
SPACE_ID=us_sp_1234

2. Then, start your server with run `npm run server` in your terminal`
3. Then, run `npm run start-advanced mode` in your terminal to start your client.
4. Head to your localhost url output in the terminal and click the Flatfile button. You'll see your Space just as you left it last time.
5. Upload a file (find getting-started.csv in root) or manually enter some data.

For more instructions, follow the guide [here](flatfile.com/docs/guides/use-cases/embedding/javascript)
