import React, {FunctionComponent, ReactNode, MouseEvent} from "react"
import {styles} from "./form-styles"
import Alert from "../Alert";

interface Props {
    children: ReactNode
    btnTxt: string
    errorMsg: string
    onClick: (e: MouseEvent) => void
}

const Form: FunctionComponent<Props> = (props: Props) => {
    const {children, btnTxt, onClick, errorMsg} = props

    return (
        <form style={styles.form}>
            <Alert errorMsg={errorMsg}/>
            <h1 style={styles.formTitle}>{btnTxt}</h1>
            {children}
            <button onClick={(e) => onClick(e)}
                    style={styles.submitBtn}>
                {btnTxt}
            </button>
        </form>
    )
}

export default Form
