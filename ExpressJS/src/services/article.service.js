import articleRepository from "../repository/article.repository.js";

const articleService = {
    list: async ({ page, pageSize }) => {
        const offset = (page - 1) * pageSize;

        const data = await articleRepository.getList({ offset: offset, limit: pageSize });

        const totalItem = await articleRepository.count();

        return {
            page: page,
            pageSize: pageSize,
            totalPage: Math.ceil(totalItem / pageSize),
            totalItem: totalItem,
            items: data,
        };
    },
};

export default articleService;
