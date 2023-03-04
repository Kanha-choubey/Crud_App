const express = require('express')
const router = express.Router()
const {getTodos , createTodo , getTodo , deleteTodo , updateTodo} = require("../controller/todoController")

// Get All Todos
router.get('/' , getTodos)
// Create Single Todo
router.post('/create' , createTodo)
// Get Single Todo
router.get("/:id" , getTodo)
// Delete Todo
router.delete("/:id" , deleteTodo)
// Update Todo
router.put("/:id" , updateTodo)

module.exports = router