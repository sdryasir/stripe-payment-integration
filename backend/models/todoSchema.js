import mongoose from 'mongoose';

const Schema = mongoose.Schema;

 const TodoSchema = new Schema({
    title:String,
    description:String,
    status:Boolean
})

export const Todo = mongoose.model('todo', TodoSchema);
