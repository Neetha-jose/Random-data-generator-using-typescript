const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    login:{
        type:String,
        required:false
    },
    dob:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:false
    },
});
const users=new mongoose.model("users",userSchema);
module.exports=users;