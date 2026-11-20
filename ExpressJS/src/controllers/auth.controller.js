import { ACCESS_TOKEN_EXPIRES } from "../common/constant/app.constant.js";
import { reposponseSuccess } from "../common/helpers/response.helper.js";
import authService from "../services/auth.service.js";
import ms from "ms"

const authController = {
    register: async (req, res, next) => {
        const { fullName, email, password } = req.body;
        const result = await authService.register({ fullName, email, password });

        delete result.password;

        const resData = reposponseSuccess(result, "Đăng ký thành công");
        res.status(resData.statusCode).json(resData);
    },
    login: async (req, res, next) => {
        const { email, password } = req.body;
        const result = await authService.login({ email, password });

        res.cookie("accessToken", result, { httpOnly: true, maxAge: ms(ACCESS_TOKEN_EXPIRES), path: "/" })

        const resData = reposponseSuccess(true, "Đăng nhập thành công");
        res.status(resData.statusCode).json(resData);
    },
};

export default authController;
