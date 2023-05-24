const { gql, ApolloServer } = require("apollo-server");
const cors = require("cors");
const express = require("express");

// Import my Type Definations
const typeDefs = require("./typeDefs");

// import my resolvers
const Query = require("./resolvers/query");
const Mutation = require("./resolvers/mutation");

// import my data
const { users, blogs } = require("../lib/data");

// SERVER
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: () => {
    return { users, blogs };
  },
});
server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
