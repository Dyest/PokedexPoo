const mongoose = require("mongoose");
const mongoDatabase = require("../Database/database");
const uniqueValidator = require("mongoose-unique-validator");

const pokemonSchema = mongoose.Schema({
  pokeName: {
    type: String,
    required: true,
    unique: true,
  },
  pokeNumber: {
    type: String,
    required: true,
    unique: true,
  },
  Hp: {
    type: String,
    required: true,
  },
  Speed: {
    type: String,
    required: true,
  },
  Attack: {
    type: String,
    required: true,
  },
  spAttack: {
    type: String,
    required: true,
  },
  Defense: {
    type: String,
    required: true,
  },
  Defense: {
    type: String,
    required: true,
  },
  spDefense: {
    type: String,
    required: true,
  },
  typeOne: {
    type: String,
    required: true,
  },
  typeTwo: {
    type: String,
    required: true,
  },
  descircao: {
    type: String,
    required: true,
  },
  linkImg: {
    type: String,
    required: true,
  },
});

pokemonSchema.plugin(uniqueValidator);
mongoose.model("pokemondb", pokemonSchema);
