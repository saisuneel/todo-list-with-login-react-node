import React, {FunctionComponent, Fragment, CSSProperties} from "react";

interface Props {
    errorMsg: string | null
}

const Alert: FunctionComponent<Props> = ({errorMsg}) => {
    return (
        <Fragment>
            {errorMsg &&
            <div style={styles.alertBody}>
                {errorMsg}
            </div>}
        </Fragment>
    )
}

const styles = {
    alertBody: {
        fontSize: "20px",
        border: "1px solid red",
        borderRadius: "6px",
        position: "fixed",
        height: "37px",
        top: 0,
        left: 0,
        right: 0,
        maxWidth: "fit-content",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        background: "#ff8398",
        color: "white",
        textShadow: "0px 1px 1px rgba(0, 0, 0, 0.46)",
        fontWeight: "bold",
        padding: "10px 20px",
        zIndex: 1000,
        marginTop: "11px",
        boxShadow: "1px 2px 3px 1px #1714142b"
    } as CSSProperties
}

export default Alert