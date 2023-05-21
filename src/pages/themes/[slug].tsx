import React, { FC } from "react";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import { ITheme } from "@/types/themes";
import ThemePage from "@/modules/ThemePage/ThemePage";
import MainPage from "@/modules/MainPage/MainPage";

interface ThemePageProps {
  theme: ITheme;
  themes: ITheme[];
}

const ThemeSlug: FC<ThemePageProps> = ({ theme, themes }) => {
  return (
    <>
      <ThemePage theme={theme} themes={themes} />
    </>
  );
};

export async function getStaticProps({ params: { slug } }: any) {
  const files = fs.readdirSync("content/themes");
  const file = fs.readFileSync(`content/themes/${slug}.md`, "utf-8");

  const { data: meta, content } = matter(file);
  const source = await serialize(content);

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
      theme: { source, meta, slug, content },
      themes,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync("content/themes");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", "").replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default ThemeSlug;
