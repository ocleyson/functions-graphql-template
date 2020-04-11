const { gql } = require('apollo-server-express');

const typeRoot = gql`
    type Query {
        root: String
    }

    type Mutation {
        root: String
    }
`;

const typeDefs = [typeRoot];

module.exports = typeDefs;
