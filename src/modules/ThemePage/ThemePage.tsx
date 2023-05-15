import React from "react";
import { ITheme } from "@/types/themes";
import styled from "@emotion/styled";
import { MDXRemote } from "next-mdx-remote";
import { FC } from "react";

import ThemeNavigation from "./components/ThemeNavigation";
import MainLayout from "@/layouts/MainLayout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";
import Footter from "@/components/Navigation/MainNavigation/Footer";

interface ThemePageProps {
  theme: ITheme;
  themes: ITheme[];
}

const ThemePage: FC<ThemePageProps> = ({ theme, themes }) => {
  const currentIndex = themes.findIndex((t) => t.slug === theme.slug);
  const prev = currentIndex > 0 ? themes[currentIndex - 1].slug : undefined;
  const next =
    currentIndex < themes.length - 1
      ? themes[currentIndex + 1].slug
      : undefined;

  const router = useRouter();

  const components = {
    Column: (props: any) => <Column {...props} />,
    h1: (props: any) => <StyledH1 {...props} />,
    h2: (props: any) => <StyledH2 {...props} />,
    p: (props: any) => <StyledP {...props} />,
    Extra: (props: any) => <Extra {...props} />,
    li: (props: any) => <StyledLi {...props} />,
    ul: (props: any) => <StyledUl {...props} />,
    ol: (props: any) => <StyledOl {...props} />,
    img: (props: any) => <StyledIMG {...props} />,
    Code: (props: any) => <StyledCode {...props} />,
  };
  return (
    <MainLayout>
      <Container>
        <ThemeNavigation theme={theme} />

        {prev != undefined && (
          <StyledArrowBackIosIcon
            onClick={() => {
              router.push(`${prev}`);
            }}
          ></StyledArrowBackIosIcon>
        )}
        <MDXRemoteWrapper>
          <MDXRemote
            compiledSource={theme.source.compiledSource}
            components={components}
            scope={undefined}
            frontmatter={undefined}
          />
        </MDXRemoteWrapper>

        {next != undefined && (
          <StyledArrowForwardIosIcon
            onClick={() => {
              router.push(`${next}`);
            }}
          ></StyledArrowForwardIosIcon>
        )}
      </Container>
      <Footter />
    </MainLayout>
  );
};

export default ThemePage;

const StyledLi = styled("li")({
  margin: "0px 0px 10px 0px",
});

const StyledUl = styled("ul")({
  margin: "0px 0px 0px 17px",
});

const Column = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  color: "white",
}));

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

const Container = styled("div")(() => ({
  display: "flex",
  margin: "0 auto",
  maxWidth: "1600px",
}));

const MDXRemoteWrapper = styled("div")(() => ({
  margin: "0 auto",
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
}));

const Extra = styled("div")({
  border: "4px solid #353535",
  boxSizing: "border-box",
  padding: "20px",
  margin: "20px 0px",
  color: "white",
  maxWidth: "800px",
});

const StyledArrowForwardIosIcon = styled(ArrowForwardIosIcon)({
  position: "sticky",
  top: "50%",
  margin: "0px 30px ",
});
const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)({
  position: "sticky",
  top: "50%",
  margin: "0px 30px ",
});

const StyledIMG = styled("img")({
  width: "100%",
  height: "100%",
});
const StyledCode = styled("div")({
  "& strong": {
    color: "#adafba",
    fontWeight: "normal",
    fontFamily: "monospace",
  },
  color: "#BEDEFF",
  background: "rgb(33,37,43)",
  boxSizing: "border-box",
  padding: "20px",
  margin: "20px 0px",
});
const StyledOl = styled("ol")({
  "& li": {
    margin: "0px 0px 7px 25px",
    background: "",
    "&::marker": {
      background: "white",
    },
  },
});
