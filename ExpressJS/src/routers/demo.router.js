import express from "express";
import demoControler from "../controllers/demo.controller.js";
import { BadRequestException } from "../common/helpers/exception.helper.js";

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
demoRouter.post("/body", demoControler.body);

demoRouter.get(
    "/middleware",
    (req, res, next) => {
        req.abc = 123;
        console.log("mid 1");
        // kiểm tra không hài lòng
        if (false) {
            next();
        } else {
            // next(new Error("kiểm tra không hài lòng"));
            // next(1);
             
            // lỗi không kiểm soát được
            // console.log(abc);

            // lỗi kiểm soát, 401
            throw new BadRequestException("Mật khẩu không đúng");
        }
    },
    (req, res, next) => {
        console.log("mid 2: ", req.abc);
        next();
    },
    (req, res, next) => {
        console.log("mid 3");
        next();
    },
    (req, res, next) => {
        res.json("ok");
    },
);

export default demoRouter;
