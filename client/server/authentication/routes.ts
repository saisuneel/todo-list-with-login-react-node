import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {userSchema} from "./user";
import {User} from "./types";
import {NextFunction, Response, Request} from "express";
import {validationResult} from "express-validator";

const router = express.Router();

const handleRegister = (req: Request, res: Response) => {
    const errors = validationResult(req);
    console.log("handleRegister req.body", req.body);

    if (!errors.isEmpty()) {
        console.log("handleRegister validation error");
        return res.status(422).jsonp(errors.array());
    } else {
        console.log("handleRegister > proceed");
        bcrypt.hash(req.body.password, 10)
            .then((hash) => {
                console.log("handleRegister > proceed 1");
                const user = new userSchema({
                    email: req.body.email,
                    password: hash
                });
                user.save().then((response) => {
                    console.log("handleRegister > proceed 2");
                    res.status(201).json({
                        message: "User successfully created!",
                        result: response
                    });
                }).catch(error => {
                    console.log("handleRegister > proceed 3 error");
                    res.status(500).json({
                        error: error
                    });
                });
            });
    }
    ;
}

const handleSignIn = (req: Request, res: Response) => {
    let getUser: User;
    userSchema.findOne({
        email: req.body.email
        // @ts-ignore TODO
    }).then((user) => {
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        // @ts-ignore TODO
        getUser = user;
        // @ts-ignore TODO
        return bcrypt.compare(req.body.password, user.password);
        // @ts-ignore TODO
    }).then(response => {
        if (!response) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        let jwtToken = jwt.sign({
            email: getUser.email,
            // @ts-ignore TODO
            userId: getUser._id
        }, "longer-secret-is-better", {
            expiresIn: "1h"
        });
        res.status(200).json({
            token: jwtToken,
            expiresIn: 3600,
            msg: getUser
        });
        // @ts-ignore TODO

    }).catch(err => {
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
};

const handleUserProfile = (req: Request, res: Response, next: NextFunction) => {
    userSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
}


// Get Users TODO
router.route('/').get(
    // @ts-ignore TODO
    (req, res, next) => {
        userSchema.find((error, response) => {
            if (error) {
                return next(error)
            } else {
                res.status(200).json(response)
            }
        })
    })

export {handleRegister, handleSignIn, handleUserProfile}
