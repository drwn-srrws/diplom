import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import { Button, Tooltip } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { FC, useEffect } from "react";
import { Login_ } from "@/actions/user";
import { ITheme } from "@/types/themes";
import { useRouter } from "next/router";

interface ThemePageProps {
  themes: ITheme[];
}
const MainBanner: FC<ThemePageProps> = ({ themes }) => {
  const { isAuth, currentUser } = useAppSelector((state) => state.UserReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const UserThemes = currentUser.availableThemes.map((item) => item.themeUrl);

  const countUserThemes = currentUser.availableThemes.length;

  const lastTheme =
    countUserThemes > 2
      ? `/themes/${UserThemes[countUserThemes - 1]}`
      : "/themes/1Introduction";
  useEffect(() => {
    Login_(
      localStorage.getItem("email") as string,
      localStorage.getItem("password") as string,
      dispatch,
      router
    );
  }, [dispatch]);

  // if(themes.)
  // if (!availablethemes.includes(nextMainTheme))
  // const href = currentUser.availablethemes.length >= 2?`themes/${themes}`
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
            {/* <StyledButton variant="outlined">Пройти тест</StyledButton> */}
            <StyledButton variant="outlined">Читати про сайт</StyledButton>
            {isAuth ? (
              countUserThemes > 2 ? (
                <StyledButton variant="outlined" href={lastTheme}>
                  Продовжити навчання
                </StyledButton>
              ) : (
                <StyledButton variant="outlined" href="/themes/1Introduction">
                  Почати навчання
                </StyledButton>
              )
            ) : (
              <StyledButton variant="outlined">
                Зареєструйтесь на сайті
              </StyledButton>
            )}
          </TestAboutWrapper>
        </Container>
      </BannerWrapper>
    </>
  );
};
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
  //height: "250px",
  background: "#343434",
  color: "white",
  marginRight: "20px",
});

const About = styled("div")({
  background: "#1B1B1B",
});

const StyledCodeIcon = styled(CodeIcon)({
  margin: "3px 0px 0px 0px",
});
export default MainBanner;
