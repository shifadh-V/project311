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

module.exports={createUser}