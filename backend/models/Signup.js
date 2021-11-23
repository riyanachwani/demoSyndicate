const mongoose = require("mongoose");


const navbarSchema = mongoose.Schema({
    companyName: {
      type: String,
      required: true,
    },
    about: {
        type: String,
        required: true,
      },
      services: {
        type: String,
        required: true,
      },
  })


  const heroSectionSchema = mongoose.Schema({
    heroTitle: {
      type: String,
      required: true,
    },
    heroContent: {
        type: String,
        required: true,
      },
  })

  const aboutSectionScema = mongoose.Schema({
    aboutTitle: {
      type: String,
      required: true,
    },
    aboutContent: {
        type: String,
        required: true,
      },
  })

  const serviceSectionSchema = mongoose.Schema({
    serviceTitle: {
      type: String,
      required: true,
    },
    serviceContent1: {
        type: String,
        required: true,
      },
      serviceContent2: {
        type: String,
        required: true,
      },
      serviceContent3: {
        type: String,
        required: true,
      },
  })

const templateSchema = mongoose.Schema({
    navbar: [navbarSchema],
    heroSection:[heroSectionSchema],
    aboutSection:[aboutSectionScema],
    serviceSection:[serviceSectionSchema],
  });

const SignupSchema=new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    template:[templateSchema],
});

//Pass it to mongoose
const Signup = mongoose.model("Signup",SignupSchema);

module.exports=Signup;