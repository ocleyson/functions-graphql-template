const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

module.exports = apolloServer;
