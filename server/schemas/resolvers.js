// import user > pokemon > etc..
const { AuthenticationError } = require('apollo-server-express');
const { User, Pokemon } = require("../models");
const { signToken } = require('../utils/auth');

function capFirstLetters(sentance){
  const words = sentance.split(" ");

  //capitalizes first letter of every work
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
    addUser: async (parent, { username, email, password }) => {
      const checkUserEmail = await User.findOne({email})
      const checkUserUsername = await User.findOne({ username })
      if(checkUserEmail){
        throw new AuthenticationError('an account with this email already exists')
      }else if (checkUserUsername){
        throw new AuthenticationError('an account with this username already exists')
      }

       
        try{
          const user = await User.create({ username, email, password });
          const token = signToken(user);
          return { token, user };
        }catch(e){
          throw new AuthenticationError(e)
        }
      
    },
    updateSprite: async (parent, args) => {
      const user = await User.findOneAndUpdate(
        {username: args.username},
        {$set: {sprite: args.sprite}},
        {new: true}
      )
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect email or password");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect email or password');
      }
      const token = signToken(user);
      return { token, user };
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

