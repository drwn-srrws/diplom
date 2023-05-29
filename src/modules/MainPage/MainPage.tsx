import MainLayout from "@/layouts/MainLayout";

import { FC, useEffect, useState } from "react";

import Footter from "@/components/Navigation/MainNavigation/Footer";

import Registration from "@/components/registration/Registration";
import Login from "@/components/registration/Login";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Login_ } from "@/actions/user";
import { logout } from "@/store/reducers/userReducer";
import { ITheme } from "@/types/themes";
import { useRouter } from "next/router";
import SimpleDialogDemo from "@/components/Modal/Modal";
import { AboutLearning } from "./Components/AboutLearning";

interface ThemePageProps {
  themes: ITheme[];
}

const MainPage: FC<ThemePageProps> = ({ themes }) => {
  const { isAuth, currentUser } = useAppSelector((state) => state.UserReducer);

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
  }, [dispatch, router, router.pathname]);

  const userThemesLenth = currentUser.availableThemes.length;
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    if (userThemesLenth > 1) {
      if (localStorage.getItem("isAlerted") == "false") {
        setIsModal(true);
      }
    } else localStorage.setItem("isAlerted", "true");
  }, []);

  return (
    <>
      {!isAuth ? (
        <MainLayout>
          <AboutLearning themes={themes} />
          <Footter />
        </MainLayout>
      ) : (
        <MainLayout>
          <AboutLearning themes={themes} />
          <Footter />
          {isModal && <SimpleDialogDemo themes={themes} />}
        </MainLayout>
      )}
    </>
  );
};

export default MainPage;
