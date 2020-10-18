const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const path = require("path");

const { fileLoader, mergeTypes, mergeResolvers } = require("merge-graphql-schemas");


require("dotenv").config()

const app = express();

// query function
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './typeDefs')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const apolloServer = new ApolloServer({
    typeDefs,resolvers
});

// applying middleware
apolloServer.applyMiddleware({ app });
const httpserver = http.createServer(app);

// rest endpoint


app.get('/rest', function(req, res) {
    res.json({
        data: 'you hit rest endpoint great!'
    });
});

app.listen(process.env.PORT, function() {
    console.log(`server is ready at http://localhost:${process.env.PORT}`);
    console.log(`server is ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`);
});

