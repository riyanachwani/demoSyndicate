const express = require("express");
const mongoose = require("mongoose");
const app= express();

const LoginModel=require("./models/Login");

app.use(express.json());

mongoose.connect(
    "mongodb+srv://riyanachwani:12345@syndicate-backend.plbbe.mongodb.net/Syndicate?retryWrites=true&w=majority", 
    {
    useNewUrlParser:true,
}
);

app.get("/", async (req,res) => {
    const login=new LoginModel({
        email:"sumit@gmail.com",
        password:"pwd"
    }); 

try{
await login.save();
res.send("Inserted");
}catch(err){
console.log(err);
}

});

app.listen(3001, ()=>{
     console.log("Sever running on port 3001");
});