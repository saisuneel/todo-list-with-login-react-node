import React, {FunctionComponent} from "react"
import {TodoItem} from "./types";

type Props = {
    id?: string
    done?: boolean
    todos:TodoItem[]
    setTodos: any
}

const ToDo: FunctionComponent<Props> = ({todos,id}) => {

    const todo = todos.filter(t=>t.id===id)[0]


    return (
        <li style={styles.listItem}>
            <input type="text"
                   value={todo.content}
                   style={styles.itemContent}/>
            <button style={styles.itmDelete}
                    aria-label="delete todo item">
                <svg xmlns="http://www.w3.org/2000/svg"
                     style={styles.svgDelIc}
                     width="20"
                     height="20"
                     viewBox="0 0 24 24">
                    <path
                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/>
                </svg>
            </button>
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
    itmDelete: {
        border: "none",
        cursor: "pointer",
        height: "fit-content",
        width: "fit-content"
    },
    svgDelIc: {
        marginBottom: "-3px"
    }
};

export default ToDo
