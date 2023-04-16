import { gql, useMutation } from "@apollo/client";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Grid, Container, TextField, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Head from "next/head";

const CREATE_BLOG = gql`
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
      profileImage
      about
    }
  }
`;

const ReactQuill = dynamic(
  () => import(/*webpackChunkName:"reactQuill"*/ "react-quill"),
  {
    loading: () => <>Loading...</>,
    ssr: false,
  }
);
const Page = styled(Container)({
  background: "white",
  color: "black",
  marginTop: "40px",
  marginBottom: "20px",
  "& .ql-editor": {
    height: 400,
    background: "white",
    color: "black",
  },
  "& .ql-toolbar": {
    background: "white",
    color: "black",
  },
  "& .ql-stroke": {
    stroke: "black !important",
  },
});

const NewPost = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    featuredImage: "",
    profileImage: "",
    about: "",
  });
  const [createBlog, { data }] = useMutation(CREATE_BLOG);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog({
      variables: {
        title: blog.title,
        content: blog.content,
        author: blog.author,
        category: blog.category,
        featuredImage: blog.featuredImage,
        profileImage: blog.profileImage,
        about: blog.about,
      },
    }).then((res) => console.log(res.data));
  };
  return (
    <Page>
      <Head>
        <title>New Blog Post</title>
      </Head>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item>
            <Typography variant="h6">Create New Post</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Title</Typography>
            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6">Content</Typography>
            <ReactQuill
              theme="snow"
              value={blog.content}
              onChange={(content) => setBlog({ ...blog, content })}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Author</Typography>
            <input
              type="text"
              name="author"
              value={blog.author}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Category</Typography>
            <input
              type="text"
              name="category"
              value={blog.category}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Featured Image</Typography>
            <input
              type="text"
              name="featuredImage"
              value={blog.featuredImage}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Profile Image</Typography>
            <input
              type="text"
              name="profileImage"
              value={blog.profileImage}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">About</Typography>
            <textarea
              type="text"
              name="about"
              value={blog.about}
              onChange={handleInputChange}
            />
          </Grid>
          <Button type="submit" varoant="contained">
            Submit
          </Button>
        </Grid>
      </form>
    </Page>
  );
};

export default NewPost;
