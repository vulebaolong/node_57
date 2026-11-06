import express from 'express';
import demoRouter from './demo.router.js';

export const rootRouter = express.Router()

rootRouter.use("/demo", demoRouter)
rootRouter.use("auth", () => {  })

export default rootRouter
