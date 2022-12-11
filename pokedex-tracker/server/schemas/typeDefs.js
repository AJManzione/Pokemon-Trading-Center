const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    pokemonCaught: [Pokemon]
  }

  type Pokemon {
    _id: ID
    name: String
    type: String
    entry: Int
  }

  type Query {
    user(username: String!): User
    users: [User]
    pokemons: [Pokemon]
    pokemon(name: String!): Pokemon
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    removeUser(username: String!): User
    catchPokemon(username: String!, entry: Int!): User
    unCatchPokemon(username: String!, entry: Int!): User
  }
`;
module.exports = typeDefs;
