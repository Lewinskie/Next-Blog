import { gql, useMutation } from "@apollo/client";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Grid, Container, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Head from "next/head";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CREATE_BLOG } from "@/mutations/blogMutations";
import { GET_BLOGS } from "@/queries/BlogQueries";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
  author: Yup.string().required("Author name is required"),
  category: Yup.string().required("Category name is required"),
  featuredImage: Yup.string().required("Featired image is required"),
  profileImage: Yup.string().required("Profile Image is required"),
  about: Yup.string().required("About Author is required"),
});

const initialValues = {
  title: "",
  content: "",
  author: "",
  category: "",
  featuredImage: "",
  profileImage: "",
  about: "",
};

// const ReactQuill = dynamic(
//   () => import(/*webpackChunkName:"reactQuill"*/ "react-quill"),
//   {
//     loading: () => <>Loading...</>,
//     ssr: false,
//   }
// );
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
  const [createBlog, { loading, error, data }] = useMutation(CREATE_BLOG, {
    onCompleted: () => {
      console.log(data);
    },
    refetchQueries: [{ query: GET_BLOGS }],
  });
  if (loading) return <>Loading</>;
  if (error) return <>{error}</>;

  const handleSubmit = async (values) => {
    const {
      title,
      content,
      author,
      category,
      featuredImage,
      profileImage,
      about,
    } = values;
    await createBlog({
      variables: {
        title,
        content,
        author,
        category,
        featuredImage,
        profileImage,
        about,
      },
    });
    router.push("/");
  };

  return (
    <Page>
      <Head>
        <title>New Blog Post</title>
      </Head>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormTypography variant="h6">Create New Post</FormTypography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormTypography variant="h6">Title</FormTypography>
                <Field
                  name="title"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                />
                <ErrorMessage name="title" color="error" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormTypography variant="h6">Content</FormTypography>
                <Field
                  name="content"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                />
                <ErrorMessage name="content" color="error" />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormTypography variant="h6">Author</FormTypography>
                <Field
                  name="author"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                />
                <ErrorMessage name="author" color="error" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormTypography variant="h6">Category</FormTypography>
                <Field
                  name="category"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                />
                <ErrorMessage name="category" color="error" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormTypography variant="h6">featured Image</FormTypography>
                <Field
                  name="featuredImage"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                />
                <ErrorMessage name="featuredImage" color="error" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormTypography variant="h6">Profile Image</FormTypography>
                <Field
                  name="profileImage"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                />
                <ErrorMessage name="profileImage" color="error" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormTypography variant="h6">About</FormTypography>
                <Field
                  name="about"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                />
                <ErrorMessage name="about" color="error" />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  disabled={isSubmitting}
                  type="submit"
                  color="primary"
                >
                  {isSubmitting ? "Submitting" : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default NewPost;
