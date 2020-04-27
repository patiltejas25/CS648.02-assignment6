const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const about = require('./about.js');
const product = require('./product.js');

const resolvers = {
  Query: {
    about: about.getMessage,
    productList: product.list,
    product: product.get,
  },
  Mutation: {
    setAboutMessage: about.setMessage,
    productAdd: product.add,
    productUpdate: product.update,
    productDelete: product.delete,
  },
};
const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
});

function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
  console.log('CORS setting:', enableCors);
  server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}
module.exports = { installHandler };
