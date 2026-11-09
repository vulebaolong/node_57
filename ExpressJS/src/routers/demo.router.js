import express from "express";
import demoControler from "../controllers/demo.controller.js";

export const demoRouter = express.Router();

// 4 cách nhận dữ liệu FE gọi tới

// Query
// phân trang, lọc, truyền dữ liệu giữa 2 hệ thống trên web
demoRouter.get("/query", demoControler.query);

// Param
// lấy chi tiết - detail
demoRouter.get("/param/:id", demoControler.param);

// Header
// token, key
demoRouter.patch("/headers", demoControler.headers);

// Body
// dữ liệu nhiều field
demoRouter.post("/body", demoControler.body)


export default demoRouter;
