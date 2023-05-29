import { Link, styled } from "@mui/material";
import React, { FC } from "react";
import { ITheme } from "@/types/themes";
import { useAppSelector } from "@/hooks/redux";

interface ThemesLinkProps {
  themes: ITheme[];
}

const ThemesLink: FC<ThemesLinkProps> = ({ themes }) => {
  console.log(themes);
  console.log(
    themes.map((link) => link.slug),
    "slug"
  );
  //const currentIndex = themes.findIndex((t) => t.slug === theme.slug);

  const { currentUser, isAuth } = useAppSelector((state) => state.UserReducer);

  return (
    <ThemeLinkWrapper>
      <Container>
        <MainTitle>Мова програмування JavaScript </MainTitle>
        <Text>
          Тут ви можете вивчити JavaScript, починаючи з нуля і закінчуючи
          просунутими концепціями, як ООП.
        </Text>
        <Text>
          Ми зосередимось на самій мові, зрідка роблячи примітки щодо середовищ
          її виконання.
        </Text>
        <MainTitle>Вступ</MainTitle>
        {isAuth ? (
          themes.map((link, index) => {
            if (
              index < 4 &&
              (currentUser.availableThemes.some(
                (item) => item.themeUrl === link.slug
              ) ||
                !currentUser.availableThemes.length)
            ) {
              return (
                <StyledLink key={link.slug} href={`themes/${link.slug}`}>
                  {link.meta.MainTheme}
                </StyledLink>
              );
            } else {
              return null;
            }
          })
        ) : (
          <MainTitle>Зареєструйтесь для доступу до тем</MainTitle>
        )}

        {currentUser.availableThemes.some(
          (item) => item.themeName === themes[5].meta.MainTheme
        ) ? (
          <MainTitle>Основи JavaScript</MainTitle>
        ) : (
          <MainTitle>Пройдіть минулі теми для доступу</MainTitle>
        )}
        {themes.map(
          (link, index) =>
            index > 4 &&
            index < 20 &&
            (currentUser.availableThemes.some(
              (item) => item.themeName === link.meta.MainTheme
            ) ||
              !currentUser.availableThemes.length) && (
              <StyledLink key={link.slug} href={`themes/${link.slug}`}>
                {link.meta.MainTheme}
              </StyledLink>
            )
        )}
      </Container>
    </ThemeLinkWrapper>
  );
};

const ThemeLinkWrapper = styled("div")({});

const Container = styled("div")({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
});

const MainTitle = styled("div")({
  color: "#ef6817",
  fontSize: "25px",
  fontWeight: "bold",
  padding: "25px 0px 15px 0px",
});

const Text = styled("div")({
  fontSize: "18px",
  margin: "15px 0px 15px 10px",
  color: "white",
});
const StyledLink = styled(Link)({
  padding: "0px 0px 9px 10px",
  color: "white",
  textDecoration: "none",
  transition: "transform 0.3s",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.01)",
  },
});

export default ThemesLink;
