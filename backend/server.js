const express = require('express')
const app = express()

const connectDb = require('./config/db')
connectDb()
const blogroutes=require('./routes/blogroute')

const userroute=require('./routes/userrouter')

app.use(express.json())
app.use('/',userroute)
app.use('/',blogroutes)
const PORT = 3000

app.listen(PORT,()=>{
    console.log("Server Running")
})