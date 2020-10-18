const { gql } = require("apollo-server-express");

const totalPosts= () => 1504;

module.exports = {
    Query: {
        totalPosts
    }
};