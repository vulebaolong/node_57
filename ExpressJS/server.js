import express from 'express';
import rootRouter from './src/routers/root.router.js'

const app = express();
const port = 3000;

app.use(express.json())
app.use(rootRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});