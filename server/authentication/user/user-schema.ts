import mongoose from "mongoose"

const Schema = mongoose.Schema;

const UserSchema = mongoose.model('User',
    new Schema({
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        }
    }, {
        collection: 'users'
    })
)

export {UserSchema}
