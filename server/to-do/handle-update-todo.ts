import {updateTodo} from "./to-do-model";
import {constants} from "http2";
import {TodoItem} from "../../shared/todo-item";
import {Request, Response} from "express";
import {getUserIdFromCookie} from "../config/get-user-id-from-cookie";

const handleUpdateTodo = async (req: Request, res: Response) => {
    const userId = getUserIdFromCookie(req)
    const todo: TodoItem = {
        content: req?.body?.content || "",
        done: false,
        userId
    };

    const isUpdated: any = await updateTodo(todo)
    if (isUpdated) {
        res.status(constants.HTTP_STATUS_CREATED).end()
    } else {
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).end()
    }
}

export {handleUpdateTodo}