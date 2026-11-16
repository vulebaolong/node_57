import express from 'express';
import demoRouter from './demo.router.js';
import articleRouter from './article.router.js';
import authRouter from './auth.router.js';

const rootRouter = express.Router()

rootRouter.use("/demo", demoRouter)
rootRouter.use("/article", articleRouter)
rootRouter.use("/auth", authRouter)

export default rootRouter
