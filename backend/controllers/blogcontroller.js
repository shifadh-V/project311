const Blog = require('../models/blogmodel')


const createBlog = async (req,res) => {
    const { title,description,author} = req.body
    try{
        const newdata = await new Blog({
            title,
            description,
            author
        })
        await newdata.save()
        res.status(200).json({ msg:"created successfullly",data:newdata})
    } catch (error){
        res.status(500).json({ msg: "server error"})
    }
    
}

//read

const getPosts = async(req,res)=>{
    try{
        const posts = await Blog.find().sort({createdAt:-1})
        res.status(200).json({msg:"All posts",data:posts})

    }catch(error){
        res.status(500).json({msg:"server error"})
    }
}

//update
const updatePost = async(req,res) =>{
    try{
        const {id}=req.params
        const updatePost=await Blog.findByIdAndUpdate(id,req.body,{new:true})

        if(!updatePost){
            res.status(404).json({msg:"post not found"})
        }
        res.status(200).json({msg:"update successfull",updated:updatePost})
    }catch(error){
        res.status(500).json({msg:"server error"}
        )
    }
}

//delete
const deletePost = async(req,res) =>{
    try{
        const {id}=req.params
        const deletePost=await Blog.findByIdAndDelete(id,req.body,{new:true})

        if(!deletePost){
            res.status(404).json({msg:"post not found"})
        }
        res.status(200).json({msg:"deleted successfull",deleted:deletePost})
    }catch(error){
        res.status(500).json({msg:"server error"}
        )
    }
}

//search post
const searchPost = async(req,res) =>{
    try{
        const {id}=req.params
        const searchPost=await Blog.findById(id)

        if(!searchPost){
            res.status(404).json({msg:"post not found"})
        }
        res.status(200).json({msg:"search successfull",data:searchPost})
    }catch(error){
        res.status(500).json({msg:"server error"}
        )
    }
}
module.exports = {createBlog,getPosts,updatePost,deletePost,searchPost}