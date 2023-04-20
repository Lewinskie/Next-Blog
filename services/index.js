// // // stuff
// // // Author Component
// // import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";
// // import { styled } from "@mui/system";
// // import Image from "next/image";

// // const AuthorContainer = styled(Container)({
// //   marginTop: "40px",
// //   // opacity: 0.4,
// // });
// // const AuthorCard = styled(Card)({
// //   padding: "20px",
// // });

// // const Wrapper = styled("div")({
// //   width: "100%",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   position: "relative",
// // });
// // const Author = ({ post }) => {
// //   const { author, featuredImage } = post;

// //   return (
// //     <AuthorContainer>
// //       <AuthorCard variant="outlined">
// //         <Grid container spacing={3}>
// //           <Grid item xs={12} sm={12} md={4} lg={3}>
// //             <Wrapper>
// //               <Image
// //                 src={featuredImage}
// //                 alt={author}
// //                 height={100}
// //                 width={100}
// //                 style={{
// //                   borderRadius: "50%",
// //                   // marginRight: "20px",
// //                   opacity: 0.6,
// //                 }}
// //               />
// //             </Wrapper>
// //           </Grid>
// //           <Grid item xs={12} sm={12} md={8} lg={9}>
// //             <div>
// //               <Typography
// //                 variant="h6"
// //                 sx={{ textAlign: "center", marginBottom: "10px" }}
// //               >
// //                 {author}
// //               </Typography>
// //               <Typography sx={{ textAlign: "center", marginBottom: "10px" }}>
// //                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
// //                 Deserunt commodi, dolore quisquam fuga amet unde quidem maiores
// //                 quos dolorum nihil?
// //               </Typography>
// //             </div>
// //           </Grid>
// //         </Grid>
// //       </AuthorCard>
// //     </AuthorContainer>
// //   );
// // };

// // export default Author;

// // // Categories
// // import { Card, CardContent, Typography } from "@mui/material";
// // import { styled } from "@mui/system";
// // import Link from "next/link";
// // // Create a query that get the categories with the names and slug

// // const categories = [
// //   { name: "Web Development", slug: "web-dev" },
// //   { name: "React", slug: "react" },
// // ];

// // const CategoryCard = styled(Card)({
// //   marginTop: "30px",
// //   padding: "40px 8px",
// // });
// // const CategoryLink = styled(Link)({
// //   textDecoration: "none",
// //   color: "gray",
// //   marginBottom: "10px",
// //   "&:hover": {
// //     color: "pink",
// //   },
// // });
// // const Categories = () => {
// //   return (
// //     <CategoryCard>
// //       <div style={{ borderBottom: "solid 1px gray", marginBottom: "10px" }}>
// //         <Typography variant="h6">Categories</Typography>
// //       </div>
// //       {/* Here map my categories, names and their slugs */}
// //       {categories.map((category) => (
// //         <CategoryLink key={category.slug} href={`category/${category.slug}`}>
// //           <Typography>{category.name}</Typography>
// //         </CategoryLink>
// //       ))}
// //     </CategoryCard>
// //   );
// // };

// // export default Categories;

// // // Comments

// // import {
// //     Card,
// //     CardContent,
// //     CardHeader,
// //     Container,
// //     Typography,
// //   } from "@mui/material";

// //   const Comments = () => {
// //     const comments = [
// //       {
// //         name: "John Doe",
// //         comment: "Great article!",
// //         date: "2022-04-03",
// //       },
// //       {
// //         name: "Jane Smith",
// //         comment: "Thanks for sharing your thoughts.",
// //         date: "2022-04-04",
// //       },
// //     ];
// //     return (
// //       <>
// //         {comments.length > 0 && (
// //           <Container sx={{ marginTop: "40px" }}>
// //             <Card>
// //               <CardContent>
// //                 <Typography variant="h6" sx={{ fontWeight: "bold" }}>
// //                   {comments.length}&nbsp;Comments
// //                 </Typography>
// //                 <div
// //                   style={{ width: "100%", borderBottom: "solid 1px #F0F0F0" }}
// //                 />
// //                 {comments.map((comment) => (
// //                   <div
// //                     key={comment.name}
// //                     style={{
// //                       margin: "10px 5px",
// //                       borderBottom: "solid 1px #F0F0F0",
// //                     }}
// //                   >
// //                     <div style={{ display: "flex" }}>
// //                       <Typography sx={{ fontWeight: "bold" }}>
// //                         {comment.name}
// //                       </Typography>
// //                       <Typography>&nbsp;on&nbsp;{comment.date}</Typography>
// //                     </div>
// //                     <Typography>{comment.comment}</Typography>
// //                   </div>
// //                 ))}
// //               </CardContent>
// //             </Card>
// //           </Container>
// //         )}
// //       </>
// //     );
// //   };

