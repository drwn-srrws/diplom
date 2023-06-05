import React, { FC, useEffect, useState } from "react";

import ProfilePage from "@/modules/ProfilePage/ProfilePage";
import { ITheme } from "@/types/themes";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { useAppSelector } from "@/hooks/redux";
import styled from "@emotion/styled";
import Footter from "@/components/Navigation/MainNavigation/Footer";
import MainLayout from "@/layouts/MainLayout";

interface ProfileProps {
  themes: ITheme[];
}

const Profile: FC<ProfileProps> = ({ themes }) => {
  const { isAuth } = useAppSelector((state) => state.UserReducer);
  return (
    <>
      {isAuth ? (
        <ProfilePage themes={themes} />
      ) : (
        <MainLayout>
          <Wrapper>
            <Container>
              <MainTitle>Зареєструйтесь для доступу </MainTitle>
            </Container>
          </Wrapper>

          <Footter />
        </MainLayout>
      )}
    </>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("content/themes");

  const rawPosts = files.map(async function (fileName) {
    const slug = fileName.replace(".md", "");
    const file = fs.readFileSync(`content/themes/${fileName}`, "utf-8");
    const { data: meta, content } = matter(file);
    const source = await serialize(content);

    return {
      slug,
      source,
      meta,
    };
  });

  const themes: any = await Promise.all([...rawPosts]);

  return {
    props: {
      themes,
    },
  };
}
export default Profile;

const MainTitle = styled("div")({
  color: "#ef6817",
  fontSize: "25px",
  fontWeight: "bold",
  padding: "25px 0px 5px 0px",
});

const Wrapper = styled("div")({
  background: "#161616",
  minHeight: "800px",
});
const Container = styled("div")({
  maxWidth: "1200px",
  margin: "0 auto",
});
