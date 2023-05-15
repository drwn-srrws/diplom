import React, { FC, PropsWithChildren } from "react";
import NavBar from "@/components/Navigation/MainNavigation/Navigation";
import styled from "@emotion/styled";
import Footter from "@/components/Navigation/MainNavigation/Footer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MainBackground>
        {<NavBar />}
        <div>{children}</div>
      </MainBackground>
    </>
  );
};

const MainBackground = styled("div")({
  background: "#1B1B1B",
});

export default MainLayout;
