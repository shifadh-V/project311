const User=require('../models/createuser')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const saltround=10
const createUser=async(req,res)=>{
    const{name,email,password}=req.body
    try{
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({msg:"user already exists"})
        }
        const hashedpassword=await bcrypt.hash(password,saltround)
        const userdata= await new User({
            name,
            email,
            password:hashedPassword
        })
        await userdata.save()
        res.status(200).json({msg:"user created successfully",data:userdata})
    }
    catch(error){
        console.log(error);
        
        res.status(400).json({msg:"server error"})
    }
    
}

//login
const login=async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await User.findOne({email})
        if(!user){
            return res.status(404).json({msg:"user not registerd"})
        }
        const MatchPassword=await bcrypt.compare(password,user.password)
      if(!MatchPassword){
        return res.status(404).json({msg:"invalid creditials"})
        }
        const token = jwt.sign({id:user._id,name:user.name},process.env.SECRET_KEY,{expiresIn:'1h'})
        res.status(200).json({msg:"login successfull",token:token})
        }catch(error){
            console.log(error);
            
            return res.status(500).json({msg:"server error"})
        }
    }  
    

module.exports={createUser,login}