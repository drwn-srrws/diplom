import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Link, createTheme, styled } from "@mui/material";
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
  }, [dispatch]);

  return (
    <Navigation>
      <Container>
        <NavigationDiv>
          <StyledMainLink
            href="#"
            underline="none"
            onClick={() => {
              router.push("/");
            }}
          >
            {"Javascript посібник"}
          </StyledMainLink>
        </NavigationDiv>
        <StyledTestLink
          href="#"
          underline="hover"
          onClick={() => {
            !isAuth && router.push("/autorization");
          }}
        >
          {isAuth ? <ProfileSelect /> : "Зареєструватися"}
        </StyledTestLink>

        <TestIconWrapper>
          {/* <StyledTestLink
            href="#"
            underline="hover"
            onClick={() => {
              isAuth ? dispatch(logout()) : router.push("/autorization");
            }}
          >
            {isAuth ? "Вийти з аккаунта" : "Зарееструватися"}
          </StyledTestLink> */}
          {/* <ProfileList /> */}
          {/* <DarkThemeIcon
            onClick={() => {
              dispatch(SwapTheme());
            }}
          >
            <StyledWbSunnyOutlinedIcon />
          </DarkThemeIcon> */}
        </TestIconWrapper>
      </Container>
    </Navigation>
  );
}

const Navigation = styled("div")({
  borderBottom: "1px solid #858585",
});

const Container = styled("div")({
  maxWidth: "1200px",
  width: "100%",
  height: "80px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
});

const NavigationDiv = styled("div")({
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
});

const StyledMainLink = styled(Link)({
  fontSize: "23px",
  color: "palette.text.primary",
});

const StyledTestLink = styled(Link)({
  fontSize: "20px",
  margin: "0px 0px 0px 0px",
  color: "white",
});

const StyledWbSunnyOutlinedIcon = styled(WbSunnyOutlinedIcon)({
  color: "white",
});

const TestIconWrapper = styled("div")({
  display: "flex",
});

const DarkThemeIcon = styled("button")({
  display: "flex",
  marginLeft: "40px",
});
