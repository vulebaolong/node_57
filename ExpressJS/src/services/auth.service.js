import { BadRequestException } from "../common/helpers/exception.helper.js";
import userRepository from "../repository/user.repository.js";
import bcrypt from "bcrypt"

const authService = {
    register: async ({ fullName, email, password }) => {
        // kiểm tra xem email này đã được đăng ký chưa
        const userExists = await userRepository.getUserByEmail(email)
        if (userExists) throw new BadRequestException(`Email ${email} đã tồn tại, vui lòng đăng nhập`)

        // hash: băm và không thể khôi phục
        // encode: mã hoá, chuyển từ dữ liệu sang kiểu khác
        // decode: giải mã
        const hashPassword = bcrypt.hashSync(password, 10);

        // tạo user
        const userNew = await userRepository.createUser({ fullName, email, password: hashPassword })

        return userNew;
    },
};

export default authService;
