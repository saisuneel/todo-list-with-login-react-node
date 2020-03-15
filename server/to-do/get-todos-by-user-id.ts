import {getTodos} from "./to-do-model";
import {constants} from "http2";
import {Request, Response} from "express";
import {getUserIdFromCookie} from "../config/get-user-id-from-cookie";

const getTodosByUserId = async (req: Request, res: Response) => {
    const userId = getUserIdFromCookie(req)

    const todos: any = await getTodos(userId)
    if (todos) {
        res.json({todos})
            .end()
    } else {
        res.status(constants.HTTP_STATUS_NOT_FOUND).end()
    }
}

export {getTodosByUserId}