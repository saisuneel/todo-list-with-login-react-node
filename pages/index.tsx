import React, {Fragment}from 'react'
import {NextPage} from "next";
import UserForm from "../client/components/Forms/UserForm";

const IndexPage: NextPage = () => {
    return (
        <Fragment>
            <h1>Sign In</h1>
            <UserForm />
        </Fragment>
    )
}



export default IndexPage
