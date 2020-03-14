import React from "react";

type Props = {
    content: string
}

type ToDo = React.FunctionComponent<Props>

const ToDo: ToDo = ({content}) => {
    return <li><input type="checkbox"/>{content}</li>
};

export default ToDo
