import MainLayout from "@/layouts/MainLayout";
import { FC, useEffect, useState } from "react";
import Footter from "@/components/Navigation/MainNavigation/Footer";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Login_ } from "@/actions/user";
import { ITheme } from "@/types/themes";
import { useRouter } from "next/router";
import CompletedThemes from "./components/CompletedThemes";
import FutureThemes from "./components/FutureThemes";
import UpdateAvatarForm from "./components/UpdateAvatarForm";
import styled from "@emotion/styled";

interface ProfilePageProps {
  themes: ITheme[];
}

const ProfilePage: FC<ProfilePageProps> = ({ themes }) => {
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

  return (
    <>
      <MainLayout>
        <ProfileWrapper>
          <Wrapper>
            <CompletedThemes themes={themes} />
            <UpdateAvatarForm />
            <FutureThemes themes={themes} />
          </Wrapper>
        </ProfileWrapper>
        <Footter />
      </MainLayout>
    </>
  );
};

export default ProfilePage;

const Wrapper = styled("div")({
  paddingTop: "30px",
  maxWidth: "1800px",
  minHeight: "800px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-around",
});

const ProfileWrapper = styled("div")({
  background: "#161616",
});
