import { gql, useMutation } from "@apollo/client";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Grid, Container, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CREATE_BLOG } from "@/mutations/blogMutations";
import { GET_BLOGS } from "@/queries/BlogQueries";
import { useRouter } from "next/router";

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

const FormTypography = styled(Typography)({
  color: "black",
});

const NewPost = () => {
  const router = useRouter();
  const [createBlog, { loading, error }] = useMutation(CREATE_BLOG, {
    refetchQueries: [{ query: GET_BLOGS }],
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      author: "",
      category: "",
      featuredImage: "",
      profileImage: "",
      about: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      content: Yup.string().required("Content is required"),
      author: Yup.string().required("Author name is required"),
      category: Yup.string().required("Category name is required"),
      // featuredImage: Yup.mixed().required("Featired image is required"),
      // profileImage: Yup.mixed().required("Profile Image is required"),
      about: Yup.string().required("About Author is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      // Push data to the CREATE_BLOG mutation
      try {
        await createBlog({
          variables: {
            title: values.title,
            content: values.content,
            author: values.author,
            category: values.category,
            // featuredImage: values.featuredImage,
            // profileImage: values.profileImage,
            about: values.about,
          },
        });
        // Redirect to /home to display the blogs
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  });
  console.log(formik.values);

  return (
    <Page>
      <Head>
        <title>New Blog Post</title>
      </Head>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormTypography variant="h6">Create New Post</FormTypography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormTypography variant="h6">Title</FormTypography>
            <TextField
              name="title"
              id="title"
              type="text"
              placeholder="Enter Blog Title"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              error={formik.touched.title && formik.errors.title ? true : false}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTypography variant="h6">Content</FormTypography>
            <ReactQuill
              theme="snow"
              value={formik.values.content}
              name="content"
              onChange={(value) => formik.setFieldValue("content", value)}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FormTypography variant="h6">Author</FormTypography>
            <TextField
              name="author"
              type="text"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.author}
              error={
                formik.touched.author && formik.errors.author ? true : false
              }
              helperText={formik.touched.author && formik.errors.author}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormTypography variant="h6">Category</FormTypography>
            <TextField
              name="category"
              type="text"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.category}
              onBlur={formik.handleBlur}
              error={
                formik.touched.category && formik.errors.category ? true : false
              }
              helperText={formik.touched.category && formik.errors.category}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6} md={4}>
            <FormTypography variant="h6">featured Image</FormTypography>
            <input
              name="featuredImage"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setFieldValue("featuredImage", file);
              }}
            />
          </Grid> */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <FormTypography variant="h6">Profile Image</FormTypography>
            <input
              name="profileImage"
              type="file"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                setFieldValue("profileImage", file);
              }}
            />
          </Grid> */}
          <Grid item xs={12} sm={6} md={4}>
            <FormTypography variant="h6">About</FormTypography>

            <TextField
              name="about"
              type="text"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.about}
              onBlur={formik.handleBlur}
              error={formik.touched.about && formik.errors.about ? true : false}
              helperText={formik.touched.about && formik.errors.about}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" color="primary">
              Create Post
            </Button>
          </Grid>
        </Grid>
      </form>
    </Page>
  );
};

export default NewPost;
