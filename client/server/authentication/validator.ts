import  { check } from 'express-validator';

const registerValidator = [
    check('email', 'Email is required')
        .not()
        .isEmpty(),
    check('password', 'Password should be at least 8 characters long')
        .not()
        .isEmpty()
        .isLength({ min: 8 })
];

export {registerValidator};
