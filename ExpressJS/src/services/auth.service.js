import { ACCESS_TOKEN_EXPIRES, ACCESS_TOKEN_SECRET } from "../common/constant/app.constant.js";
import { BadRequestException } from "../common/helpers/exception.helper.js";
import userRepository from "../repository/user.repository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authService = {
    register: async ({ fullName, email, password }) => {
        // kiểm tra xem email này đã được đăng ký chưa
        const userExists = await userRepository.getUserByEmail(email);
        if (userExists) throw new BadRequestException(`Email ${email} đã tồn tại, vui lòng đăng nhập`);

        // hash: băm và không thể khôi phục
        // encode: mã hoá, chuyển từ dữ liệu sang kiểu khác
        // decode: giải mã
        const hashPassword = bcrypt.hashSync(password, 10);

        // tạo user
        const userNew = await userRepository.createUser({ fullName, email, password: hashPassword });

        return userNew;
    },
    login: async ({ email, password }) => {
        // kiểm tra xem email này đã được đăng ký chưa
        const userExists = await userRepository.getUserByEmail(email);
        if (!userExists) throw new BadRequestException(`Email ${email} chưa tồn tại, vui lòng đăng ký`);

        // kiểm tra pass
        const isPassword = bcrypt.compareSync(password, userExists.password);
        if (!isPassword) throw new BadRequestException("Mật khẩu không chính xác");

        // tạo token
        // encode / decode: giải ngược
        const accessToken = jwt.sign({ sub: userExists.id }, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES });

        return accessToken;
    },
};

export default authService;
