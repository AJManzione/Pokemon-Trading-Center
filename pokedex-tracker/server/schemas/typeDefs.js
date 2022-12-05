const { gql } = require('apollo-server-express');

//TODO: add pokemonCaught
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    createdAt: String
    sprite: String
    
  }

  type Query {
    user(userId: ID!): User
  }
`
module.exports = typeDefs;