//imports gql template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Trainer {
    _id: ID
    hiredOn: String
    program: String
}
type User {
    _id: ID
    username: String
    email: String
}
type Auth {
    token: ID!
    user: User
}
type Query {
    trainers: [Trainer]
    me: User
    users: [User]
    user(username: String!): User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`;



module.exports = typeDefs;