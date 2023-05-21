import React, { useEffect, useState } from "react";
import { ITheme } from "@/types/themes";
import styled from "@emotion/styled";
import { MDXRemote } from "next-mdx-remote";
import { FC } from "react";
import { IAvailableThemes } from "@/types/user";
import ThemeNavigation from "./components/ThemeNavigation";
import MainLayout from "@/layouts/MainLayout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";
import Footter from "@/components/Navigation/MainNavigation/Footer";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { AddThemeAccess, passTestScore } from "@/store/reducers/userReducer";
import { addAccessThemes_ } from "@/actions/user";
import { Quize1, Quize2 } from "../../components/Quiz/quize";
import { Tooltip } from "@mui/material";

interface ThemePageProps {
  theme: ITheme;
  themes: ITheme[];
}

const ThemePage: FC<ThemePageProps> = ({ theme, themes }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const currentIndex = themes.findIndex((t) => t.slug === theme.slug);
  const prev = currentIndex > 0 ? themes[currentIndex - 1].slug : undefined;
  const next =
    currentIndex < themes.length - 1
      ? themes[currentIndex + 1].slug
      : undefined;

  function isScrolledToBottom() {
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return scrollTop + windowHeight >= documentHeight - 250;
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledSet, setIsScrolledSet] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = isScrolledToBottom();
      if (scrolled) {
        setIsScrolled(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.asPath]);

  const nextMainThemeURL =
    currentIndex < themes.length - 1
      ? themes[currentIndex + 1].slug
      : undefined;

  const nextMainThemeName =
    currentIndex < themes.length - 1
      ? themes[currentIndex + 1].meta.MainTheme
      : undefined;
  const { availableThemes } = useAppSelector(
    (state) => state.UserReducer.currentUser
  );
  const { passTest } = useAppSelector((state) => state.UserReducer);

  useEffect(() => {
    setIsScrolled(false);
  }, [router.asPath]);

  const [quizComponents, setQuizComponents] = useState<
    { testName: FC<any>; testTheme: string; isTestCompleted: boolean }[]
  >([
    {
      testName: Quize1,
      testTheme: "Основи JavaScript",
      isTestCompleted: false,
    },
    { testName: Quize2, testTheme: "Структура коду", isTestCompleted: false },
  ]);

  const isUserTest = availableThemes[currentIndex]?.themeTest;

  const isPageTest = quizComponents.some(
    (item) => item.testTheme === theme.meta.MainTheme
  );
  const IsTest =
    quizComponents.some((item) => item.testTheme === theme.meta.MainTheme) &&
    isUserTest !== true &&
    passTest < 59;

  const isUserHasTheme = !availableThemes.some(
    (item) => item.themeUrl === theme.slug
  );

  const [isAddthemeAccess, setIsAddthemeAccess] = useState(false);
  //const isTestCompleted = passTest > 60;
  useEffect(() => {
    if (!IsTest) {
      if (nextMainThemeURL && isScrolled) {
        if (isUserHasTheme) {
          const themeForAdd = {
            themeName: theme.meta.MainTheme,
            themeUrl: theme.slug,
            themeTest: true,
            themeScore: passTest,
            nextPage: true,
          };
          setIsAddthemeAccess(true);
          dispatch(AddThemeAccess(themeForAdd as any));
        }
        if (isAddthemeAccess) {
          addAccessThemes_(
            localStorage.getItem("id") as string,
            availableThemes as any
          );
          dispatch(passTestScore(0));
          setIsAddthemeAccess(false);
        }
      }
    }
  }, [
    IsTest,
    nextMainThemeURL,
    isScrolled,
    isUserHasTheme,
    nextMainThemeName,
    dispatch,
    passTest,
    availableThemes,
    theme.meta.MainTheme,
    theme.slug,
    isAddthemeAccess,
  ]);

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

        {prev !== undefined && (
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
          {isPageTest && (
            <>
              {IsTest ? (
                <>
                  {quizComponents
                    .filter((test) => test.testTheme === theme.meta.MainTheme)
                    .map((test) => (
                      <>
                        <test.testName key={test.testTheme} />
                      </>
                    ))}
                </>
              ) : (
                <Tooltip
                  title={`Ви набрали ${availableThemes[currentIndex]?.themeScore} %`}
                  placement="top"
                >
                  <StyledTestCompleted>Тест пройдено</StyledTestCompleted>
                </Tooltip>
              )}
            </>
          )}
        </MDXRemoteWrapper>
        {availableThemes[currentIndex]?.nextPage && next !== undefined ? (
          <>
            <StyledArrowForwardIosIcon
              onClick={() => {
                router.push(`${next}`);
                setIsScrolled(false);
              }}
            ></StyledArrowForwardIosIcon>
          </>
        ) : (
          <>
            {isScrolled && !IsTest && (
              <StyledArrowForwardIosIcon
                onClick={() => {
                  router.push(`${next}`);
                }}
              ></StyledArrowForwardIosIcon>
            )}
          </>
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
  flex: "1 0 auto",
  minHeight: "800px",
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
const StyledTestCompleted = styled("div")({
  textAlign: "center",
  fontSize: "18px",
  color: "green",
  marginTop: "45px",
});
