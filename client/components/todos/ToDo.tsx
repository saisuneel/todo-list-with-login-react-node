import React, {FormEvent, FunctionComponent} from "react"
import {TodoItem} from "../../../shared/todo-item";
import TodoDelete from "./TodoDelete";

type Props = {
    id?: string
    done?: boolean
    todos:TodoItem[]
    setTodos: any
}

const ToDo: FunctionComponent<Props> = ({todos, setTodos, id}) => {
    const todo = todos.filter(t=>t._id===id)[0]
    const onTodoChange = (e: FormEvent) => {
        todos.forEach(todo => {
            if(todo._id === id){
                const target = e.target as HTMLInputElement
                todo.content = target.value
            }
        })
        setTodos([...todos])
    }
    return (
        <li style={styles.listItem} >
            <input type="text"
                   value={todo.content}
                   onChange={(e)=>onTodoChange(e)}
                   style={styles.itemContent}/>
            <TodoDelete id={id}
                        setTodos={setTodos}
                        todos={todos}/>
        </li>
    )
};

const styles = {
    listItem: {
        margin: 0,
        padding: 0,
    },
    itemContent: {
        height: "30px",
        borderRadius: "0",
        border: "none",
        borderBottom: "1px solid rgba(0,0,0,0.3)",
        padding: "2px 7px 0px",
        marginBottom: "10px",
        marginLeft: "10px",
        marginRight: "3px",
        fontSize: "20px"
    },
};

export default ToDo
