import userRepository from "../repository/user.repository.js";

const authService = {
    register: async ({ fullName, email, password }) => {
        console.log({ fullName, email, password });
        // kiểm tra xem email này đã được đăng ký chưa
        const userExists = await userRepository.getUserByEmail(email)
        console.log("userExists", userExists);
        return "register";
    },
};

export default authService;
