import {Request, Response} from "express";
import {Security} from "../../config/security";
import {createUser} from "../../user/user-model";
import bcrypt from "bcrypt";
import {constants} from "http2";
import {validationResult} from "express-validator";
import {CookieKeys} from "../../config/cookie-keys";
import jwt from "jsonwebtoken";
import {cookieResponse} from "../../config/cookie-response";
import {User} from "../../user/user-types";

const handleRegister = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(constants.HTTP_STATUS_NOT_ACCEPTABLE).end()
    } else {
        onValidRegister(req, res)
    }
}

export const createTokenWithUserId = (user: User) => {
    const userId = user._id
    return jwt.sign({userId}, Security.JWT_SECRET);
}

const onValidRegister = async (req: Request, res: Response) => {
    try {
        const email = req.body.email
        const password = await bcrypt.hash(req.body.password, Security.SALT_ROUNDS)
        const user: any = await createUser(email, password)
        cookieResponse(res, CookieKeys.TOKEN, createTokenWithUserId(user));
    } catch (error) {
        res.status(constants.HTTP_STATUS_CONFLICT).json({error}).end()
    }
}

export {handleRegister}
