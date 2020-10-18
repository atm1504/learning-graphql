const { gql } = require("apollo-server-express");

const me= () => "I want to live";

module.exports = {
    Query: {
        me
    }
};