const mongoose = require('mongoose')
require('dotenv').config()
const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.mongo_URL)
        console.log("Mongodb Connected");
        

    } catch(error){
        console.log("Error Connection");
        
    }
    
}
module.exports=connectDb