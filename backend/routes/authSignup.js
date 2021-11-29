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
    confirmPassword: confirmPassword,
    location: location,
    template: {
      navbar: {
        companyName: "Syndicate",
        about: "Abouttitle",
        services: "serviceTitle",
      },

      heroSection: {
        heroTitle: "heroTitle",
        heroSubTitle: "heroContent",
      },

      aboutSection: {
        aboutTitle: "aboutTitle",
        aboutContent: "aboutContent",
      },

      serviceSection: {
        serviceTitle: "serviceTitle",
        serviceSubTitle: "serviceSubTitle",

        serviceContent1Title: "serviceContent1Title",
        serviceContent1Desc: "serviceContent1Desc",

        serviceContent2Title: "serviceContent2Title",
        serviceContent2Desc: "serviceContent2Desc",

        serviceContent3Title: "serviceContent3Title",
        serviceContent3Desc: "serviceContent3Desc",
      },

      footerSection: {
        footerTitle: "footerTitle",
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