// //   export default Comments;

// // //   Comments Form
// // import {
// //     Button,
// //     Card,
// //     CardContent,
// //     Grid,
// //     Input,
// //     TextField,
// //     Typography,
// //   } from "@mui/material";
// //   import { Container } from "@mui/system";
// //   import { useFormik } from "formik";

// //   const CommentsForm = (e) => {
// //     const formik = useFormik({
// //       initialValues: {
// //         comment: "",
// //         name: "",
// //         email: "",
// //       },
// //       handleSubmit: (value) => {
// //         console.log(value);
// //       },
// //     });
// //     return (
// //       <Container sx={{ marginTop: "40px" }}>
// //         <Card>
// //           <CardContent>
// //             <form onSubmit={formik.handleSubmit}>
// //               <Grid container spacing={3}>
// //                 <Grid item xs={12}>
// //                   <Typography
// //                     variant="h6"
// //                     sx={{
// //                       textAlign: "center",
// //                       marginBottom: "10px",
// //                       marginTop: "10px",
// //                     }}
// //                   >
// //                     Leave a Reply
// //                   </Typography>
// //                   <div
// //                     style={{ width: "100%", borderBottom: "1px solid #E8E8E8" }}
// //                   />
// //                 </Grid>
// //                 <Grid item xs={12}>
// //                   <TextField
// //                     type="text"
// //                     fullWidth
// //                     placeholder="Comment"
// //                     multiline
// //                     rows={3}
// //                     variant="filled"
// //                     onChange={formik.handleChange}
// //                     value={formik.values.comment}
// //                   />
// //                 </Grid>
// //                 <Grid item xs={12} md={6}>
// //                   <TextField
// //                     type="text"
// //                     fullWidth
// //                     placeholder="Name"
// //                     variant="filled"
// //                     onChange={formik.handleChange}
// //                     value={formik.values.name}
// //                   />
// //                 </Grid>
// //                 <Grid item xs={12} md={6}>
// //                   <TextField
// //                     type="text"
// //                     fullWidth
// //                     placeholder="Email"
// //                     variant="filled"
// //                     onChange={formik.handleChange}
// //                     value={formik.values.email}
// //                   />
// //                 </Grid>
// //                 <Grid item xs={12}>
// //                   <Button variant="outlined" color="secondary" type="submit">
// //                     Post Comment
// //                   </Button>
// //                 </Grid>
// //               </Grid>
// //             </form>
// //           </CardContent>
// //         </Card>
// //       </Container>
// //     );
// //   };

// //   export default CommentsForm;

// //   // Post Widget
// //   import { Card, CardContent, Typography } from "@mui/material";
// // import { styled } from "@mui/system";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { useEffect } from "react";

// // // Create query for fetching recent posts
// // // Query using orderBy:createdAt_ASC

// // const WidgetCard = styled(Card)({
// //   padding: "40px 8px",
// //   marginBottom: "8px",
// // });
// // const Heading = styled("div")({
// //   width: "100%",
// //   borderBottom: "solid 1px gray",
// //   marginBottom: "10px",
// // });

// // const ContentWrapper = styled("div")({
// //   width: "100%",
// //   display: "flex",
// //   alignItems: "center",
// // });

// // const PostWidget = ({ categories, slug }) => {
// //   // Here we will be checking if we have a slug, we get related posts otherwise we display recent posts

