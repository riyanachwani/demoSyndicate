const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const SignupModel = require("./models/Signup");
const FooterModel = require("./models/TempFooter");


app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://sumit123:123@syndicate-backend.plbbe.mongodb.net/Syndicate?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);


/* 
app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const location = req.body.location;
  //const template=req.body.template;

  const signup = new SignupModel({
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    location: location,
    template: [
      {
        navbar: [
          {
            companyName: "Syndicate",
            about: "Abouttitle",
            services: "serviceTitle",
          },
        ],

        heroSection: [
          {
            heroTitle: "heroTitle",
            heroContent: "heroContent",
          },
        ],

        aboutSection: [
          {
            aboutTitle: "aboutTitle",
            aboutContent: "aboutContent",
          },
        ],

        serviceSection: [
          {
            serviceTitle: "serviceTitle",
            serviceSubTitle: "serviceSubTitle",

            serviceContent1Title: "serviceContent1Title",
            serviceContent1Desc: "serviceContent1Desc",

            serviceContent2Title: "serviceContent2Title",
            serviceContent2Desc: "serviceContent2Desc",

            serviceContent3Title: "serviceContent3Title",
            serviceContent3Desc: "serviceContent3Desc",
          },
        ],
        footerSection: [
          {
            footerTitle: "footerTitle",
            instagram: "instagram",
            twitter: "twitter",
            linkedIn: "linkedIn",
          },
        ],
      },
    ],
  });

  try {
    await signup.save();
    res.send("Inserted");
    console.log("insetred");
  } catch (err) {
    console.log(err);
  }
});
*/

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const location = req.body.location;
  //const template=req.body.template;

  const signup = new SignupModel({
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    location: location,
  });

  try {
    await signup.save();
    res.send("Inserted");
    console.log("inserted");
  } catch (err) {
    console.log(err);
  }
});

app.post("/footer", async (req, res) => {
  const footerTitle = req.body.footerTitle;
  const instagram = req.body.instagram;
  const twitter = req.body.twitter;
  const linkedIn = req.body.linkedIn;
  
  const footer = new FooterModel({
    footerTitle: footerTitle,
    instagram: instagram,
    twitter: twitter,
    linkedIn: linkedIn,
  });

  try {
    await footer.save();
    res.send("Inserted");
    console.log("inserted");
  } catch (err) {
    console.log(err);
  }
});



app.get("/read", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const location = req.body.location;
  // $where:{CcomapnyName:CcomapnyName}
  SignupModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

/*
app.put("/update", async (req, res) => {
  const newName = req.body.newName;
  const id = req.body.id;
  try {
     await SignupModel.findById(id, (err, updatedName) => {
      updatedName.name= newName;
      updatedName.save();
      res.send("Update");
    });
  
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", async (req,res) => {
const id=req.params.id;
await SignupModel.findByIdAndRemove(id).exec();
res.send("deleted");  
})
*/

app.listen(3001, () => {
  console.log("Sever running on port 3001");
});
