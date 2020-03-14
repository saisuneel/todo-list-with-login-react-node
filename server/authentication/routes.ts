import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {Response, Request} from "express";
import {validationResult} from "express-validator";
import {constants} from "http2";
import {ErrorMessages} from "../config/error-messages";
import {Security} from "../config/security";
import {Routes} from "../../shared/routes";
import {UserSchema} from "./user/user-schema";
import {User} from "./types";

const handleRegister = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(constants.HTTP_STATUS_NOT_ACCEPTABLE).redirect(Routes.HOME)
    } else {
        onValidRegister(req, res)
    }

}

const onValidRegister = async (req: Request, res: Response) => {
    try {
        const email = req.body.email
        const password = await bcrypt.hash(req.body.password, Security.SALT_ROUNDS)
        const user = new UserSchema({email, password})

        await user.save()
        res.status(constants.HTTP_STATUS_CREATED).json({saved: true}).end()

    } catch (error) {
        responseWithError(
            res,
            constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
            ErrorMessages.REGISTER_ERROR
        )
    }
}

// @ts-ignore
const validatePassword = async (reqPassword: string, userPassword: string): Promise<boolean> => {
    return await bcrypt.compare(reqPassword, userPassword)
}

const onValidSignIn = async (req: Request, res: Response) => {
    const email = req.body.email;
    const user = await UserSchema.findOne({email}).exec() as unknown as User
    if (!user) {
        res.status(constants.HTTP_STATUS_NOT_FOUND).end()

    } else {
        const isPasswordValid = await validatePassword(req.body.password, user.password);
        if (isPasswordValid) {
            const userId = user._id;
            let token = jwt.sign({userId}, Security.JWT_SECRET);
            res.status(constants.HTTP_STATUS_OK).json({token}).end()
        } else {
            res.status(constants.HTTP_STATUS_NOT_ACCEPTABLE).redirect(Routes.HOME)
        }
    }
}

const handleSignIn = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(constants.HTTP_STATUS_NOT_ACCEPTABLE).redirect(Routes.HOME)
    } else {
        onValidSignIn(req, res);
    }
}

const responseWithError = (res: Response, status: number, error: ErrorMessages) => {
    res.json({error}).status(status).end()
}

export {handleRegister, handleSignIn}
