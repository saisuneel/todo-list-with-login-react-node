import express from "express";
import next from "next";
import {Response, Request} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import {Routes} from "../shared/routes";
import {authMiddleware} from "./authentication/auth-middleware";
import {validateUser} from "./authentication/auth-validator";
import {handleRegister} from "./authentication/routes/handle-register";
import {handleSignIn} from "./authentication/routes/handle-sign-in";
import {handleIsLoggedIn} from "./authentication/routes/handle-is-logged-in";

const startServer = async () => {
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
    server.use(authMiddleware)

    server.post(Routes.REGISTER, validateUser, handleRegister)
    server.post(Routes.SING_IN, validateUser, handleSignIn)
    server.get(Routes.IS_LOGGED_IN, handleIsLoggedIn)

    server.all('*', nextJsGetHandler)

    server.listen(port, (err: Error) => {
        if (err) throw err
        console.log(`Server listening on http://localhost:${port}`)
    })
}


startServer()
