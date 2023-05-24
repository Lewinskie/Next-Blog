const { gql } = require("apollo-server");

const typeDefs = gql`
  "User defination"
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  "Login defination"
  type AuthPayload {
    token: String!
    user: User!
  }

  "Blog post defination"
  type Blog {
    id: ID!
    title: String!
    content: String!
    author: String!
    category: String!
    featuredImage: String!
    createdAt: String!
    profileImage: String!
    about: String!
  }
  "Query defination"
  type Query {
    "Get all blog posts"
    blogs: [Blog!]!

    "Get single blog post using id"
    blog(id: ID!): Blog!

    "Get single user using id"
    user(id: ID!): User

    "Get all users"
    users: [User!]!
  }

  type Mutation {
    "register user"
    register(username: String!, email: String!, password: String!): AuthPayload!

    "Login user"
    login(email: String!, password: String!): AuthPayload!

    "Create a blog post"
    createBlog(
      title: String!
      content: String!
      author: String!
      category: String!
      featuredImage: String!
      profileImage: String!
      about: String!
    ): Blog!

    "Update a blog Post"
    updateBlog(
      id: ID!
      title: String!
      content: String!
      author: String!
      category: String!
      featuredImage: String!
      profileImage: String!
      about: String!
    ): Blog!

    "Delete a blog Post"
    deleteBlog(id: ID!): Blog!
  }
`;
module.exports = typeDefs;
