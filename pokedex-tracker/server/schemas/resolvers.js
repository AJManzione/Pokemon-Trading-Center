// import user > pokemon > etc..
const { User, Pokemon } = require("../models");


const resolvers = {
  Query: {
    user: async (parent, args) => {
      return User.findOne({ username: args.username });
    },
    users: async() => {
      return User.find({}).populate('pokemonCaught')
    },
    pokemons: async (parent) => {
      return await Pokemon.find({});
    },
    pokemon: async (parent, args) => {
      return await Pokemon.findOne({_id: args._id})
    }
  },

  Mutation: {
    addPokemon: async (parent, { pokemon, type, sprite }) => {
      const pokemonV = await Pokemon.create({ pokemon, type, sprite });
      return pokemonV;
    },
    catchPokemon: async (parent, args) => {
      const pokemon = await Pokemon.findOne({entry: args.entry})
      User.findOneAndUpdate(
        {username: args.username},
        { $addToSet: {pokemonCaught: pokemon}},
        {new: true}
      )
      .then((user) => {
        console.log(user)
      })
    }
  },

};

module.exports = resolvers;

