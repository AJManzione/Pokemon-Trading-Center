const db = require("../config/connection");
const { Pokemon, User } = require("../models");

// const pokemonData = require("./pokemonData.json");

const gen1 = require('../../client/public/gen-1.json')
const gen2 = require('../../client/public/gen-2.json')
const gen3 = require('../../client/public/gen-3.json')
const gen4 = require('../../client/public/gen-4.json')
const gen5 = require('../../client/public/gen-5.json')
const gen6 = require('../../client/public/gen-6.json')
const gen7 = require('../../client/public/gen-7.json')
const gen8 = require('../../client/public/gen-8.json')
const gen9 = require('../../client/public/gen-9.json')

const userData = require("./userData.json")


db.once("open", async () => {
  await Pokemon.deleteMany({});
  await User.deleteMany({});

  const user = await User.insertMany(userData)
  const gen1Seed = await Pokemon.insertMany(gen1);
  const gen2Seed = await Pokemon.insertMany(gen2);
  const gen3Seed = await Pokemon.insertMany(gen3);
  const gen4Seed = await Pokemon.insertMany(gen4);
  const gen5Seed = await Pokemon.insertMany(gen5);
  const gen6Seed = await Pokemon.insertMany(gen6);
  const gen7Seed = await Pokemon.insertMany(gen7);
  const gen8Seed = await Pokemon.insertMany(gen8);
  const gen9Seed = await Pokemon.insertMany(gen9);


  console.log("pokemon data seeded!");
  process.exit(0);
});
