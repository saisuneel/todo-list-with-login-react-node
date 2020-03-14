import React, {Fragment} from 'react'
import {NextPage} from "next";

type Props = {
}

const ToDos: NextPage<Props> = ({ }) => {

    return (
        <Fragment>
            <h1>To do</h1>
            <ul>
                <li>Todo 1<input type="checkbox"/></li>
                <li>Todo 2<input type="checkbox"/></li>
                <li>Todo 3<input type="checkbox"/></li>
            </ul>
        </Fragment>
    )
}

export default ToDos
