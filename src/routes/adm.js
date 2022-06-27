const router = require("express").Router();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
require("../Models/pokemon.js");
const pokemondb = mongoose.model("pokemondb");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/addpokemon", (req, res) => {
  res.render("addPokemonAdm");
});

router.post("/addpokemon/new", (req, res) => {
  const novoPokemon = {
    pokeName: req.body.pokeName,
    pokeNumber: req.body.pokeNumber,
    Hp: req.body.pokeHp,
    Speed: req.body.pokeSpeed,
    Attack: req.body.pokeAttack,
    spAttack: req.body.pokeSpAttack,
    Defense: req.body.pokeDefense,
    spDefense: req.body.pokeSpDefense,
    typeOne: req.body.pokeTypeOne,
    typeTwo: req.body.pokeTypeTwo,
    descircao: req.body.pokeDescricao,
    linkImg: req.body.pokeImgLink,
  };

  new pokemondb(novoPokemon)
    .save()
    .then(() => {
      console.log("pokemon salvo");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      if (err.errors.pokeName) {
        res.status(400).send({ message: "PokeName" });
      }
      if (err.errors.pokeNumber) {
        res.status(400).send({ message: "pokeNumber" });
      }
      console.log("erro ao salvar");
    });
});

router.get("/editpokemon", (req, res) => {
  res.render("cadastro");
});

module.exports = router;
