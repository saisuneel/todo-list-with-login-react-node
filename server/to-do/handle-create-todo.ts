import {Request, Response} from "express";
import {createTodo} from "./to-do-model";
import {constants} from "http2";
import {TodoItem} from "../../shared/todo-item";
import {getUserIdFromCookie} from "../config/get-user-id-from-cookie";

const handleCreateTodo = async (req: Request, res: Response) => {
    const userId = getUserIdFromCookie(req)
    const todo: TodoItem = {
        content: req?.body?.content || "",
        done: false,
        userId
    };

    const response: any = await createTodo(todo)
    if (response) {
        todo._id = response._id
        res.json({todo}).status(constants.HTTP_STATUS_CREATED).end();
    } else {
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).end();
    }
}

export {handleCreateTodo}