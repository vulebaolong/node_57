export const reposponseSuccess = (data = null, message = "OK", statusCode = 200) => {
    return {
        status: `success`,
        statusCode: statusCode,
        message: message,
        data: data,
    };
};