var Definition = require( './definition');

var ResolveMap = require( './resolver');

var Mutation = require('./definition/mutation');
var Query = require('./definition/query');

var makeExecutableSchema =  require('graphql-tools').makeExecutableSchema;

const SchemaDefinition = `
  schema {
    query: Query
    mutation:Mutations
  }
`;

module.exports = makeExecutableSchema({
    typeDefs: [SchemaDefinition, Query, Definition, Mutation],
    resolvers: ResolveMap,
  })