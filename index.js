var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(
    `type Query {
                            hello: String
                            greetings(name: String): String
                   }`);

// Root resolver
var root = {
    hello: () => 'Hello World!',
    greetings: (args) => {
        return `Hello, ${args.name}`
    },
};

// An express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,        //Set schema
    rootValue: root, //Set resolver
    graphiql: true             //Client access
}));

// Start Server to listen
app.listen(4000, () => console.log('Express GraphQL Server Now Running On http://localhost:4000/graphql'));
