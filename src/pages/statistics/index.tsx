import StatisticsPage from "@/modules/StatisticsPage/StatisticsPage";

import { ITheme } from "@/types/themes";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { FC } from "react";
import fs from "fs";

interface StatisticsPageProps {
  theme: ITheme;
  themes: ITheme[];
}

const Statisticspage: FC<StatisticsPageProps> = ({ themes }) => {
  return (
    <>
      <StatisticsPage themes={themes} />
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

export default Statisticspage;
