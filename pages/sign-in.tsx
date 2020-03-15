import React, {Fragment} from 'react'
import {NextPage} from "next";
import UserForm from "../client/components/forms/UserForm";
import Nav from "../client/components/shared/Nav";
import {Routes} from "../shared/routes";

const SignIn: NextPage = () => {
    return (
        <Fragment>
            <Nav/>
            <UserForm title={"Sign In"} postUrl={Routes.SIGN_IN}/>
        </Fragment>
    )
}


export default SignIn
