import React, {FunctionComponent} from "react";
import InputGroup from "./InputGroup";
import Form from "./Form";
import {Routes} from "../../../shared/routes";

const UserForm: FunctionComponent = () => {
    return (
        <Form urlAction={Routes.SING_IN}
              method={"POST"}
              btnTxt={"Sign In"}>
            <InputGroup type={"email"} name={"email"} minLength={5} autoFocus={true}/>
            <InputGroup type={"password"} name={"password"} minLength={8}/>
        </Form>
    )
}

export default UserForm

