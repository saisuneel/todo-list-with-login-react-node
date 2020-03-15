import React, {FunctionComponent, Fragment, useState, useEffect} from "react";
import ToDo from "./ToDo";
import AddToDo from "./AddTodo";
import {TodoItem} from "../../../shared/todo-item";
import {getRequest} from "../../../shared/http";
import {Routes} from "../../../shared/routes";

const ToDoList: FunctionComponent = () => {

    const [todos, setTodos] = useState<TodoItem[]>([])
    const getUserTodos = async () => {
        try {
            const response = await getRequest(Routes.TO_DO)
            const responseTodos: TodoItem[] = response?.data?.todos
            setTodos([...responseTodos])
        } catch (e) {
            console.log("e", e)
        }
    }

    useEffect(() => {
        if (todos.length === 0) {
            getUserTodos()
        }
    })


    return (
        <Fragment>
            <ul style={styles.list}>
                {todos.map(todo =>
                    <ToDo
                        todos={todos}
                        setTodos={setTodos}
                        done={todo.done}
                        key={todo._id}
                        id={todo._id}/>)
                }
            </ul>
            <AddToDo setTodos={setTodos} todos={todos}/>
        </Fragment>
    )
}
const styles = {
    list: {
        listStyle: "none",
        paddingInlineStart: 0
    }
};

export default ToDoList
