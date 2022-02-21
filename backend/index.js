const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const session = require("express-session");

// const bcrypt = require("bcrypt");

const SignupModel = require("./models/Signup");

app.use(express.json());
app.use(cors());

app.use(
  session({
    // It holds the secret key for session
    secret: "Your_Secret_Key",

    // Forces the session to be saved
    // back to the session store
    resave: true,

    // Forces a session that is "uninitialized"
    // to be saved to the store
    saveUninitialized: true,
  })
);

mongoose.connect(
  "mongodb+srv://sumit123:123@syndicate-backend.plbbe.mongodb.net/Syndicate?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.use(require("./routes/authSignup"));

app.use(require("./routes/authLogin"));

app.use(require("./routes/update"));

app.get("/user/:email", (req, res) => {
  const email = req.body.email;
  SignupModel.findOne(email).then((user) => {
    if (!user) {
      console.log("User not found");
    } else {
      res.send(user);
    }
  });
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

app.get("/api/test", (req, res) => {
  var name = req.session.name;
  return res.send(name);
});

app.get("/read/:id", function (req, res) {
  // console.log(req.params.id);
  SignupModel.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await SignupModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.listen(3001, () => {
  console.log("Sever running on port 3001");
});
