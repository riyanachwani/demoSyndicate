const express = require("express");
const SignupModel = require("../models/Signup");
const router = express.Router();


// router.get("/read/:id", async (req, res) => {
//   // console.log(req.params.id);
//   SignupModel.findById(req.params.id)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

module.exports = router;
