import React, {FunctionComponent} from "react";
import ToDo from "./ToDo";

const ToDoList: FunctionComponent = () => {
    return (
        <ul>
            <ToDo content={"Foo"} />
            <ToDo content={"Bar"} />
        </ul>
    )
}

export default ToDoList
