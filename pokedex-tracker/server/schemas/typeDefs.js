const { gql } = require('apollo-server-express');

//TODO: add pokemonCaught
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    createdAt: String
    sprite: String
    
  }

  type Pokemon {
    _id: ID
    pokemon: String
    type: String
    sprite: String
  }

  type Query {
    user(userId: ID!): User
    pokemons(pokemon: String): Pokemon
    pokemon(pokemonId: ID!): Pokemon
  }

  type Mutation {
    addPokemon(pokemon: String!, type: String!, sprite: String!): Pokemon
  }
`
module.exports = typeDefs;