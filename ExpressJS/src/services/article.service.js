import {db} from "../common/prisma/db.ts"
const articleService = {
    list: async () => {
        const data = await db.orm.public.Articles.all()
        console.log(data);
        return data;
    },
};

export default articleService;
