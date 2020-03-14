import React from 'react'
import Link from 'next/link'
import {NextPage} from "next";

const IndexPage: NextPage = () => {
    return (
    <ul>
        <a>Login</a>
        <li>
            <Link href="/to-dos">
                <a>To-do's</a>
            </Link>
        </li>
    </ul>
    )
}

export default IndexPage
