const mongoose = require("mongoose");
const mongoDatabase = require("../Database/database");
const uniqueValidator = require("mongoose-unique-validator")
const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    index: true,
    uniqueCaseInsensitive: true,
  },
  userPass: {
    type: String,
    required: true,
  },
  adm_user: {
    type: Number,
    required: true,
    default: false,
  },
});

userSchema.plugin(uniqueValidator)
mongoose.model("userdb", userSchema);
