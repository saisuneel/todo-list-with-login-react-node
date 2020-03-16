import express, {Express} from "express";
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
import {handleCreateTodo} from "./to-do/handle-create-todo";
import {handleUpdateTodo} from "./to-do/handle-update-todo";
import {getTodosByUserId} from "./to-do/get-todos-by-user-id";
import {handleDeleteTodo} from "./to-do/handle-delete-todo";
import bcrypt from "bcrypt";

export const Bcrypt = bcrypt;

const startServer = async () => {
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://mongo:27017/db", {
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

    useMiddleware(server);
    handleRoutes(server);

    server.all('*', nextJsGetHandler)

    server.listen(port, (err: Error) => {
        if (err) throw err
        console.log(`*********************************************`)
        console.log(`Server listening on http://localhost:${port}`)
        console.log(`*********************************************`)
    })
}

const useMiddleware = (server: Express) => {
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
        extended: false
    }));
    server.use(cors());
    server.use(authMiddleware)
}

const handleRoutes = (server: Express) => {
    server.get(Routes.TO_DO, getTodosByUserId)
    server.post(Routes.TO_DO, handleCreateTodo)
    server.put(Routes.TO_DO, handleUpdateTodo)
    server.delete(`${Routes.TO_DO}/:id`, handleDeleteTodo)

    server.post(Routes.REGISTER, validateUser, handleRegister)
    server.post(Routes.SIGN_IN, validateUser, handleSignIn)
    server.get(Routes.LOGGED_IN, handleIsLoggedIn)
}

startServer()
