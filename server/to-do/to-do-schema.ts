import mongoose from "mongoose"

const Schema = mongoose.Schema;

const TodoSchema = mongoose.model('Todo',
    new Schema({
        content: {
            type: String,
        },
        done: {
            type: Boolean
        },
        userId: {
            type: String
        }
    }, {
        collection: 'todos'
    })
)

export {TodoSchema}