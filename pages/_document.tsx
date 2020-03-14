import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import React from "react"

const styles = {
    body: {
        fontFamily: "Lato, sans-serif",
        padding: "10px 20px"
    }
}

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap"
                          rel="stylesheet"/>
                </Head>
                <body style={styles.body}>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
