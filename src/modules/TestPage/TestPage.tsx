import MainLayout from "@/layouts/MainLayout";
import styled from "@emotion/styled";
import React, { FC } from "react";
import Banner from "./Components/MainBanner";
import Footter from "@/components/Navigation/MainNavigation/Footer";

const TestPage: FC = ({}) => {
  return (
    <MainLayout>
      <Banner />

      <Footter />
    </MainLayout>
  );
};

export default TestPage;
