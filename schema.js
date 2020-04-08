const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    postcode: String!
    streetAddress: String
    city: String
    distanceToTravel: Int!
    profilePhoto: String!
    shoppingListId: [ShoppingList!]
  }

  type ShoppingList {
    _id: ID!
    orderStatus: String!
    helpee: User!
    volunteer: User
    listImage: String
    listText: [String]
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    postcode: String!
    streetAddress: String
    city: String
    distanceToTravel: Int!
    profilePhoto: String!
  }

  input ShoppingListInput {
      helpee: String!
      listImage: String
      listText: [String]
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  } 

  type RootQuery {
    users: [User!]
    shoppingLists: [ShoppingList!]
    login(email: String!, password: String!): AuthData!
  }

  type RootMutation {
    createUser(userInput: UserInput): User!
    createShoppingList(shoppingListInput: ShoppingListInput): ShoppingList!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;
