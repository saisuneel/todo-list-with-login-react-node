import {NextFunction, Response, Request} from "express";
// @ts-ignore
import jwt from "jsonwebtoken";

// @ts-ignore
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    /* TODO if not auth redirect to HOME
    try {
        const token = req?.headers?.authorization?.split(" ")[1] as string;
        jwt.verify(token, "longer-secret-is-better");
        next();
    } catch (error) {
        res.status(401).json({ message: "Authentication failed!" });
    }
    */
    next()
};

export {
    authMiddleware
}

