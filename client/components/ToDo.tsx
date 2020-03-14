import React, {FunctionComponent} from "react";

type Props = {
    content: string
}

const ToDo: FunctionComponent<Props> = ({content}) => {
    return <li><input type="checkbox"/>{content}</li>
};

export default ToDo
