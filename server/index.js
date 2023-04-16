const { gql, ApolloServer } = require("apollo-server");
const cors = require("cors");
const express = require("express");

// Mock Data
const blogs = require("../lib/data");

// TYPE DEFS
const typeDefs = gql`
  type Comment {
    id: ID!
    name: String!
    email: String!
    content: String!
  }

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

  type Query {
    blogs: [Blog!]!
    blog(id: ID!): Blog!
  }
  type Mutation {
    createBlog(
      title: String!
      content: String!
      author: String!
      category: String!
      featuredImage: String!
      profileImage: String!
      about: String!
    ): Blog!
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
    deleteBlog(id: ID!): Blog!
  }
`;

// RESOLVERS
const resolvers = {
  Query: {
    blogs: () => blogs,
    blog: (_, { id }) => {
      const blog = blogs.find((blog) => blog.id == id);
      if (!blog) throw new Error(`Blog with id ${id} does not exist!`);
      return blog;
    },
  },
  Mutation: {
    createBlog: (
      _,
      { title, content, author, category, featuredImage, profileImage, about }
    ) => {
      const newBlog = {
        id: String(blogs.length + 1),
        createdAt: new Date().toISOString(),
        title,
        content,
        author,
        category,
        featuredImage,
        profileImage,
        about,
      };
      blogs.push(newBlog);
      return newBlog;
    },

    updateBlog: (
      _,
      {
        id,
        title,
        content,
        author,
        category,
        featuredImage,
        createdAt,
        profileImage,
        about,
      }
    ) => {
      const index = blogs.findIndex((blog) => blog.id == id);

      if (index === -1) throw new Error(`Blog with id ${id} not found`);
      const updatedBlog = {
        ...blogs[index],
        title,
        content,
        author,
        category,
        featuredImage,
        createdAt,
        profileImage,
        about,
      };
      blogs[index] = updatedBlog;
      return updatedBlog;
    },

    deleteBlog: (_, { id }) => {
      const index = blogs.findIndex((blog) => blog.id == id);
      if (index === -1) throw new Error("Blog not found");

      const deletedBlog = blogs[index];
      blogs.splice(index, 1);
      console.log(deletedBlog);
      return deletedBlog;
    },
  },
};

// SERVER
const server = new ApolloServer({ typeDefs, resolvers });
server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
