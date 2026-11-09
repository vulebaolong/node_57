import express from 'express';
import demoRouter from './demo.router.js';
import articleRouter from './article.router.js';

const rootRouter = express.Router()

rootRouter.use("/demo", demoRouter)
rootRouter.use("/article", articleRouter)

export default rootRouter
