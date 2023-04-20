import Head from "next/head";
import { styled } from "@mui/system";
import { Card, Container, Grid, Typography } from "@mui/material";
import { Post, Banner } from "../components";
import { gql, useQuery } from "@apollo/client";
import { GET_BLOGS } from "@/queries/BlogQueries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading)
    return (
      <Container>
        <Head>
          <title>Lewinskie Travels Blog</title>
          <link rel="icon" href="/fav.ico" />
        </Head>

        <Typography>Loading...</Typography>
      </Container>
    );
  if (error)
    return (
      <Container>
        <Head>
          <title>Lewinskie Travels Blog</title>
          <link rel="icon" href="/fav.ico" />
        </Head>

        {console.log(error)}
        <Typography>{error.message}</Typography>
      </Container>
    );
  return (
    <>
      <Banner />
      <Container sx={{ marginBottom: "40px" }}>
        <Head>
          <title>Lewinskie Travels Blog</title>
          <link rel="icon" href="/fav.ico" />
        </Head>

        <Grid container spacing={3}>
          <Grid item xs={12}></Grid>
          {data &&
            data.blogs.map((blog) => (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={blog.id}>
                <Post blog={blog} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

// export async function getServerSideProps({ req, query, res }) {
//   // console.log(req);
//   return {
//     props: { postData: {} },
//   };
// }
