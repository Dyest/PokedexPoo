const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoDatabase = mongoose
  .connect("mongodb://localhost/Pokedex", {})
  .then(() => {
    console.log("Servidor conectado");
  })
  .catch(() => {
    console.log("Servidor Com ERRO");
  });

module.exports = mongoDatabase;
