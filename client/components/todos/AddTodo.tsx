import {FunctionComponent, MouseEvent, useState} from "react";
import Form from "../forms/Form";
import {postRequest} from "../../../shared/http";
import {Routes} from "../../../shared/routes";
import InputGroup from "../forms/InputGroup";
import {TodoItem} from "../../../shared/todo-item";

interface Props {
    todos:TodoItem[]
    setTodos:any
}
const AddToDo: FunctionComponent<Props> = ({todos,setTodos}) => {

    const [content, setContent] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const onClick = async (e: MouseEvent) => {
        e.preventDefault();
        try {
            const status = false
            const response = await postRequest(Routes.TO_DO, {content, status})
            const newTodo = response?.data?.todo
            if (newTodo) {
                setTodos([...todos, newTodo])
                setContent("")
            }
        } catch (e) {
            console.log("error", e)
            setErrorMsg("Can't add todo")
        }
    }

    return (
        <Form onClick={onClick}
              errorMsg={errorMsg}
              btnTxt={"Add To Do"}>
            <InputGroup
                value={content}
                setValue={setContent}
                name={"content"}
                type={"text"}
                minLength={5}
                autoFocus={true}/>
        </Form>
    )
}

export default AddToDo
