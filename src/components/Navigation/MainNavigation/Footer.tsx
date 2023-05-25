import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footter() {
  return (
    <>
      <FototterWrapper>
        <Container>
          <FootterAbout>
            <StyledH3>JSDOCS</StyledH3>
            <FootterDiv>Your plan for better learning.</FootterDiv>
          </FootterAbout>
          <FootterAbout>
            <StyledH3>JAVASCRIPT</StyledH3>
            <FootterDiv>Про сайт</FootterDiv>
          </FootterAbout>
          <FootterAbout>
            <StyledH3>Корисні посилання</StyledH3>
            <GitHubIcon sx={styles.icon} />
            <TwitterIcon />
          </FootterAbout>
        </Container>
      </FototterWrapper>
    </>
  );
}
const styles = {
  icon: {
    margin: "8px 30px 0px 25px",
  },
};
const StyledH3 = styled("h4")({
  paddingBottom: "7px",
  color: "#ef6817",
  //fontSize: "25px",
});

const FootterDiv = styled("div")({
  padding: "10px 0px 7px 5px",
});

const Container = styled("div")({
  maxWidth: "1000px",
  margin: "0 auto",
  paddingTop: "30px",
  display: "flex",
});
const FototterWrapper = styled("div")({
  borderTop: "3px solid #ef6817",
  background: "#1B1B1B",
  color: "white",
  //paddingBottom: "20px",
  padding: "40px 0px 40px 0px",
});
const FootterAbout = styled("div")({
  marginRight: "165px",
});
const LogoDiv = styled("div")({});
