const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    aboutTitle: {
        type: String,
        required: true,
      },
    
      aboutsubTitle: {
        type: String,
        required: true,
      },

    });
    

//Pass it to mongoose
const about = mongoose.model("Tempabout", aboutSchema,"Tempabout");

module.exports = about;