// //   return (
// //     <WidgetCard>
// //       <Heading>
// //         <Typography variant="h6">
// //           {slug ? "Related Posts" : "Recent Posts"}
// //         </Typography>
// //       </Heading>

// //       <ContentWrapper>
// //         <Image
// //           src="https://images.unsplash.com/photo-1680193966159-e371dff0d82c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80h"
// //           alt="test"
// //           height={50}
// //           width={50}
// //           style={{ borderRadius: "50%" }}
// //         />

// //         <div style={{ marginLeft: "10px" }}>
// //           <Typography>createdAT</Typography>
// //           {/* in the link href, enter the post slug */}
// //           <Link href="/">title</Link>
// //         </div>
// //       </ContentWrapper>
// //     </WidgetCard>
// //   );
// // };

// // export default PostWidget;

// // // New Post Form
// // import { Container, Grid, TextField, Typography } from "@mui/material";
// // import { Formik, useFormik } from "formik";
// // // import { Quill } from "react-quilljs";

// // const NewBlogPost = () => {
// //   const formik = useFormik({
// //     initialValues: {
// //       title: "",
// //       content: "",
// //     },
// //     handleSubmit: (value) => {
// //       console.log(value);
// //     },
// //   });
// //   return (
// //     <Container>
// //       <Formik
// //         initialValues={formik.initialValues}
// //         onSubmit={formik.handleSubmit}
// //       >
// //         <Grid container spacing={3}>
// //           <Grid item xs={12} sx={{ textAlign: "center" }}>
// //             <Typography>Add new Blog Post</Typography>
// //           </Grid>
// //           <Grid item xs={12}>
// //             <TextField type="text" fullWidth placeholder="Enter Title" />
// //           </Grid>
// //           <Grid item={12}>
// //             {/* <Quill /> */}
// //           </Grid>
// //         </Grid>
// //       </Formik>
// //     </Container>
// //   );
// // };

// // export default NewBlogPost;

// // Index Home Page
// // import Head from "next/head";
// // import { styled } from "@mui/system";
// // import { Grid, Typography } from "@mui/material";
// // import { PostCard, PostWidget, Categories, AddPost } from "../components";
// // import { gql, useQuery } from "@apollo/client";

// // const Container = styled("div")({
// //   marginLeft: "auto",
// //   marginRight: "auto",
// //   paddingLeft: "10px",
// //   paddingRight: "10px",
// //   marginBottom: "8px",
// // });
// // const Sidebar = styled("div")({
// //   position: "sticky",
// //   width: "100%",
// // });

// // export default function Home() {
// //   const GET_BLOGS = gql`
// //     query {
// //       blogs {
// //         id
// //         title
// //         content
// //         author
// //         category
// //         featuredImage
// //         createdAt
// //         profileImage
// //         about
// //       }
// //     }
// //   `;
// //   const { loading, error, data } = useQuery(GET_BLOGS);
// //   // console.log(data);

// //   if (loading)
// //     return (
// //       <Container>
// //         <Head>
// //           <title>Lewinskie Travels Blog</title>
// //           <link rel="icon" href="/fav.ico" />
// //         </Head>
// //         <div
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //           }}
// //         >
// //           <Typography>Loading...</Typography>
// //         </div>
// //       </Container>
// //     );
// //   if (error)
// //     return (
// //       <Container>
// //         <Head>
// //           <title>Lewinskie Travels Blog</title>
// //           <link rel="icon" href="/fav.ico" />
// //         </Head>
// //         <div
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //           }}
// //         >
// //           {console.log(error)}
// //           <Typography>{error.message}</Typography>
// //         </div>
// //       </Container>
// //     );

// //   return (
// //     <Container>
// //       <Head>
// //         <title>Lewinskie Travels Blog</title>
// //         <link rel="icon" href="/fav.ico" />
// //       </Head>
// //       <Grid container spacing={3}>
// //         <Grid item xs={12} sm={12} md={9} lg={9} xl={9} container spacing={3}>
// //           {data &&
// //             data.blogs.map((post) => (
// //               <Grid key={post.id} item xs={12} sm={6} md={6} lg={4} xl={3}>
// //                 <PostCard post={post} />
// //               </Grid>
// //             ))}
// //         </Grid>

