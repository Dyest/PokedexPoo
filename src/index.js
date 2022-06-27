const express = require("express");
//const req = require("express/lib/request");
const app = express();
const adm = require("./routes/adm");
const users = require("./routes/users");
const path = require("path");
const mongoDatabase = require("./Database/database");
const session = require("express-session");
const flash = require("connect-flash");

//const mongoose = require("mongoose")

//sessão
app.use(
  session({
    secret: "segredo",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());



//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ejs engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//public - arquivos estaticos - CSS, img
app.use(express.static("src/public"));
app.use("/adm", express.static("src/public"));

//rotas adm/users
app.use("/adm", adm);
app.use("/", users);

//inciar o servidor http://localhost:8082/
app.listen(8082, () => console.log("Aplicação executando na porta 8082!"));
