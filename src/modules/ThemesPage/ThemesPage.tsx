import { styled } from "@mui/material";
import React, { FC } from "react";
import ThemesLink from "./components/ThemeLink";
import { ITheme } from "@/types/themes";
import MainLayout from "@/layouts/MainLayout";
import Footter from "@/components/Navigation/MainNavigation/Footer";

interface ThemesPageProps {
  themes: ITheme[];
}

const ThemesPage: FC<ThemesPageProps> = ({ themes }) => {
  return (
    <MainLayout>
      <StyledThemesPage>
        <ThemesLink themes={themes} />
      </StyledThemesPage>
      <Footter />
    </MainLayout>
  );
};

const StyledThemesPage = styled("div")({
  minHeight:"800px",
  display: "flex",
  background: "#161616",
  flexDirection: "column",
});

export default ThemesPage;
