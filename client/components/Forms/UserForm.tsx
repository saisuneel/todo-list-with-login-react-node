import React, {FunctionComponent} from "react";
import InputGroup from "./InputGroup";
import Form from "./Form";
import {Routes} from "../../../shared/routes";

const UserForm: FunctionComponent = () => {
    return (
        <Form action={Routes.SING_IN}
              method={"POST"}>
            <InputGroup type={"email"} name={"email"} minLength={5} autoFocus={true}/>
            <InputGroup type={"password"} name={"password"} minLength={8}/>
        </Form>
    )
}

export default UserForm

