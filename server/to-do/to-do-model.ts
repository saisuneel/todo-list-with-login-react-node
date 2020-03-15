import {TodoSchema} from "./to-do-schema";
import {TodoItem} from "../../shared/todo-item";

const createTodo = async (todo: TodoItem) => {
    return await TodoSchema.create(todo)
}

const updateTodo = async (todo: TodoItem) => {
    const _id = todo._id;
    const doc = await TodoSchema.findOne({_id})
    if (doc) {
        doc.overwrite({content: todo.content, done: todo.done})
        await doc.save();
        return true
    } else {
        return false
    }
}

const getTodos = async (userId: string) => {
    return await TodoSchema.find({userId})
}

const deleteTodo = async (_id: string) =>{
    return await TodoSchema.deleteOne({_id})
}

export {
    createTodo,
    updateTodo,
    getTodos,
    deleteTodo
}