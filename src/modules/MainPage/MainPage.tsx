import MainLayout from "@/layouts/MainLayout";

import React, { FC, useEffect } from "react";
import Banner from "./Components/MainBanner";
import AboutJsBlock from "./Components/AboutJsBlock";
import Footter from "@/components/Navigation/MainNavigation/Footer";
import AboutBanner from "./Components/AboutBanner";
import Registration from "@/components/registration/Registration";
import Login from "@/components/registration/Login";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Login_ } from "@/actions/user";
import { logout } from "@/store/reducers/userReducer";
import { ITheme } from "@/types/themes";
import { useRouter } from "next/router";

//import Quize1 from "@/components/Quiz/quize";

interface ThemePageProps {
  themes: ITheme[];
}

const MainPage: FC<ThemePageProps> = ({ themes }) => {
  const { isAuth } = useAppSelector((state) => state.UserReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("email") != null) {
      Login_(
        localStorage.getItem("email") as string,
        localStorage.getItem("password") as string,
        dispatch,
        router
      );
    }
  }, [dispatch]);
  return (
    <>
      {!isAuth ? (
        <MainLayout>
          <Banner themes={themes} />
          <AboutJsBlock />
          <AboutBanner />
          <Footter />
        </MainLayout>
      ) : (
        <MainLayout>
          <Banner themes={themes} />
          <AboutJsBlock />
          <AboutBanner />
          <Footter />
        </MainLayout>
        //<Quize1 />
      )}
    </>
  );
};

export default MainPage;
