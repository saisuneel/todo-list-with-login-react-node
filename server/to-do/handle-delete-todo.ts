import {Request, Response} from "express";
import {deleteTodo} from "./to-do-model";
import {constants} from "http2";

const handleDeleteTodo = async (req: Request, res: Response) => {
    const deleteResponse: any = await deleteTodo(req.params.id)
    if (deleteResponse.deletedCount === 1) {
        res.status(constants.HTTP_STATUS_ACCEPTED).end();
    } else {
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).end();
    }
}

export {handleDeleteTodo}
