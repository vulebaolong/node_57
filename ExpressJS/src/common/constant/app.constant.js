import "dotenv/config";

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const ACCESS_TOKEN_EXPIRES = process.env.ACCESS_TOKEN_EXPIRES;

console.log({
    ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRES,
});
