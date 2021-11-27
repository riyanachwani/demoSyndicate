const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const SignupModel = require("./models/Signup");
const FooterModel = require("./models/TempFooter");
const NavbarModel = require("./models/TempNavbar");
const heroModel = require("./models/TempHero");
const aboutModel = require("./models/TempAbout");
const servicesModel = require("./models/TempServices");


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
  const companyName = req.body.companyName;
  const instagram = req.body.instagram;
  const twitter = req.body.twitter;
  const linkedIn = req.body.linkedIn;
  
  const footer = new FooterModel({
    companyName: companyName,
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

app.post("/navbar", async (req, res) => {
  const companyName = req.body.companyName;
  
  const navbar = new NavbarModel({
    companyName: companyName,
  });

  try {
    await navbar.save();
    res.send("Inserted");
    console.log("inserted");
  } catch (err) {
    console.log(err);
  }
});


app.post("/hero", async (req, res) => {
  const heroTitle = req.body.heroTitle;
  const herosubTitle = req.body.herosubTitle;

  const hero = new heroModel({
    heroTitle: heroTitle,
    herosubTitle: herosubTitle,
  });

  try {
    await hero.save();
    res.send("Inserted");
    console.log("inserted");
  } catch (err) {
    console.log(err);
  }
});


app.post("/about", async (req, res) => {
  const aboutTitle = req.body.aboutTitle;
  const aboutsubTitle = req.body.aboutsubTitle;

  const about = new aboutModel({
    aboutTitle: aboutTitle,
    aboutsubTitle: aboutsubTitle,
  });

  try {
    await about.save();
    res.send("Inserted");
    console.log("inserted");
  } catch (err) {
    console.log(err);
  }
});


app.post("/services", async (req, res) => {
  const servicesTitle = req.body.servicesTitle;
  const servicesSubTitle = req.body.servicesSubTitle;
  const services1Title = req.body.services1Title;
  const services1Desc = req.body.services1Desc;
  const services2Title = req.body.services2Title;
  const services2Desc = req.body.services2Desc;
  const services3Title = req.body.services3Title;
  const services3Desc = req.body.services3Desc;

  const services = new servicesModel({
    servicesTitle: servicesTitle,
    servicesSubTitle: servicesSubTitle,
    services1Title: services1Title,
    services1Desc: services1Desc,
    services2Title: services2Title,
    services2Desc: services2Desc,
    services3Title: services3Title,
    services3Desc: services3Desc,


  });

  try {
    await services.save();
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
  // name:"riya"
  SignupModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});


app.put("/update", async (req, res) => {
  const newName = req.body.newName;
  const newEmail = req.body.newEmail;
  const newPassword = req.body.newPassword;
  const newLocation = req.body.newLocation;
  const id = req.body.id;
  try {
     await SignupModel.findById(id, (err, updatedDetails) => {
      updatedDetails.name= newName;
      updatedDetails.email= newEmail;
      updatedDetails.password= newPassword;
      updatedDetails.location= newLocation;
      
      updatedDetails.save();
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


app.listen(3001, () => {
  console.log("Sever running on port 3001");
});
