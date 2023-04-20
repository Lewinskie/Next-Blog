import { gql } from "@apollo/client";

export const CREATE_BLOG = gql`
  mutation Mutation(
    $title: String!
    $content: String!
    $author: String!
    $category: String!
    $featuredImage: String!
    $profileImage: String!
    $about: String!
  ) {
    createBlog(
      title: $title
      content: $content
      author: $author
      category: $category
      featuredImage: $featuredImage
      profileImage: $profileImage
      about: $about
    ) {
      id
      title
      content
      author
      category
      featuredImage
      createdAt
      profileImage
      about
    }
  }
`;
