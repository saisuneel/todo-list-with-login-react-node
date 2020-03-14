import express from "express";
import next from "next";
import {Response, Request} from "express";
import {middleware} from "./authentication/middleware";
import {handleRegister, handleSignIn, handleUserProfile} from "./authentication/routes";
import {registerValidator} from "./authentication/validator";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const startServer = async () => {
    // MongoDB conection
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/db", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
            console.log('Database connected')
        },
        error => {
            console.log("Database can't be connected: " + error)
        }
    )

// Remvoe MongoDB warning error
    mongoose.set('useCreateIndex', true);

    const port = 3000
    const dev = process.env.NODE_ENV !== 'production'
    const app = next({dev})
    await app.prepare()

    const nextJsGetHandler = (req: Request, res: Response) => app.getRequestHandler()(req, res)
    const server = express()

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
        extended: false
    }));
    server.use(cors());
    server.use(middleware)

    server.post("/register", registerValidator, handleRegister)
    server.post("/sign-in", handleSignIn)
    server.get('/user-profile/:id', handleUserProfile)
    server.all('*', nextJsGetHandler)

    server.listen(port, (err: Error) => {
        if (err) throw err
        console.log(`Server listening on http://localhost:${port}`)
    })
}


startServer()
