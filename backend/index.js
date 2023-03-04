const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require("./config/db")

const app = express()
const PORT = process.env.PORT || 1000

// DB Connection
connectDB()

// Body Parser

app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.get('/' , (req,res)=>{
    res.json({msg : "Welcome to CRUD API"})
})

app.use('/api/todo' , require("./routes/todoRoutes"))

app.listen(PORT , ()=>{
    console.log(`Server is running at PORT : ${PORT}`)
})