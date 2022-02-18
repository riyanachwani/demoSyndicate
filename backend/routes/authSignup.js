const express = require("express");
const SignupModel = require("../models/Signup");
const router = express.Router();

//check weather if the user with the same email is present already
router.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const location = req.body.location;

  //const template=req.body.template;

  // const newpassword = bcrypt.hashSync(password, 10);

  const signup = new SignupModel({
    name: name,
    email: email,
    password: password,
    location: location,
    template: {
      navbar: {
        companyName: "Syndicate",
      },

      heroSection: {
        heroTitle: "Here you can write heading which will help you to represent your company",
        heroSubTitle: "This space can be used to write tagline of your company",
        Toggle:"true",
      },

      aboutSection: {
        aboutTitle: "This part can be used to write about your company",
        aboutSubTitle: "Detailed information about your company",
        Toggle:"true",
      },

      serviceSection: {
        servicesTitle: "Can be used to write what services your company offers",
        servicesSubTitle: "Short description about those services",

        services1Title: "Analysis and Design (Service 1)",
        services1Desc: "Description about service 1",

        services2Title: "Software Development (Service 2)",
        services2Desc: "Description about service 2",

        services3Title: "Data and Analytics (Service 3)",
        services3Desc: "Description about service 3",

        Toggle:"true",
      },

      footerSection: {
        companyName: "Here you can write name of your company",
        instagram: "instagram",
        twitter: "twitter",
        linkedIn: "linkedIn",
        Toggle:"true",
      },

    },

    background: "#ffffff",
    currentDate: "2018-01-09",
    lastUpdated:"2018-01-09",


  });

  try {
    await signup.save();
    res.send("Inserted");
    console.log("insetred");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
