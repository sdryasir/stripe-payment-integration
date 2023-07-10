import { Todo } from "../models/todoSchema.js"

export const getAllTodos = async function(req, res){
    const todos = await Todo.find({});
    res.json(todos)
}

export const getTodoById = async function(req, res){
    const id = req.query.id;
    const todo = await Todo.findById(id);
    res.json(todo)
}

export const createTodo = async function(req, res){
    await Todo.create(req.body);
    res.json("Todo has been saved");
}

export const updateTodo = async function(req, res){
    const id = req.query.id;
    const data = req.body;
    await Todo.findByIdAndUpdate(id, data)
    res.json("Todo with ID: "+id + " has been Updated")
}

export const deleteTodo = async function(req, res){
    const id = req.query.id;
    await Todo.findByIdAndDelete(id);
    res.json("Todo with ID: "+id + " has been deleted")
}