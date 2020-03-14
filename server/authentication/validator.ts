import  { check } from 'express-validator';

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

export {validateUser};
