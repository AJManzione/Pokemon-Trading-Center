const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    createdAt: String
    sprite: String
    pokemonCaught: [Pokemon]
  }

  type Pokemon {
    _id: ID
    pokemon: String
    type: String
    sprite: String
    entry: String
  }

  type Query {
    user(username: String!): User
    users: [User]
    pokemons: [Pokemon]
    pokemon(_id: ID!): [Pokemon]
  }

  type Mutation {
    addPokemon(pokemon: String!, type: String!, sprite: String!): Pokemon
    addUser(username: String!, email: String!, password: String!): User
    catchPokemon(username: String!, entry: String!): User
  }
`;
module.exports = typeDefs;
