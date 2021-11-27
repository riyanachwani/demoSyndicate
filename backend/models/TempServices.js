const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
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

    });
    

//Pass it to mongoose
const services = mongoose.model("Tempservices", servicesSchema,"Tempservices");

module.exports = services;
