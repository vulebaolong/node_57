import { reposponseSuccess } from "../common/helpers/response.helper.js";
import demoService from "../services/demo.service.js";

const demoControler = {
    query: (req, res, next) => {
        console.log("req.query", req.query);
        const result = demoService.query(req.query);
        const resData = reposponseSuccess(result, "OK FE ĐEP TRẠI");
        res.status(resData.statusCode).json(resData);
    },
    param: (req, res, next) => {
        const result = demoService.param(req.params);
        const resData = reposponseSuccess(result, "Get Param Thành công");
        res.status(resData.statusCode).json(resData);
    },
    headers: (req, res, next) => {
        const result = demoService.headers(req.headers);
        const resData = reposponseSuccess(result, "Get Headers Thành công");
        res.status(resData.statusCode).json(resData);
    },
    body: (req, res, next) => {
        const result = demoService.body(req.body);
        const resData = reposponseSuccess(result, "Get Body Thành công");
        res.status(resData.statusCode).json(resData);
    },
};

export default demoControler;
