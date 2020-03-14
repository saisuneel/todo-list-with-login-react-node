import express from "express";
import next from "next";
import {IncomingMessage, ServerResponse} from "http";

const startServer = async () => {
    const port = 3000
    const dev = process.env.NODE_ENV !== 'production'
    const app = next({dev})
    await app.prepare()

    const nextJsGetHandler = (req: IncomingMessage, res: ServerResponse) => app.getRequestHandler()(req, res)
    const server = express()

    server.all('*', nextJsGetHandler)

    server.listen(port, (err: Error) => {
        if (err) throw err
        console.log(`Server listening on http://localhost:${port}`)
    })
}


startServer()
