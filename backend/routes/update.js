const express = require("express");
const SignupModel = require("../models/Signup");
const router = express.Router();

router.put("/update/:id", async (req, res) => {
  const filledData = await SignupModel.findById(req.body.id);

  const newName = req.body.newName || filledData.name;
  const newEmail = req.body.newEmail || filledData.email;
  const newPassword = req.body.newPassword || filledData.password;
  const newLocation = req.body.newLocation || filledData.location;
  const navTitle = req.body.navTitle || filledData.template.navbar.companyName;
  const heroTitle =
    req.body.heroTitle || filledData.template.heroSection.heroTitle;
  const heroSubTitle = req.body.heroSubTitle || filledData.heroSubTitle;

  console.log(req.body);
  SignupModel.findByIdAndUpdate(req.body.id, {
    $set: {
      name: newName,
      email: newEmail,
      password: newPassword,
      location: newLocation,
      template: {
        navbar: {
          companyName: navTitle,
        },
        heroSection: {
          heroTitle: heroTitle,
          heroSubTitle: heroSubTitle,
        },
      },
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
