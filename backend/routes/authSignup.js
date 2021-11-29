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
        heroTitle: "heroTitle",
        heroSubTitle: "heroSubTitle",
      },

      aboutSection: {
        aboutTitle: "aboutTitle",
        aboutSubTitle: "aboutSubTitle",
      },

      serviceSection: {
        servicesTitle: "servicesTitle",
        servicesSubTitle: "servicesSubTitle",

        services1Title: "services1Title",
        services1Desc: "services1Desc",

        services2Title: "services2Title",
        services2Desc: "services2Desc",

        services3Title: "services3Title",
        services3Desc: "services3Desc",
      },

      footerSection: {
        companyName: "footerTitle",
        instagram: "instagram",
        twitter: "twitter",
        linkedIn: "linkedIn",
      },
    },
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
