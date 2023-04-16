import { gql, useQuery } from "@apollo/client";
// import { client } from "../_app";
import { CalendarMonthRounded } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const Wrapper = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
});

const GET_POST = gql`
  query Blog($blogId: ID!) {
    blog(id: $blogId) {
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

const PostDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { blogId: id },
  });

  if (loading)
    return (
      <Container>
        <Typography>Loading....</Typography>
      </Container>
    );
  if (error)
    return (
      <Container>
        <Typography>{error.message}</Typography>
      </Container>
    );
  console.log(data);

  return (
    <Container sx={{ marginBottom: "20px" }}>
      <Head>
        <title>{data.blog.title}</title>
      </Head>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card sx={{ background: "#112240" }}>
            <CardMedia
              image={data.blog.featuredImage}
              sx={{ height: "200px" }}
            />

            <CardHeader title={data.blog.title} />

            <CardContent>
              <Wrapper sx={{ justifyContent: "space-between" }}>
                <Typography sx={{ width: "100%", color: "#8892B0" }}>
                  Article by&nbsp;
                  <span style={{ color: "#64FFDA" }}>{data.blog.author}</span>
                </Typography>

                <Wrapper sx={{ justifyContent: "right", color: "#8892B0" }}>
                  <CalendarMonthRounded
                    sx={{ color: "pink", marginRight: "10px" }}
                  />
                  <Typography variant="caption" sx={{ color: "#8892B0" }}>
                    {data.blog.createdAt}
                  </Typography>
                </Wrapper>
              </Wrapper>
              <Typography
                variant="body1"
                sx={{
                  color: "#8892B0",
                  marginTop: "10px",
                }}
              >
                {data.blog.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ background: "#112240" }}>
            <CardContent>
              <Wrapper style={{ justifyContent: "center" }}>
                <Image
                  src={data.blog.profileImage}
                  alt={data.blog.title}
                  height={100}
                  width={100}
                  style={{ borderRadius: "50%" }}
                />
              </Wrapper>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ margin: "20px 0px", color: "#64FFDA" }}
                >
                  About&nbsp;{data.blog.author}
                </Typography>
                <Typography variant="body1" sx={{ color: "#8892B0" }}>
                  {data.blog.about}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostDetails;

// export async function getServerSideProps({ params }) {
//   const { id } = params;

//   const { loading, error, data } = await client.query({
//     query: GET_POST,
//     variables: { blogId: id },
//   });
//   return {
//     props: { data, error, loading },
//   };
// }
