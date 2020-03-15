import React, {Fragment} from 'react'
import {NextPage} from "next";
import ToDoList from "../client/components/todos/ToDoList";

type Props = {}

const ToDos: NextPage<Props> = ({}) => {

    return (
        <Fragment>
            <h1>To do</h1>
            <ToDoList/>
        </Fragment>
    )
}

export default ToDos
