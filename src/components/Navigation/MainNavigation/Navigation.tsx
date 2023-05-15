import React from "react";
import { useRouter } from "next/router";
import { Link, createTheme, styled } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useAppDispatch } from "@/hooks/redux";
import { SwapTheme } from "@/store/reducers/ThemeReducer";

export default function LabelMainNavigation() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [value, setValue] = React.useState<string | null>(router.pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(router.pathname);
    console.log(router.pathname);
  };

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
        <TestIconWrapper>
          <StyledTestLink
            href="#"
            underline="hover"
            onClick={() => {
              router.push("/trashCan");
            }}
          >
            {"Test "}
          </StyledTestLink>
          <DarkThemeIcon
            onClick={() => {
              dispatch(SwapTheme());
            }}
          >
            <StyledWbSunnyOutlinedIcon />
          </DarkThemeIcon>
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
  height: "60px",
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