// //         <Grid
// //           item
// //           md={3}
// //           lg={3}
// //           xl={3}
// //           sx={{ display: { xs: "none", sm: "none", md: "block" } }}
// //         >
// //           <Sidebar>
// //             <PostWidget />
// //             <Categories />
// //           </Sidebar>
// //         </Grid>
// //       </Grid>
// //     </Container>
// //   );
// // }

// // Post Details
// // import { CalendarMonth } from "@mui/icons-material";
// // import {
// //   Card,
// //   CardContent,
// //   CardHeader,
// //   CardMedia,
// //   Container,
// //   Typography,
// // } from "@mui/material";
// // import { styled } from "@mui/system";
// // import Image from "next/image";

// // const PostDetail = ({ post }) => {
// //   const { featuredImage, title, content, author } = post;
// //   // console.log(post.content);

// //   return (
// //     <Container>
// //       <Card>
// //         <CardMedia image={featuredImage} title={title} sx={{ height: 200 }} />
// //         <CardHeader title={title} />
// //         <CardContent>
// //           <div
// //             style={{
// //               display: "flex",
// //               width: "100%",
// //               justifyContent: "space-between",
// //               marginBottom: "20px",
// //               color: "gray",
// //               alignItems: "center",
// //             }}
// //           >
// //             <div
// //               style={{ width: "100%", display: "flex", alignItems: "center" }}
// //             >
// //               <Image
// //                 src={featuredImage}
// //                 alt={author}
// //                 height={40}
// //                 width={40}
// //                 style={{ borderRadius: "50%", marginRight: "10px" }}
// //               />
// //               <Typography>{author}</Typography>
// //             </div>

// //             <div
// //               style={{
// //                 display: "flex",
// //                 width: "100%",
// //                 alignItems: "center",
// //                 justifyContent: "right",
// //               }}
// //             >
// //               <CalendarMonth sx={{ color: "pink", marginRight: "px" }} />
// //               <Typography>createdAT</Typography>
// //             </div>
// //           </div>
// //           <Typography>{content}</Typography>
// //         </CardContent>
// //       </Card>
// //     </Container>
// //   );
// // };

// // export default PostDetail;

// // Post Card 
// // import { CalendarMonth } from "@mui/icons-material";
// // import {
// //   Button,
// //   Card,
// //   CardContent,
// //   CardHeader,
// //   CardMedia,
// //   Typography,
// // } from "@mui/material";
// // import { styled } from "@mui/system";

// // import Image from "next/image";
// // import Link from "next/link";

// // const PostLink = styled(Link)({
// //   textDecoration: "none",
// //   color: "black",

// //   "&:hover": {
// //     textDecoration: "underline",
// //     cursor: "pointer",
// //     color: "#e6007e",
// //   },
// // });

// // const PostCard = ({ post }) => {
// //   const { title, content, author, featuredImage, id, authorProfile } = post;
// //   return (
// //     <Card>
// //       <CardMedia>
// //         <Image src={featuredImage} height={150} width={600} alt={title} />
// //       </CardMedia>

// //       <PostLink href={`/posts/${id}`}>
// //         <Typography variant="h6" style={{ textAlign: "center" }}>
// //           {title}
// //         </Typography>
// //       </PostLink>

// //       <CardContent>
// //         <div
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             marginBottom: "10px",
// //           }}
// //         >
// //           <Image
// //             src={featuredImage}
// //             alt={author}
// //             height={30}
// //             width={30}
// //             style={{ borderRadius: "50%", marginRight: "5px" }}
// //           />
// //           <Typography color="#B8B8B8">{author}</Typography>
// //         </div>
// //         <div
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             marginBottom: "10px",
// //           }}
// //         >
// //           <CalendarMonth style={{ marginRight: "5px" }} />
// //           <span>createdAt </span>
// //         </div>
// //         <div>
// //           <Typography variant="paragraph" gutterBottom display="block">
// //             {content}
// //           </Typography>
// //         </div>
// //         <Link
// //           href={`/posts/${id}`}
// //           style={{
// //             display: "flex",
// //             width: "100%",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             marginTop: "20px",
// //             textDecoration: "none",
// //           }}
// //         >
// //           <Button variant="outlined" color="secondary">
// //             Continue Reading
// //           </Button>
// //         </Link>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default PostCard;

