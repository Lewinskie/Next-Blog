import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query Blogs {
    blogs {
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
