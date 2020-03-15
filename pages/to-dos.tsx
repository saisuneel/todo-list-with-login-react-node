import React, {CSSProperties} from 'react'
import {NextPage} from "next";
import ToDoList from "../client/components/todos/ToDoList";

type Props = {}

const ToDos: NextPage<Props> = ({}) => {

    return (
        <div style={styles.todos}>
            <h1 style={styles.headline}>To do</h1>
            <ToDoList/>
        </div>
    )
}

const styles = {
    headline: {
      margin: "0 0 0 5px",
    },
    todos: {
        border: "1px solid dimgray",
        padding: "10px",
        borderRadius: "3px",
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
    } as CSSProperties
}

export default ToDos
