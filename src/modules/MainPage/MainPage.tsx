import MainLayout from "@/layouts/MainLayout";

import React, { FC } from "react";
import Banner from "./Components/MainBanner";
import AboutJsBlock from "./Components/AboutJsBlock";
import Footter from "@/components/Navigation/MainNavigation/Footer";
import AboutBanner from "./Components/AboutBanner";

const MainPage: FC = ({}) => {
  return (
    <MainLayout>
      <Banner />
      <AboutJsBlock />
      <AboutBanner />
      <Footter />
    </MainLayout>
  );
};

export default MainPage;
