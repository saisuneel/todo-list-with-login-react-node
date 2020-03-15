import {CSSProperties} from "react";

export const styles = {
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
