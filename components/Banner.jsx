import { Card, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const BannerWrapper = styled("div")({
  background: "#0A192F",
  width: "100%",
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});
const Banner = () => {
  return (
    <BannerWrapper>
      <div>
        <Image src="/construction.png" width={300} height={300} alt="banner" />
      </div>

      <Typography variant="h4">Banner under construction</Typography>
    </BannerWrapper>
  );
};

export default Banner;
