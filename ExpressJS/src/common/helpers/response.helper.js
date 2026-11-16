export const reposponseSuccess = (data = null, message = "OK", statusCode = 200) => {
    return {
        status: `success`,
        statusCode: statusCode,
        message: message,
        data: data,
    };
};

export const responseError = (message = "Internal Server Error", statusCode = 500, stack = null) => {
    return {
        status: `error`,
        statusCode: statusCode,
        message: message,
        stack: stack,
    };
};
