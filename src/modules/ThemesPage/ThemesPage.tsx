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
      <ThemesLink themes={themes} />
      <Footter />
    </MainLayout>
  );
};

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export default ThemesPage;
