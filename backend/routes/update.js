const express = require("express");
const SignupModel = require("../models/Signup");
const router = express.Router();

// router.put("/updateNav/:id", async (req, res) => {
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
//     },
//     $set: {
//       template: {
//         navbar: {
//           companyName: req.body.navTitle,
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

router.put("/update/:id", async (req, res) => {
  const newName = req.body.newName;
  const newEmail = req.body.newEmail;
  const newPassword = req.body.newPassword;
  const newLocation = req.body.newLocation;
  const id = req.body.id;
  const navTitle = req.body.navTitle;
  const heroTitle = req.body.heroTitle;
  const herosubTitle = req.body.herosubTitle;

  console.log(id);
  SignupModel.findByIdAndUpdate(req.body.id, {
    $set: {
      name: newName,
      email: newEmail,
      password: newPassword,
      location: newLocation,
      template: [
        {
          navbar: [
            {
              companyName: navTitle,
            },
          ],
          heroSection: [
            {
              heroTitle: heroTitle,
              herosubTitle: herosubTitle,
            },
          ],
        },
      ],
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
