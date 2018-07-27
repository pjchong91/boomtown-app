const { gql } = require('apollo-server')

/**
 *  @TODO: Boomtown Schema
 * - create custom Date scalar with class
 * - type Mutation commented out until query completed to prevent server error
 */
module.exports = gql`
  scalar Upload
  scalar Date

directive @auth on OBJECT | FIELD_DEFINITION

  type Item @auth {
    id: ID!
    title: String!
    imageurl: String
    description: String!
    itemowner: User!
    tags: [Tag]
    created: Date!
    borrower: User
  }

  type User @auth {
    id: ID!
    email: String!
    fullname: String!
    password: String
    bio: String
    items: [Item]
    borrowed: [Item]
  }

  type Tag @auth {
    id: ID!
    title: String!
  }

  type File @auth {
    id: ID!
    filename: String!
    mimetype: String!
    encoding: String!
    itemid: ID!
  }

  input AssignedTag {
    id: ID!
    title: String!
  }

  input AssignedBorrower {
    id: ID!
  }

  input NewItemInput {
    title: String!
    description: String
    tags: [AssignedTag]!
  }

  input SignupInput {
    fullname: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User
    viewer: User
    items(filter: ID): [Item]
    tags: [Tag]
  }

  type Mutation {
    # TODO: CONVERT IMAGE BACK TO REQUIRED?? 
     addItem(item: NewItemInput! image: Upload): Item 
    signup(user: SignupInput!): User
    login(user: LoginInput!): User
    logout: Boolean
  }
`
