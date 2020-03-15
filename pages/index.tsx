import React, {Fragment}from 'react'
import {NextPage} from "next";
import UserForm from "../client/components/forms/UserForm";

const IndexPage: NextPage = () => {
    return (
        <Fragment>
            <UserForm />
        </Fragment>
    )
}



export default IndexPage
