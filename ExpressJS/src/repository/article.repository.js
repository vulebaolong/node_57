import { db } from "../common/prisma/db.ts";

const articleRepository = {
    getList: async ({ limit, offset }) => {
        return await db.orm.public.Articles.limit(limit).offset(offset).all();
    },
    count: async () => {
        const result = await db.orm.public.Articles.aggregate((a) => {
            return {
                total:  a.count()
            }
        });

        return result.total
    },
};

export default articleRepository;
