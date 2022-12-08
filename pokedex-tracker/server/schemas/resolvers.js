// import user > pokemon > etc..
const { User, Pokemon } = require("../models");

function capFirstLetters(sentance){
  const words = sentance.split(" ");

  //capitolizes first letter of every work
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase()
}

return words.join(" ");
}


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
      const formattedName = capFirstLetters(args.name)
      return await Pokemon.findOne({name: formattedName})
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      User.create(
        {username: args.username,
          email: args.email,
          password: args.password
        })
    },
    removeUser: async (parent, args) => {
      const user = await User.findOne(
        {username: args.username}
      );
      user.delete({})
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
    },
    unCatchPokemon: async (parent, args) => {
      const pokemon = await Pokemon.findOne({entry: args.entry})
      User.findOneAndUpdate(
        {username: args.username},
        { $pull: {pokemonCaught: {entry: args.entry}}},
        {new: true}
      )
      .then((user) => {
        console.log(user)
      })
    }
  },

};

module.exports = resolvers;

