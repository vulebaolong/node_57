import articleRepository from "../repository/article.repository.js";

const articleService = {
    list: async ({ page, pageSize, id, content, views }) => {
        const offset = (page - 1) * pageSize;

        const data = await articleRepository.getList({ offset: offset, limit: pageSize, id, content, views });

        const totalItem = await articleRepository.count({ id, content, views });

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
