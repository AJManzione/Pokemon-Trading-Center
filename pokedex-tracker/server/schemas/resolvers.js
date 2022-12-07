// import user > pokemon > etc..

const { User } = require("../models/User");

const resolvers = {
    Query: {
    
        users: async (parent, { username }) => {
          return User.find({ username });
        },
      },

    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        return User.create({ username, email, password })
      }
    }
}


module.exports = resolvers;