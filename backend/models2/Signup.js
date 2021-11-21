const mongoose = require("mongoose");

const SignupSchema=new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
});

//Pass it to mongoose
const Signup = mongoose.model("syndicate-backend",SignupSchema,"Signup");

module.exports=Signup;