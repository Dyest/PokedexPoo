const mongoose = require("mongoose");
const mongoDatabase = require("../Database/database");
const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPass: {
    type: String,
    required: true,
  },
  adm_user: {
    type: Number,
    required: true,
    default: false,
  }
});

mongoose.model("userdb", userSchema);
