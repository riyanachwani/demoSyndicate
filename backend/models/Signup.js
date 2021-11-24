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
});

const heroSectionSchema = mongoose.Schema({
  heroTitle: {
    type: String,
    required: true,
  },
  heroContent: {
    type: String,
    required: true,
  },
});

const aboutSectionSchema = mongoose.Schema({
  aboutTitle: {
    type: String,
    required: true,
  },
  aboutContent: {
    type: String,
    required: true,
  },
});

const footerSectionSchema = mongoose.Schema({
  footerTitle: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
    required: true,
  },
});

const serviceSectionSchema = mongoose.Schema({
  serviceTitle: {
    type: String,
    required: true,
  },
  serviceSubTitle: {
    type: String,
    required: true,
  },
  serviceContent1Title: {
    type: String,
    required: true,
  },
  serviceContent1Desc: {
    type: String,
    required: true,
  },
  serviceContent2Title: {
    type: String,
    required: true,
  },
  serviceContent2Desc: {
    type: String,
    required: true,
  },
  serviceContent3Title: {
    type: String,
    required: true,
  },
  serviceContent3Desc: {
    type: String,
    required: true,
  },
});

const templateSchema = mongoose.Schema({
  navbar: [navbarSchema],
  heroSection: [heroSectionSchema],
  aboutSection: [aboutSectionSchema],
  serviceSection: [serviceSectionSchema],
  footerSection: [footerSectionSchema],
});

const SignupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  template: [templateSchema],
});

//Pass it to mongoose
const Signup = mongoose.model("Signup", SignupSchema);

module.exports = Signup;
