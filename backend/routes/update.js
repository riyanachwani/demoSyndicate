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
  const heroTitle = req.body.heroTitle || filledData.template.heroSection.heroTitle;
  const heroSubTitle = req.body.heroSubTitle || filledData.template.heroSection.heroSubTitle;
  const aboutTitle = req.body.aboutTitle || filledData.template.aboutSection.aboutTitle;
  const aboutsubTitle = req.body.aboutsubTitle || filledData.template.aboutSection.aboutsubTitle;
  const servicesTitle = req.body.servicesTitle || filledData.template.serviceSection.servicesTitle;
  const servicesSubTitle = req.body.servicesSubTitle || filledData.template.serviceSection.servicesSubTitle;
  const services1Title = req.body.services1Title || filledData.template.serviceSection.services1Title;
  const services1Desc = req.body.services1Desc || filledData.template.serviceSection.services1Desc;
  const services2Title = req.body.services2Title || filledData.template.serviceSection.services2Title;
  const services2Desc = req.body.services2Desc || filledData.template.serviceSection.services2Desc;
  const services3Title = req.body.services3Title || filledData.template.serviceSection.services3Title;
  const services3Desc = req.body.services3Desc || filledData.template.serviceSection.services3Desc;
  const companyName = req.body.companyName || filledData.template.footerSection.companyName;
  const instagram = req.body.instagram || filledData.template.footerSection.instagram;
  const twitter = req.body.twitter || filledData.template.footerSection.twitter;
  const linkedIn = req.body.linkedIn || filledData.template.footerSection.linkedIn;


  console.log(req.body);
  SignupModel.findOneAndUpdate(req.body.id, {
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
        aboutSection: {
          aboutTitle: aboutTitle,
          aboutsubTitle: aboutsubTitle,
        },
        serviceSection: {
          servicesTitle: servicesTitle,
          servicesSubTitle: servicesSubTitle,
          services1Title: services1Title,
          services1Desc: services1Desc,
          services2Title: services2Title,
          services2Desc: services2Desc,
          services3Title: services3Title,
          services3Desc: services3Desc,
        },
        footerSection: {
          companyName: companyName,
          instagram: instagram,
          twitter: twitter,
          linkedIn: linkedIn,
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

// router.put("/updateHero/:id", async (req, res) => {
//   const newName = req.body.newName;
//   const newEmail = req.body.newEmail;
//   const newPassword = req.body.newPassword;
//   const newLocation = req.body.newLocation;
//   const id = req.body.id;
//   const navTitle = req.body.navTitle;
//   console.log(id);
//   SignupModel.findByIdAndUpdate(req.body.id, {
//     $set: {
//       name: newName,
//       email: newEmail,
//       password: newPassword,
//       location: newLocation,

//       template: {
//         navbar: {
//           companyName: navTitle,
//         },
//         heroSection: {
//           heroTitle: req.body.heroTitle,
//           herosubTitle: req.body.herosubTitle,
//         },
//       },
//     },
//   })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

module.exports = router;
