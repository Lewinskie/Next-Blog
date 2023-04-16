import Link from "next/link";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const Container = styled("div")({
  marginLeft: "auto",
  marginRight: "auto",
  paddingRight: "10px",
  paddingLeft: "10px",
  borderBottom: "solid 0.1px #64FFDA",
});

const Span = styled("span")({
  cursor: "pointer",
  fontWeight: "bold",
});
const Links = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  alignItems: "center",
});

const categories = [
  { name: "React", slug: "react" },
  { name: "Web Development", slug: "web-dev" },
];
const Header = () => {
  return (
    <Container sx={{ marginTop: "40px" }}>
      <Grid container sx={{ padding: "10px" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Span>
              <Typography
                variant="h4"
                color="#64FFDA"
                style={{ fontWeight: "bold" }}
              >
                Lewinskie Travels Blog
              </Typography>
            </Span>
          </Link>
        </Grid>
        <Grid
          item
          md={6}
          lg={8}
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            width: "100%",
          }}
        >
          <Links>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    paddingLeft: "10px",
                    "&:hover": {
                      color: "#64FFDA",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {category.name}
                </Typography>
              </Link>
            ))}
          </Links>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", width: "100%", justifyContent: "right" }}
        >
          <Link href="/posts/new/NewPost">Create new blog post</Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
