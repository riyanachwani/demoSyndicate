const mongoose = require("mongoose");

const navbarSchema = {
  companyName: {
    type: String,
    required: true,
  },
};

const heroSectionSchema = {
  heroTitle: {
    type: String,
    required: true,
  },
  heroSubTitle: {
    type: String,
    required: true,
  },
};

const aboutSectionSchema = {
  aboutTitle: {
    type: String,
    required: true,
  },
  aboutSubTitle: {
    type: String,
    required: true,
  },
};

const footerSectionSchema = {
  companyName: {
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
};

const serviceSectionSchema = {
  servicesTitle: {
    type: String,
    required: true,
  },
  servicesSubTitle: {
    type: String,
    required: true,
  },
  services1Title: {
    type: String,
    required: true,
  },
  services1Desc: {
    type: String,
    required: true,
  },
  services2Title: {
    type: String,
    required: true,
  },
  services2Desc: {
    type: String,
    required: true,
  },
  services3Title: {
    type: String,
    required: true,
  },
  services3Desc: {
    type: String,
    required: true,
  },
};

const templateSchema = {
  navbar: navbarSchema,
  heroSection: heroSectionSchema,
  aboutSection: aboutSectionSchema,
  serviceSection: serviceSectionSchema,
  footerSection: footerSectionSchema,
};

const SignupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },
  template: templateSchema,
});

//Pass it to mongoose
const Signup = mongoose.model("SignupNested", SignupSchema, "SignupNested");

module.exports = Signup;
