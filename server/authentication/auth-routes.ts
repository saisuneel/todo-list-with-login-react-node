import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {Response, Request} from "express";
import {validationResult} from "express-validator";
import {constants} from "http2";
import {Security} from "../config/security";
import {createUser, findUserByEmail} from "../user/user-model";
import {User} from "../user/user-types";

const handleRegister = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(constants.HTTP_STATUS_NOT_ACCEPTABLE).end()
    } else {
        onValidRegister(req, res)
    }
}

const onValidRegister = async (req: Request, res: Response) => {
    try {
        const email = req.body.email
        const password = await bcrypt.hash(req.body.password, Security.SALT_ROUNDS)
        await createUser(email, password)

        res.status(constants.HTTP_STATUS_CREATED).json({saved: true}).end()

    } catch (error) {
        res.json({error}).status(constants.HTTP_STATUS_UNAUTHORIZED).end()
    }
}

// @ts-ignore
const validatePassword = async (reqPassword: string, userPassword: string): Promise<boolean> => {
    return await bcrypt.compare(reqPassword, userPassword)
}

const hoursAfterNow = (hours: number) => new Date(Date.now() + hours * 3600000)

const respondWithTokenCookie = (res: Response, token: string) => {
    console.log("respondWithTokenCookie()")
    res.cookie(token, token, {
        // httpOnly: true,
        // secure: true,
        expires: hoursAfterNow(24)
    }).status(constants.HTTP_STATUS_OK).end()
}

const onValidSignIn = async (req: Request, res: Response) => {
    const email = req.body.email;
    const user: User = await findUserByEmail(email)
    console.log("user", user)
    if (!user) {
        res.status(constants.HTTP_STATUS_NOT_FOUND).end()

    } else {
        const isPasswordValid = await validatePassword(req.body.password, user.password);
        console.log("isPasswordValid", isPasswordValid)
        if (isPasswordValid) {
            const userId = user._id;
            let token = jwt.sign({userId}, Security.JWT_SECRET);
            respondWithTokenCookie(res, token);
        } else {
            res.status(constants.HTTP_STATUS_NOT_ACCEPTABLE).end()
        }
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

export {handleRegister, handleSignIn}
