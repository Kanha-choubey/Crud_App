const asyncHandler = require('express-async-handler')

const Todos = require("../models/todoModel")

const getTodos = asyncHandler( async(req,res)=>{

    const todos = await Todos.find()
    res.send(todos)
    
 })


const createTodo = asyncHandler(async(req,res) => {
    
    const {title , description} = req.body

    const todo = {
        title,
        description
    }

    const isCreated = await Todos.create(todo)

    if(!isCreated){
        throw new Error("Something Went Wrong")
    }

    res.send(isCreated)

})


const updateTodo = asyncHandler(async(req,res) => {
    
    const updatedTodo = await Todos.findByIdAndUpdate(req.params.id , req.body , {new : true})
    
    if(!updateTodo){
        throw new Error("Cant Update")
    }

    res.json(updatedTodo)

})

const getTodo = asyncHandler(async(req,res)=>{

    const todo = await Todos.findById(req.params.id)
    
    if(!todo){
        throw new Error("Not Found")
        res.status(404)
    }
    
    res.send(todo)

})


const deleteTodo = asyncHandler(async(req,res) => {
    
    // find document and delete
    const todo = await Todos.findByIdAndDelete(req.params.id)
    
    if(!todo){
        throw new Error("Not Found")
        res.status(404)
    }

    res.json({msg : "Deleted"})

})




module.exports = {getTodos , createTodo , getTodo , deleteTodo , updateTodo}