import {UserSchema} from "./user-schema";
import {User} from "./user-types";

const createUser = async (email: string, password: string) => {
    return await UserSchema.create({email, password}) as unknown as Promise<User>
}

const findUserByEmail: (email: string) => Promise<User> = async (email: string) => {
    return await UserSchema.findOne({email}).exec() as unknown as Promise<User>;
}

export {
    createUser,
    findUserByEmail
}
