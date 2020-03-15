import {Request} from "express";
import jwt from "jsonwebtoken";
import {Security} from "./security";

const getUserIdFromCookie = (req: Request) => {
    try {
        const token = req?.headers?.cookie?.split("=")[1] as string;
        const verifiedAndDecodedJwt = jwt.verify(token, Security.JWT_SECRET);
        //@ts-ignore
        return verifiedAndDecodedJwt.userId
    } catch (error) {
        return null
    }
}

export {getUserIdFromCookie}