import { db } from "../common/prisma/db.ts";

const userRepository = {
    getUserByEmail: async (email) => {
        return await db.orm.public.Users.whereUnique({ email: email }).first();
    },
    createUser: async ({ email, fullName, password }) => {
        return await db.orm.public.Users.create({
            email: email,
            fullName: fullName,
            password: password,
        });
    },
};

export default userRepository;
