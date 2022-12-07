// import user > pokemon > etc..
const { User, Pokemon } = require("../models");

const { User } = require("../models/User");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    pokemon: async (parent) => {
      return await Pokemon.find({});
    },
  },

  Mutation: {
    addPokemon: async (parent, { pokemon, type, sprite }) => {
      const pokemonV = await Pokemon.create({ pokemon, type, sprite });
      return pokemonV;
    },
  },
};

module.exports = resolvers;

