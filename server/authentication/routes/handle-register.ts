import {Request, Response} from "express";
import {Security} from "../../config/security";
import {createUser} from "../../user/user-model";
import bcrypt from "bcrypt";
import {constants} from "http2";
import {validationResult} from "express-validator";

const handleRegister = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(constants.HTTP_STATUS_NOT_ACCEPTABLE).end()
    } else {
        onValidRegister(req, res)
    }
}

const onValidRegister = async (req: Request, res: Response) => {
    try {
        const email = req.body.email
        const password = await bcrypt.hash(req.body.password, Security.SALT_ROUNDS)
        await createUser(email, password)

        res.status(constants.HTTP_STATUS_CREATED).json({saved: true}).end()

    } catch (error) {
        res.json({error}).status(constants.HTTP_STATUS_UNAUTHORIZED).end()
    }
}

export {handleRegister}
