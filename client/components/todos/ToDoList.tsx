import React, {FunctionComponent, Fragment, useState} from "react";
import ToDo from "./ToDo";
import {globalStyles} from "../global.styles";
import {TodoItem} from "./types";

const userTodos: TodoItem[] = [
    {
        done: true,
        content: "item 111",
        id: "1"

    } as TodoItem,
    {
        done: false,
        content: "item 222",
        id: "2"

    } as TodoItem]
const ToDoList: FunctionComponent = () => {

    const [todos, setTodos] = useState(userTodos)

    return (
        <Fragment>
            <ul style={styles.list}>
                {todos.map(todo =>
                    <ToDo
                        todos={todos}
                        setTodos={setTodos}
                        done={todo.done}
                        key={todo.id}
                        id={todo.id}/>)
                }
            </ul>
            <button style={globalStyles.submitBtn}>Add To Do</button>
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
