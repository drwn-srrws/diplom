import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footter() {
  return (
    <>
      <FototterWrapper>
        <Container>
          <FootterLogo>
            <StyledH3>JSDOCS</StyledH3>
            <FootterDiv>Your plan for better learning.</FootterDiv>
            <GitHubIcon />
            <TwitterIcon />
          </FootterLogo>
          <FootterAbout>
            <StyledH3>JAVASCRIPT</StyledH3>
            <FootterDiv>About</FootterDiv>
            <FootterDiv>Blog</FootterDiv>
            <FootterDiv>Careers</FootterDiv>
            <FootterDiv>Advertise</FootterDiv>
          </FootterAbout>
          <FootterSupport>
            <StyledH3>Support</StyledH3>
            <FootterDiv>Product help</FootterDiv>
            <FootterDiv>Report an issue</FootterDiv>
          </FootterSupport>
          <FootterCommunity>
            <StyledH3>Our communities</StyledH3>
            <FootterDiv> Community</FootterDiv>
            <FootterDiv> Forum</FootterDiv>
            <FootterDiv>Chat</FootterDiv>
          </FootterCommunity>
        </Container>
      </FototterWrapper>
    </>
  );
}
const StyledH3 = styled("h4")({
  paddingBottom: "5px",
});

const FootterDiv = styled("div")({
  paddingBottom: "7px",
});
const FootterLogo = styled("div")({
  marginRight: "95px",
});
const Container = styled("div")({
  maxWidth: "900px",
  margin: "0 auto",
  paddingTop: "30px",
  display: "flex",
});
const FototterWrapper = styled("div")({
  background: "#343434",
  color: "white",
  paddingBottom: "20px",
  margin: "40px 0px 0px 0px",
  
});
const FootterAbout = styled("div")({
  marginRight: "95px",
});

const FootterSupport = styled("div")({
  marginRight: "95px",
});
const FootterCommunity = styled("div")({
  marginRight: "95px",
});
