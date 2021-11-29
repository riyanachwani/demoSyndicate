const express = require("express");
const SignupModel = require("../models/Signup");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  // basic validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //check for existing user
  SignupModel.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    else {
      const token = jwt.sign(
        { email: user.email, password: user.password },
        "syndicate-system-123 "
      );

      res.header("auth-token", token).send({token : token , userId : user._id});
    
      // sends cookie with sessionID automatically in response
    }
  });
});

module.exports = router;
