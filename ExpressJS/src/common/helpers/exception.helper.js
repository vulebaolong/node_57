import { statusCodes } from "./status-code.helper.js";

export class BadRequestException extends Error{
    constructor(message = "BadRequestException") {
        super(message)
        this.statusCode = statusCodes.BAD_REQUEST;
    }
}

export class NotFoundException extends Error{
    constructor(message = "NotFoundException") {
        super(message)
        this.statusCode = statusCodes.NOT_FOUND;
    }
}

// refresh token
export class ForbiddenException extends Error{
    constructor(message = "ForbiddenException") {
        super(message)
        this.statusCode = statusCodes.FORBIDDEN;
    }
}

// logout
export class UnAuthorizedException extends Error{
    constructor(message = "UnAuthorizedException") {
        super(message)
        this.statusCode = statusCodes.UNAUTHORIZED;
    }
}

export class TemporaryRedirectException extends Error{
    constructor(message = "TemporaryRedirectException") {
        super(message)
        this.statusCode = statusCodes.TEMPORARY_REDIRECT;
    }
}


