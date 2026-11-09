import express from 'express';
import demoRouter from './demo.router.js';

export const rootRouter = express.Router()

rootRouter.use("/demo", demoRouter)

export default rootRouter
