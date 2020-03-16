import  { check } from 'express-validator';
import {Bcrypt} from "../server";

const validateUser = [
    check('email', 'Email is required')
        .not()
        .isEmpty(),
    check('password', 'Use a valid Password')
        .not()
        .isEmpty(),
    check('password', 'Password should be at least 8 characters long')
        .isLength({ min: 8 })
];


const validatePassword = async (reqPassword: string, userPassword: string): Promise<boolean> => {
    return await Bcrypt.compare(reqPassword, userPassword)
}

export {validateUser, validatePassword};
