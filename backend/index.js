const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
// var session = require("express-session");

// const bcrypt = require("bcrypt");

const SignupModel = require("./models/Signup");

app.use(express.json());
app.use(cors());

// app.use(
//   session({
//     id: "user",
//     secret: "user",
//   })
// );

mongoose.connect(
  "mongodb+srv://sumit123:123@syndicate-backend.plbbe.mongodb.net/Syndicate?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/api/login", async (req, res) => {
  const user = await SignupModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) {
    return res.status(400).send("Invalid email or password");
  } else {
    const token = jwt.sign(
      { email: user.email, password: user.password },
      "syndicate-system-123 "
    );
    // var setsession = window.sessionStorage.setItem("animals", "cat");
    res.header("auth-token", token).send(token);
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

// app.get("/read/:id", function (req, res) {
//   const userId = req.params.user;
//   SignupModel.find({ _id: userId })
//     .sort({ date: -1 })
//     .then((posts) => {
//       // res.status(200).json(posts);
//       res.send(posts.name);
//       res.send(posts.email);
//     })
//     .catch((err) =>
//       res.status(404).json({ nopostfound: "No post found with that ID" })
//     );
// });

// app.get("/read/:id", function (req, res) {
//   SignupModel.findById(req.params.id)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });


app.put("/update/:id", async (req, res) => {
  const newName = req.body.newName;
  const newEmail = req.body.newEmail;
  const newPassword = req.body.newPassword;
  const newLocation = req.body.newLocation;
  const id = req.body.id;
  const navTitle = req.body.navTitle;
  try {
    console.log(req.body.navTitle);
    await SignupModel.findByIdAndUpdate(req.body.id, {
      $set: {
        name: newName,
        email: newEmail,
        password: newPassword,
        location: newLocation,
      },
      $set: {
        template: {
          navbar: {
            companyName: req.body.navTitle,
          },
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await SignupModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.post("/signup", async (req, res) => {
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
    console.log("Duplicate emails");
  }
});

app.listen(3001, () => {
  console.log("Sever running on port 3001");
});