// // [id].js
// // import { gql, useQuery } from "@apollo/client";
// // import { Container, Grid, Typography } from "@mui/material";
// // import { styled } from "@mui/system";
// // import { useRouter } from "next/router";
// // import {
// //   PostWidget,
// //   Author,
// //   Comments,
// //   CommentsForm,
// //   PostDetail,
// //   Categories,
// // } from "../../components";

// // const GET_POST = gql`
// //   query Blog($blogId: ID!) {
// //     blog(id: $blogId) {
// //       id
// //       title
// //       content
// //       author
// //       category
// //       featuredImage
// //       createdAt
// //       profileImage
// //       about
// //     }
// //   }
// // `;

// // const PostDetails = () => {
// //   const router = useRouter();
// //   const { id } = router.query;
// //   const { loading, error, data } = useQuery(GET_POST, { variables: { id } });

// //   if (loading)
// //     return (
// //       <Container>
// //         <Typography>Loading....</Typography>
// //       </Container>
// //     );
// //   if (error)
// //     return (
// //       <Container>
// //         <Typography>{error.message}</Typography>
// //       </Container>
// //     );
// //   // const { title, content, author, category, featuredImage } = data.blog;

// //   return (
// //     <Container>
// //       <Grid container spacing={3}>
// //         <Grid item xs={12} sm={8} md={9} lg={9} xl={9}>
// //           <PostDetail post={data.blog} />
// //           <Author post={post} />
// //           <CommentsForm />
// //           <Comments />
// //         </Grid>
// //         <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
// //           <PostWidget />
// //           <Categories />
// //         </Grid>
// //       </Grid>
// //     </Container>
// //   );
// // };

// // export default PostDetails;


// import { gql, useMutation } from "@apollo/client";
// import "react-quill/dist/quill.snow.css";
// import dynamic from "next/dynamic";
// import { useState } from "react";
// import { Grid, Container, TextField, Button, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Backdrop from "@mui/material/Backdrop";
// import CircularProgress from "@mui/material/CircularProgress";
// import Head from "next/head";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   title: Yup.string().required("Title is required"),
//   content: Yup.string().required("Content is required"),
//   author: Yup.string().required("Author name is required"),
//   category: Yup.string().required("Category name is required"),
//   featuredImage: Yup.string().required("Featired image is required"),
//   profileImage: Yup.string().required("Profile Image is required"),
//   about: Yup.string().required("About Author is required"),
// });

// const CREATE_BLOG = gql`
//   mutation Mutation(
//     $title: String!
//     $content: String!
//     $author: String!
//     $category: String!
//     $featuredImage: String!
//     $profileImage: String!
//     $about: String!
//   ) {
//     createBlog(
//       title: $title
//       content: $content
//       author: $author
//       category: $category
//       featuredImage: $featuredImage
//       profileImage: $profileImage
//       about: $about
//     ) {
//       id
//       title
//       content
//       author
//       category
//       featuredImage
//       profileImage
//       about
//     }
//   }
// `;

// const ReactQuill = dynamic(
//   () => import(/*webpackChunkName:"reactQuill"*/ "react-quill"),
//   {
//     loading: () => <>Loading...</>,
//     ssr: false,
//   }
// );
// const Page = styled(Container)({
//   background: "white",
//   color: "black",
//   marginTop: "40px",
//   marginBottom: "20px",
//   "& .ql-editor": {
//     height: 400,
//     background: "white",
//     color: "black",
//   },
//   "& .ql-toolbar": {
//     background: "white",
//     color: "black",
//   },
//   "& .ql-stroke": {
//     stroke: "black !important",
//   },
// });

// const FormTypography = styled(Typography)({
//   color: "black",
// });

