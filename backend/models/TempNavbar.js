const mongoose = require("mongoose");

const NavbarSchema = new mongoose.Schema({
  companyName: {
        type: String,
        required: true,
      },
    });
    

//Pass it to mongoose
const Navbar = mongoose.model("TempNavbar", NavbarSchema,"TempNavbar");

module.exports = Navbar;
