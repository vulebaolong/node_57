import { db } from "../common/prisma/db.ts";

const articleRepository = {
    getList: async ({ limit, offset, id, content, views }) => {
        let query = db.orm.public.Articles;

        if (id != null) {
            query = query.where({ id: id });
        }

        if (content) {
            query = query.where((a) => {
                return a.content.ilike(`%${content}%`);
            });
        }

        if (views != null) {
            query = query.where({ views: views });
        }

        const result = await query
            .limit(limit)
            .offset(offset)
            .orderBy((a) => {
                return a.createdAt.desc();
            })
            .all();

        return result;
    },
    count: async ({ id, content, views }) => {
        let query = db.orm.public.Articles;

        if (id != null) {
            query = query.where({ id: id });
        }

        if (content) {
            query = query.where((a) => {
                return a.content.ilike(`%${content}%`);
            });
        }

        if (views != null) {
            query = query.where({ views: views });
        }

        const result = await query.aggregate((a) => {
            return {
                total: a.count(),
            };
        });

        return result.total;
    },
};

export default articleRepository;