// const NewPost = () => {
//   // const [blog, setBlog] = useState({
//   //   title: "",
//   //   content: "",
//   //   author: "",
//   //   category: "",
//   //   featuredImage: "",
//   //   profileImage: "",
//   //   about: "",
//   // });
//   const [loader, setLoader] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   // const [responseMessage, setResponseMessage] = useState({
//   //   status: "success",
//   //   message: "",
//   // });
//   // const [createBlog] = useMutation(CREATE_BLOG);

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   setLoader(true);
//   //   setTimeout(() => {
//   //     createBlog({
//   //       variables: {
//   //         title: blog.title,
//   //         content: blog.content,
//   //         author: blog.author,
//   //         category: blog.category,
//   //         featuredImage: blog.featuredImage,
//   //         profileImage: blog.profileImage,
//   //         about: blog.about,
//   //       },
//   //     })
//   //       .then((res) => {
//   //         setLoader(false);
//   //         console.log("You submitted successfully");
//   //       })
//   //       .catch((res) => {
//   //         setLoader(false);
//   //         console.log(res);
//   //       });
//   //   }, 2000);
//   // };

//   const [createBlog] = useMutation(CREATE_BLOG);
//   const initialValues = {
//     title: "",
//     content: "",
//     author: "",
//     category: "",
//     featuredImage: "",
//     profileImage: "",
//     about: "",
//   };
//   const handleSubmit = async (values, { setSubmitting }) => {
//     setLoading(true);
//     try {
//       await createBlog({
//         variables: values,
//       });
//       console.log(variables);
//       console.log("Blog post created successfully");
//       setIsSuccess(true);
//     } catch (error) {
//       console.log("Error creating blog post:", error);
//     }
//     setSubmitting(false);
//     setIsSuccess(false);
//   };
//   return (
//     <Page>
//       <Head>
//         <title>New Blog Post</title>
//       </Head>
//       <Backdrop
//         sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={loader}
//       >
//         <CircularProgress color="inherit" />
//       </Backdrop>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <FormTypography variant="h6">Create New Post</FormTypography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <FormTypography variant="h6">Title</FormTypography>
//                 <Field
//                   name="title"
//                   as={TextField}
//                   fullWidth
//                   variant="outlined"
//                   disabled={isloading || isSuccess}

//                   // value={blog.title}
//                   // onChange={handleInputChange}
//                 />
//                 <ErrorMessage name="title" />
//               </Grid>
//               {/* <Grid item xs={12} sm={12}>
//                 <FormTypography variant="h6">Content</FormTypography>
//                 <ReactQuill
//                   theme="snow"
//                   value={blog.content}
//                   onChange={(content) => setBlog({ ...blog, content })}
//                 />
//               </Grid> */}

//               <Grid item xs={12} sm={6} md={4}>
//                 <FormTypography variant="h6">Author</FormTypography>
//                 <TextField
//                   type="text"
//                   name="author"
//                   // value={blog.author}
//                   // onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <FormTypography variant="h6">Category</FormTypography>
//                 <TextField
//                   type="text"
//                   name="category"
//                   // value={blog.category}
//                   // onChange={handleInputChange}
//                 />
//               </Grid>
//               {/* <Grid item xs={12} sm={6} md={4}>
//                 <FormTypography variant="h6">Featured Image</FormTypography>
//                 <TextField
//                   type="text"
//                   name="featuredImage"
//                   // value={blog.featuredImage}
//                   // onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <FormTypography variant="h6">Profile Image</FormTypography>
//                 <TextField
//                   type="text"
//                   name="profileImage"
//                   // value={blog.profileImage}
//                   // onChange={handleInputChange}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={6} md={4}>
//                 <FormTypography variant="h6">About</FormTypography>
//                 <TextField
//                   type="text"
//                   name="about"
//                   // value={blog.about}
//                   // onChange={handleInputChange}
//                 />
//               </Grid> */}
//               <Button type="submit" variant="contained" disabled={isSubmitting}>
//                 {isSubmitting ? "Submitting" : "Submit"}
//               </Button>
//             </Grid>
//           </Form>
//         )}
//       </Formik>
//     </Page>
//   );
// };

// export default NewPost;
