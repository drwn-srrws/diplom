import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import { Button } from "@mui/material";

export default function AboutBanner() {
  return (
    <>
      <AboutBannerWrapper>
        <Container>
          <ThemesLink href={""}>?*?????*?*</ThemesLink>
          <BannerWrapper>
            <Banner>
              <BannerTitle>&&&&&&&</BannerTitle>
              <BannerText>
                WebGL позволяет веб-контенту использовать API, основанный на
                OpenGL ES 2.0, для визуализации трёхмерной графики без
              </BannerText>
            </Banner>
            <Banner>
              <BannerTitle>&&&&&&&&&&&&&&</BannerTitle>
              <BannerText>
                WebGL позволяет веб-контенту использовать API, основанный на
                OpenGL ES 2.0, для визуализации трёхмерной графики без
              </BannerText>
            </Banner>
          </BannerWrapper>
          <BannerWrapper>
            <Banner>
              <BannerTitle>&&&&&&&&&&&&&&</BannerTitle>
              <BannerText>
                WebGL позволяет веб-контенту использовать API, основанный на
                OpenGL ES 2.0, для визуализации трёхмерной графики без
              </BannerText>
            </Banner>
            <Banner>
              <BannerTitle>&&&&&&&&&&&&&&</BannerTitle>
              <BannerText>
                WebGL позволяет веб-контенту использовать API, основанный на
                OpenGL ES 2.0, для визуализации трёхмерной графики без
              </BannerText>
            </Banner>
          </BannerWrapper>
          <ThemesLink href={""}>Почати навчання...</ThemesLink>
        </Container>
      </AboutBannerWrapper>
    </>
  );
}
const AboutBannerWrapper = styled("div")({
  background: "#1B1B1B",
  color: "white",
});

const ThemesLink = styled(Link)({
  margin: "40px 0px 0px 0px",
});
const Banner = styled("div")({
  border: "1px solid white",
  borderRadius: "0.5rem",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  margin: "15px 20px 15px 15px",
});
const BannerTitle = styled("div")({
  display: "flex",
  margin: "5px 0px 15px 0px",
});
const BannerText = styled("div")({
  margin: "0px 0px 0px 10px",
});
const BannerWrapper = styled("div")({
  display: "flex",
});

const MainText = styled("div")({
  fontSize: "22px",
});
const Container = styled("div")({
  padding: "15px 0px 0px 0px",
  maxWidth: "1200px",
  margin: "0 auto",
});

const StyledButton = styled(Button)({
  width: "180px",
  background: "#343434",
  color: "white",
  marginRight: "20px",
});

const About = styled("div")({});

const StyledCodeIcon = styled(CodeIcon)({
  margin: "3px 0px 0px 0px",
});
