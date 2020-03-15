import React, {FunctionComponent, CSSProperties} from "react"
import {Routes} from "../../../shared/routes"
import Link from "next/link";

const Nav: FunctionComponent = () => {
    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <Link href={Routes.HOME}>
                    <a style={styles.navLink}>Register</a>
                </Link>
                <Link href={Routes.SIGN_IN}>
                    <a style={styles.navLink}>Sign In</a>
                </Link>
            </nav>
        </header>
    )
}

const styles = {
    header: {
        borderBottom: "1px solid dimgrey",
        height: "70px",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
    } as CSSProperties,
    nav: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-end"
    },
    navLink: {
        display: "flex",
        flex: 1,
        maxWidth: "100px",
        alignItems: "center",
        justifyContent: "center"
    }
}
export default Nav


