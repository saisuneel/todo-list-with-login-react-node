import React, {CSSProperties, FunctionComponent, ReactNode} from "react";

export type HttpMethod = "GET" | "POST"

interface Props {
    children: ReactNode
    urlAction: string
    btnTxt: string
    method?: HttpMethod
}

const styles = {
    formTitle: {
        margin: "10px 17px"
    },
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
        border: "1px solid dimgray",
        cursor: "pointer"
    } as CSSProperties
}

const Form: FunctionComponent<Props> = (props: Props) => {
    const {children, urlAction, method = "GET", btnTxt} = props;
    const onClick = () => {

    }
    return (
        <form action={urlAction}
              method={method}
              style={styles.form}>
            <h1 style={styles.formTitle}>
                {btnTxt}
            </h1>
            {children}
            <button onClick={()=> onClick()}
                type="submit"
                    style={styles.submitBtn}>
                {btnTxt}
            </button>
        </form>
    )
}

export default Form
