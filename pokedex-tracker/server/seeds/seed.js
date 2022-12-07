const db = require("../config/connection");
const { Pokemon, User } = require("../models");

const pokemonData = require("./pokemonData.json");
const userData = require("./userData.json")


db.once("open", async () => {
  await Pokemon.deleteMany({});
  await User.deleteMany({});

  const user = await User.insertMany(userData)
  const pokemon = await Pokemon.insertMany(pokemonData);

  console.log(pokemonData)
  console.log("pokemon data seeded!");
  process.exit(0);
});
