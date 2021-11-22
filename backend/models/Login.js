const mongoose = require("mongoose");

const LoginSchema=new mongoose.Schema({
    email: {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
});

//Pass it to mongoose
const Login = mongoose.model("Login",LoginSchema);

module.exports=Login;