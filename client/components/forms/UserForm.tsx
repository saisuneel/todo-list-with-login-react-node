import React, {FunctionComponent, MouseEvent, useState} from "react";
import InputGroup from "./InputGroup";
import Form from "./Form";
import {Routes} from "../../../shared/routes";
import {postRequest} from "../../../shared/http";
import { useRouter } from 'next/router'

const UserForm: FunctionComponent = () => {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("")

    const onClick = async (e: MouseEvent) => {
        e.preventDefault();
        try {
            const response = await postRequest(Routes.SING_IN, {email, password})
            if (Number(response.status) === 200) {
                router.push(Routes.TO_DOS)
            }
        } catch (e) {
            console.log("error on form submit", e)
            setErrorMsg("Check your credentials and try again")
        }
    }

    return (
        <Form onClick={onClick}
              errorMsg={errorMsg}
              btnTxt={"Sign In"}>
            <InputGroup
                value={email}
                setValue={setEmail}
                name={"email"}
                type={"email"}
                minLength={5}
                autoFocus={true}/>
            <InputGroup
                value={password}
                setValue={setPassword}
                type={"password"}
                name={"password"}
                minLength={8}/>
        </Form>
    )
}

export default UserForm

