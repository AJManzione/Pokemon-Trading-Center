// import user > pokemon > etc..

const resolvers = {
    Query: {
    
        user: async (parent, { userId }) => {
          return User.findOne({ _id: userId });
        },
      },
}


module.exports = resolvers;