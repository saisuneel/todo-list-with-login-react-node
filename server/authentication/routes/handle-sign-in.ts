import {Response, Request} from "express";
import {validationResult} from "express-validator";
import {constants} from "http2";
import {findUserByEmail} from "../../user/user-model";
import {User} from "../../user/user-types";
import {validatePassword} from "../auth-validator";
import {cookieResponse} from "../../config/cookie-response";
import {CookieKeys} from "../../config/cookie-keys";
import {createTokenWithUserId} from "./handle-register";

const onValidUser = async (req: Request, res: Response, user: User) => {
    const isPasswordValid = await validatePassword(req.body.password, user.password);
    if (isPasswordValid) {
        cookieResponse(res, CookieKeys.TOKEN, createTokenWithUserId(user));
    } else {
        res.status(constants.HTTP_STATUS_NOT_ACCEPTABLE).end()
    }
}

const onValidSignIn = async (req: Request, res: Response) => {
    const email = req.body.email;
    const user: User = await findUserByEmail(email)
    if (!user) {
        res.status(constants.HTTP_STATUS_NOT_FOUND).end()
    } else {
        await onValidUser(req, res, user);
    }
}

const handleSignIn = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(constants.HTTP_STATUS_NOT_ACCEPTABLE).end()
    } else {
        onValidSignIn(req, res);
    }
}

export {handleSignIn}
