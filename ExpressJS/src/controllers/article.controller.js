import { paginationValidate } from "../common/helpers/pagination.helper.js";
import { reposponseSuccess } from "../common/helpers/response.helper.js";
import articleService from "../services/article.service.js";

const articleController = {
    list: async (req, res, next) => {
        const { page, pageSize } = paginationValidate(req.query);

        const result = await articleService.list({ page, pageSize });

        const resData = reposponseSuccess(result, "Lấy danh sách Article thành công");
        res.status(resData.statusCode).json(resData);
    },
};

export default articleController;
