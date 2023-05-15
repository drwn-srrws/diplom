import React, { FC } from "react";
import { useRouter } from "next/router";
import { Link, styled } from "@mui/material";
import { ITheme } from "@/types/themes";

interface ThemesLinkProps {
  theme: ITheme;
}

const ThemeNavigation: FC<ThemesLinkProps> = ({ theme }) => {
  const router = useRouter();
  const [value, setValue] = React.useState<string | null>(router.pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(router.pathname);
    console.log(router.pathname);
  };

  return (
    <Navigation>
      <h1></h1>
      <Wrapper>
        <Description>Тема</Description>
        <StyledH1>{theme.meta.MainTheme}</StyledH1>
        <Description>Навігація по уроку</Description>
        <LinkWrapper>
          {theme.meta.PageThemes.map((link) => (
            <StyledLink key={link.url} href={`#${link.url}`}>
              {link.name}
            </StyledLink>
          ))}
        </LinkWrapper>
      </Wrapper>
    </Navigation>
  );
};
const StyledH1 = styled("h1")({
  fontSize: "16px",
  paddingBottom: "15px",
  color: "white",
});
const Wrapper = styled("div")({
  position: "sticky",
  top: "-1%",
  paddingTop: "40px",
  //position: "-webkit-sticky",
  display: "flex",
  flexDirection: "column",
});
const LinkWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});
const Navigation = styled("div")({
  width: "300px",
  padding: "0px",
  margin: "0px",
  fontSize: "16px",
  color: "#bdbdbd",
  //borderRight: "5px solid #353535",
});

const Description = styled("div")({
  paddingBottom: "10px",
});
const StyledLink = styled(Link)({
  paddingBottom: "10px",
  textDecoration: "none",
  color: "white",
});
export default ThemeNavigation;
