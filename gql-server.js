const { ApolloServer } = require("apollo-server")
require("dotenv").config();

// query function
const typeDefs = `
type Query{
    totalPosts: Int!
}
`

// resolvers
const resolvers = {
    Query: {
        totalPosts: () => 1504
    }
};

const apolloServer = new ApolloServer({
    typeDefs,resolvers
});

apolloServer.listen(process.env.PORT, function() {
    console.log(`server is ready at http://localhost:${process.env.PORT}`);
});