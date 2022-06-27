const router = require("express").Router();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
require("../Models/user");
const userdb = mongoose.model("userdb");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login/new" , (req, res) =>{
})

router.get("/signup", (req, res) => {
  res.render("cadastro");
});

router.post("/signup/new", (req, res) => {
  const novoCadastro = {
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    userPass: req.body.userPass,
  };

  new userdb(novoCadastro)
    .save()
    .then(() => {
      console.log("usuario registrado");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      if (err.errors.userEmail) {
        res.status(400).send({ message: "Email ja cadastrado" });
      }
      console.log("Erro ao regitrar");
    });
});

module.exports = router;
