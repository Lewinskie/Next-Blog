import { gql } from "@apollo/client";
import { ServerClient } from "../_app";
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
import { Layout } from "@/components";
// import { useRouter } from "next/router";

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

const PostDetails = ({ postData }) => {
  // const router = useRouter();
  // const { id } = router.query;
  // const { loading, error, data } = useQuery(GET_POST, {
  //   variables: { blogId: id },
  // });

  // if (loading)
  //   return (
  //     <Container>
  //       <Typography>Loading....</Typography>
  //     </Container>
  //   );
  // if (error)
  //   return (
  //     <Container>
  //       <Typography>{error.message}</Typography>
  //     </Container>
  //   );
  // console.log(data);

  return (
    <Layout>
      <Container sx={{ marginBottom: "20px" }}>
        <Head>
          <title>{postData?.title}</title>
        </Head>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ background: "#112240" }}>
              <CardMedia
                image={postData?.featuredImage}
                sx={{ height: "200px" }}
              />

              <CardHeader title={postData?.title} />

              <CardContent>
                <Wrapper sx={{ justifyContent: "space-between" }}>
                  <Typography sx={{ width: "100%", color: "#8892B0" }}>
                    Article by&nbsp;
                    <span style={{ color: "#64FFDA" }}>{postData?.author}</span>
                  </Typography>

                  <Wrapper sx={{ justifyContent: "right", color: "#8892B0" }}>
                    <CalendarMonthRounded
                      sx={{ color: "pink", marginRight: "10px" }}
                    />
                    <Typography variant="caption" sx={{ color: "#8892B0" }}>
                      {postData?.createdAt}
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
                  {postData?.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ background: "#112240" }}>
              <CardContent>
                <Wrapper style={{ justifyContent: "center" }}>
                  <Image
                    src={postData?.profileImage}
                    alt={postData?.title}
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
                    About&nbsp;{postData?.author}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#8892B0" }}>
                    {postData?.about}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PostDetails;

export async function getServerSideProps({ query }) {
  const { id } = query;

  let postData = null;
  try {
    const response = await ServerClient.query({
      query: GET_POST,
      variables: { blogId: Number(id) },
    });
    postData = response?.data?.blog || null;
  } catch (err) {
    console.log(err);
  }
  return {
    props: { postData },
  };
}
