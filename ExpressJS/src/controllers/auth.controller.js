import { reposponseSuccess } from "../common/helpers/response.helper.js";
import authService from "../services/auth.service.js";

const authController = {
    register: async (req, res, next) => {
        const { fullName, email, password } = req.body;
        const result = await authService.register({ fullName, email, password });
        const resData = reposponseSuccess(result, "Đăng ký thành công");
        res.status(resData.statusCode).json(resData);
    },
};

export default authController;
