import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Link, createTheme, styled } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { SwapTheme } from "@/store/reducers/ThemeReducer";
import { Login_ } from "@/actions/user";
import { logout } from "@/store/reducers/userReducer";

import ProfileSelect from "@/components/ProfileList/ProfileList";

export default function LabelMainNavigation() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { isAuth } = useAppSelector((state) => state.UserReducer);

  useEffect(() => {
    Login_(
      localStorage.getItem("email") as string,
      localStorage.getItem("password") as string,
      dispatch,
      router
      //location.pathname
    );
  }, [dispatch, router]);

  return (
    <Navigation>
      <Container>
        <StyledLink href="/">JAVASCRIPT ПОСІБНИК</StyledLink>

        <NavigationWrapper>
          <StyledButton href="/statistics">Тести</StyledButton>

          <StyledButton href="/themes">Всі теми</StyledButton>
        </NavigationWrapper>
        <Profile>
          {isAuth ? (
            <Link href="#" underline="hover">
              <ProfileSelect />
            </Link>
          ) : (
            <Link
              href="#"
              underline="hover"
              onClick={() => {
                !isAuth && router.push("/autorization");
              }}
            >
              <RegisterLink>Зареєструватися</RegisterLink>
            </Link>
          )}
        </Profile>
      </Container>
    </Navigation>

    // <Navigation>
    //   <StyledMainLink
    //     href="#"
    //     underline="none"
    //     onClick={() => {
    //       router.push("/");
    //     }}
    //   >
    //     {"Javascript посібник"}
    //   </StyledMainLink>

    //   <NavigationDiv>
    //     <StyledButton>Тести</StyledButton>
    //     <StyledButton>Продовжити навчання</StyledButton>
    //     <StyledButton>Всі теми</StyledButton>
    //     <StyledButton>Статистика</StyledButton>
    //   </NavigationDiv>
    //   <StyledTestLink
    //     href="#"
    //     underline="hover"
    //     onClick={() => {
    //       !isAuth && router.push("/autorization");
    //     }}
    //   >
    //     {isAuth ? <ProfileSelect /> : "Зареєструватися"}
    //   </StyledTestLink>

    //   <TestIconWrapper>
    //     {/* <StyledTestLink
    //         href="#"
    //         underline="hover"
    //         onClick={() => {
    //           isAuth ? dispatch(logout()) : router.push("/autorization");
    //         }}
    //       >
    //         {isAuth ? "Вийти з аккаунта" : "Зарееструватися"}
    //       </StyledTestLink> */}
    //     {/* <ProfileList /> */}
    //     {/* <DarkThemeIcon
    //         onClick={() => {
    //           dispatch(SwapTheme());
    //         }}
    //       >
    //         <StyledWbSunnyOutlinedIcon />
    //       </DarkThemeIcon> */}
    //   </TestIconWrapper>
    // </Navigation>
  );
}
const Navigation = styled("div")({
  height: "80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "#1B1B1B",
  fontFamily: "Gentium Book Plus, serif",
  borderBottom: "3px solid #ef6817",
});
const Container = styled("div")({
  margin: "0 auto",
  width: "1800px",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "18px",
  fontWeight: "bold",
});
const StyledLink = styled(Link)({
  paddingTop: "10px",
  //marginLeft: "80px",
  color: "#ef6817",
  textDecoration: "none",
});
const NavigationWrapper = styled("div")({
  width: "1380px",
});
const Profile = styled("div")({
  //paddingTop: "10px ",
});
const StyledButton = styled(Button)({
  color: "white",
  marginLeft: "60px",
});
const RegisterLink = styled("div")({
  paddingTop: "10px",
});
//const StyledLink = styled("div")({});
// const Navigation = styled("div")({
//   height: "80px",
//   borderBottom: "1px solid #858585",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   paddingLeft: "25px",
// });

// const NavigationDiv = styled("div")({
//   display: "flex",
//   // margin: "0 auto",
//   justifyContent: "flex-end",
// });

// const StyledMainLink = styled(Link)({
//   fontSize: "23px",
//   color: "palette.text.primary",
// });

// const StyledTestLink = styled(Link)({
//   fontSize: "20px",
//   margin: "0px 0px 0px 70px",
//   color: "white",
// });

// const StyledButton = styled(Button)({
//   paddingLeft: "45px",
// });

// const TestIconWrapper = styled("div")({
//   display: "flex",
// });

// const DarkThemeIcon = styled("button")({
//   display: "flex",
//   marginLeft: "40px",
// });
