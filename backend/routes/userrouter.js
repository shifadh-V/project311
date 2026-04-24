const express=require('express')
const Router=express.Router()
const usercontroller=require('../controllers/usercontroller')

Router.post('/createuser',usercontroller.createUser)
Router.post('/login',usercontroller.createUser)

module.exports= Router