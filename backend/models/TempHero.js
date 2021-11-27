const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
    heroTitle: {
        type: String,
        required: true,
      },
    
      herosubTitle: {
        type: String,
        required: true,
      },

    });
    

//Pass it to mongoose
const hero = mongoose.model("Temphero", heroSchema,"Temphero");

module.exports = hero;
