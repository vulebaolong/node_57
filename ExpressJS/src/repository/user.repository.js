import { db } from "../common/prisma/db.ts";

const userRepository = {
    getUserByEmail: async (email) => {
        return await db.orm.public.Users.first({ email: email });
    },
};

export default userRepository;
