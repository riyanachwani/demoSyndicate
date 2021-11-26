const mongoose = require("mongoose");

const FooterSchema = new mongoose.Schema({
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
    

//Pass it to mongoose
const Footer = mongoose.model("TempFooter", FooterSchema,"TempFooter");

module.exports = Footer;
