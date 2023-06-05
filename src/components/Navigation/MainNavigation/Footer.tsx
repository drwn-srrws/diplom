import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "@mui/material";
export default function Footter() {
  return (
    <>
      <FototterWrapper>
        <Container>
          <FootterAbout>
            <StyledH3>JSDOCS</StyledH3>
            <FootterDiv>Ваш план для кращого навчання!</FootterDiv>
          </FootterAbout>
          <FootterAbout>
            <StyledH3Link>JAVASCRIPT</StyledH3Link>
            <FootterLink href="/aboutSite">Про сайт</FootterLink>
          </FootterAbout>
          <FootterAbout>
            <StyledH3>Корисні посилання</StyledH3>
            <Link
              style={{ color: "white" }}
              href="https://github.com/drwn-srrws/diplom"
            >
              <GitHubIcon sx={styles.icon} />
            </Link>
          </FootterAbout>
        </Container>
      </FototterWrapper>
    </>
  );
}
const styles = {
  icon: {
    margin: "8px 30px 0px 55px",
    cursor: "pointer",
  },
};
const StyledH3 = styled("h4")({
  paddingBottom: "7px",
  color: "#ef6817",
});

const StyledH3Link = styled("h4")({
  paddingBottom: "17px",
  color: "#ef6817",
  //fontSize: "25px",
});

const FootterDiv = styled("div")({
  padding: "10px 0px 7px 5px",
});

const FootterLink = styled(Link)({
  margin: "20px 0px 7px 5px",
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
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
