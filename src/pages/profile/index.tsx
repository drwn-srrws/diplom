import React, { FC, useEffect, useState } from "react";

import ProfilePage from "@/modules/ProfilePage/ProfilePage";
import { ITheme } from "@/types/themes";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

interface ProfileProps {
  themes: ITheme[];
}

const Profile: FC<ProfileProps> = ({ themes }) => {
  
  //const { isAuth } = useAppSelector((state) => state.UserReducer);
  return <ProfilePage themes={themes} />;
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
