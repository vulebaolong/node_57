import { responseError } from "./response.helper.js";

export const appError = (err, req, res, next) => {
    console.log("middleware đặc biệt", err);
    const resErr = responseError(err?.message, err?.statusCode, err.stack);
    res.status(resErr.statusCode).json(resErr);
};
