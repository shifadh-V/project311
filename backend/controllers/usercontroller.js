const User=require('../models/createuser')
const bcrypt=require('bcrypt')
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
            password:hashedpassword
        })
        await userdata.save()
        res.status(200).json({msg:"user created successfully",data:userdata})
    }
    catch(error){
        console.log(error);
        
        res.status(400).json({msg:"server error"})
    }
    
}
const login=async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await user.findOne({email})
        if(!user){
            return res.status(404).json({msg:"user not registerd"})
        }
        const MatchPassword=await bcrypt.compare(password,user.password)
      if(!MatchPassword){
        return res.status(404).json({msg:"invalid creditials"})
        }
        res.status(200).json({msg:"login successfull"})
        }catch(error){
            return res.status(500).json({msg:"server error"})
        }
    }  
    
    
const jwt=require('jsonwebtoken')

const token=jwt.sign({user_ b })
module.exports={createUser}
module.exports={login}