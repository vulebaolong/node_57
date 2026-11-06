import express from "express";
import demoControler from "../controllers/demo.controller.js";

export const demoRouter = express.Router();

demoRouter.get("/list", demoControler.list);

export default demoRouter;
