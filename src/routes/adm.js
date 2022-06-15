const router = require("express").Router();
const express = require("express");
const app = express();
const path = require("path");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/poke", (req, res) => {
  res.render("login");
});

router.get("/editpokemon", (req, res) => {
  res.render("cadastro");
});

module.exports = router;
