import { Link, styled } from "@mui/material";
import React, { FC } from "react";
import { ITheme } from "@/types/themes";

interface ThemesLinkProps {
  themes: ITheme[];
}

const ThemesLink: FC<ThemesLinkProps> = ({ themes }) => {
  console.log(themes);
  console.log(
    themes.map((link) => link.slug),
    "slug"
  );
  return (
    <ThemeLinkWrapper>
      <Container>
        <StyledH1>Мова програмування JavaScript </StyledH1>
        <StyledP>
          Тут ви можете вивчити JavaScript, починаючи з нуля і закінчуючи
          просунутими концепціями, як ООП.
        </StyledP>
        <StyledP>
          Ми зосередимось на самій мові, зрідка роблячи примітки щодо середовищ
          її виконання.
        </StyledP>

        <StyledH2>Вступ</StyledH2>
        {themes.map(
          (link, index) =>
            index < 4 && (
              <Link key={link.slug} href={`themes/${link.slug}`}>
                {link.meta.MainTheme}
              </Link>
            )
        )}
        <StyledH2>Основи JavaScript</StyledH2>
        {themes.map(
          (link, index) =>
            index > 4 &&
            index < 20 && (
              <Link key={link.slug} href={`themes/${link.slug}`}>
                {link.meta.MainTheme}
              </Link>
            )
        )}
      </Container>
    </ThemeLinkWrapper>
  );
};

const StyledH1 = styled("h1")(() => ({
  display: "flex",
  margin: "30px 0px 10px 0px",
}));

const StyledH2 = styled("h2")(() => ({
  display: "flex",
  margin: "25px 0px 10px 0px",
}));

const StyledP = styled("p")({
  margin: "10px 0px",
});

const ThemeLinkWrapper = styled("div")({});

const Container = styled("div")({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
});
export default ThemesLink;
