import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import { Button } from "@mui/material";

export default function MainBanner() {
  return (
    <>
      <BannerWrapper>
        <Container>
          <ThemesLink href={""}>Всі теми</ThemesLink>
          <LogoWrapper>
            <StyledCodeIcon fontSize="large"></StyledCodeIcon>
            <LogoTextWrapper>
              <SmallText>Програмування</SmallText>
              <MainText>Мова JavaScript</MainText>
            </LogoTextWrapper>
          </LogoWrapper>
          <TestAboutWrapper>
            <StyledButton variant="outlined">Пройти тест</StyledButton>
            <StyledButton variant="outlined">Читати про сайт</StyledButton>
            <StyledButton variant="outlined">Почати навчання</StyledButton>
          </TestAboutWrapper>
        </Container>
      </BannerWrapper>
    </>
  );
}
const BannerWrapper = styled("div")({
  background: "#343434",
  color: "white",
  height: "200px",
});

const ThemesLink = styled(Link)({
  margin: "40px 0px 0px 0px",
});
const LogoWrapper = styled("div")({
  display: "flex",
  margin: "5px 0px 10px 15px",
});
const TestAboutWrapper = styled("div")({
  display: "flex",
  margin: "20px 0px 0px 0px",
  marginLeft: "100px",
});
const LogoTextWrapper = styled("div")({
  margin: "0px 0px 0px 10px",
});
const SmallText = styled("div")({
  fontSize: "14px",
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
