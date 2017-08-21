const express = require('express')
const router = express('Router')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let userRouter = require("./router/user-router");

app.use('/', userRouter)

app.listen(3030, ()=>{
    console.log("nyambung ka express, port 3030");
})
