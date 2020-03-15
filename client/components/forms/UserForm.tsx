import React, {FunctionComponent, MouseEvent, useState} from "react";
import InputGroup from "./InputGroup";
import Form from "./Form";
import {Routes} from "../../../shared/routes";
import {postRequest} from "../../../shared/http";
import { useRouter } from 'next/router'

interface Props {
    title: string
    postUrl: string
}
const UserForm: FunctionComponent<Props> = ({title, postUrl}) => {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("")

    const onClick = async (e: MouseEvent) => {
        e.preventDefault();
        try {
            const response = await postRequest(postUrl, {email, password})
            const isSignedUp = Number(response.status) === 200;
            const isRegistered = Number(response.status) === 201;
            if (isSignedUp || isRegistered) {
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
              btnTxt={title}>
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

