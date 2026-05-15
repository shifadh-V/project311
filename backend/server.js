const express = require('express')
const app = express()

const connectDb = require('./config/db')
connectDb()
const blogroutes=require('./routes/blogroute')
const userroute=require('./routes/userrouter')
const cors = require ('cors')
app.use(cors())
app.use(express.json())
app.use('/user',userroute)
app.use('/blog',blogroutes)
const PORT = 3000

app.listen(PORT,()=>{
    console.log("Server Running")
})