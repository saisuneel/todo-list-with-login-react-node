import React, {CSSProperties, FunctionComponent, ReactNode} from "react";

export type HttpMethod = "GET" | "POST"

interface Props {
    children: ReactNode
    action?: string
    method?: HttpMethod
}

const styles = {
    form: {
        borderRadius: "3px",
        border: "1px solid dimgrey",
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
    } as CSSProperties,
    submitBtn: {
        padding: "10px 17px",
        width: "fit-content",
        borderRadius: "4px",
        fontWeight: "bolder",
        textTransform: "uppercase",
        fontSize: "12px",
        alignSelf: "flex-end",
        margin: "0 20px 20px",
        border: "1px solid dimgray"
    } as CSSProperties
}

const Form: FunctionComponent<Props> = (props: Props) => {
    const {children, action, method = "GET"} = props;
    return (
        <form action={action} method={method} style={styles.form}>
            {children}
            <button type="submit" style={styles.submitBtn}>Sign In</button>
        </form>
    )
}

export default Form
