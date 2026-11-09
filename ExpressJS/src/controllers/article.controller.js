import { reposponseSuccess } from "../common/helpers/response.helper.js";
import articleService from "../services/article.service.js";

const articleController = {
    list: (req, res, next) => {
        const result = articleService.list();
        const resData = reposponseSuccess(result, "Lấy danh sách Article thành công");
        res.status(resData.statusCode).json(resData);
    },
};

export default articleController;
