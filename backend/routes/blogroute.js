const express = require('express')
const Router= express.Router()
const blogcontroller= require('../controllers/blogcontroller')

Router.post('/create',blogcontroller.createBlog)
Router.get('/allposts',blogcontroller.getPosts)
Router.put('/updatepost/:id',blogcontroller.updatePost)
Router.delete('/delete/:id',blogcontroller.deletePost)
Router.get  ('/search/:id',blogcontroller.searchPost)


module.exports = Router