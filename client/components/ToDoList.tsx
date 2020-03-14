import React from "react";
import ToDo from "./ToDo";

const ToDoList: React.FunctionComponent = () => {
    return (
        <ul>
            <ToDo content={"Foo"} />
            <ToDo content={"Bar"} />
        </ul>
    )
}

export default ToDoList
