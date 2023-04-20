import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/system";
import { CalendarMonthRounded } from "@mui/icons-material";

const PostLink = styled(Link)({
  textDecoration: "none",
});
const Wrapper = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
});

const Post = ({ blog }) => {
  // console.log(blog);
  return (
    <Card sx={{ background: "#112240" }}>
      <PostLink href={`/posts/${blog.id}`}>
        <CardMedia image={blog.featuredImage} sx={{ height: "200px" }} />

        <CardHeader title={blog.title} />
      </PostLink>
      <CardContent>
        <Wrapper sx={{ justifyContent: "space-between" }}>
          <Typography sx={{ width: "100%", color: "#8892B0" }}>
            Article by&nbsp;
            <span style={{ color: "#64FFDA" }}>{blog.author}</span>
          </Typography>

          <Wrapper sx={{ justifyContent: "right", color: "#8892B0" }}>
            <CalendarMonthRounded sx={{ color: "pink", marginRight: "10px" }} />
            <Typography variant="caption" sx={{ color: "#8892B0" }}>
              {blog.createdAt}
            </Typography>
          </Wrapper>
        </Wrapper>
        <Typography
          variant="body1"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            color: "#8892B0",
            marginTop: "10px",
          }}
        >
          {blog.content}
        </Typography>
        <PostLink href={`posts/${blog.id}`}>
          <Typography
            sx={{
              marginTop: "10px",
              ":hover": {
                color: "#64FFDA",
              },
            }}
          >
            continue reading...
          </Typography>
        </PostLink>
      </CardContent>
    </Card>
  );
};

export default Post;
