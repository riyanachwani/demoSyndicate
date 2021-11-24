const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//const LoginModel=require("./models/Login");
const SignupModel = require("./models/Signup");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://sumit123:123@syndicate-backend.plbbe.mongodb.net/Syndicate?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

/*app.post("/login", async (req,res) => {
    const email=req.body.email;
    const password=req.body.password;
    const login=new LoginModel({
        email:email,
        password:password
    }); 

try{
await login.save();
res.send("Inserted");
}catch(err){
console.log(err);
}

});
*/

app.post("/signup", async (req,res) => {
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const confirmPassword=req.body.confirmPassword;
    const location=req.body.location;
    //const template=req.body.template;

    /* 
    const tempnav=new SignupModel({
        companyName : "Syndicate",
        about : "aboutTitle",
        services : "servicesTitle", 
}); 

    const temp=new SignupModel({
            templateNav: tempnav,
    }); 
*/

    const signup=new SignupModel({
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword,
        location:location,
        template:[
            {
                navbar:[
                    {
                        companyName:"Syndicate",
                        about:"Abouttitle",
                        services:"serviceTitle",
                    },
                ],
                
                  heroSection:[
                    {
                        heroTitle:"heroTitle",
                        heroContent:"heroContent",
                    },
                ],

                
                aboutSection:[
                    {
                        aboutTitle:"aboutTitle",
                        aboutContent:"aboutContent",
                    },
                ],

                serviceSection:[
                    {
                        serviceTitle:"serviceTitle",
                        serviceContent1:"serviceContent1",
                        serviceContent2:"serviceContent2",
                        serviceContent3:"serviceContent3",
                    },
                ],
            },
        ],
    }); 

try{ 
await signup.save();
res.send("Inserted");
}catch(err){
console.log(err);
}
});

  
app.get("/read", async (req,res) => {
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const confirmPassword=req.body.confirmPassword;
    const location=req.body.location;
    // $where:{name:name}
    SignupModel.find({}, (err,result) => {
        if(err){
            res.send(err);
        }
        res.send(result);
    });
});

app.listen(3001, () => {
  console.log("Sever running on port 3001");
});
