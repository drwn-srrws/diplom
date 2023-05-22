import MainLayout from "@/layouts/MainLayout";
import styled from "@emotion/styled";
import React, { FC, useEffect, useState } from "react";
import Footter from "@/components/Navigation/MainNavigation/Footer";
import { ITheme } from "@/types/themes";
import { useRouter } from "next/router";
import { addAccessThemes_ } from "@/actions/user";
import { Quize1, Quize2 } from "@/components/Quiz/quize";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { AddThemeAccess, passTestScore } from "@/store/reducers/userReducer";

interface StatisticsPageProps {
  themes: ITheme[];
}

const StatisticsPage: FC<StatisticsPageProps> = ({ themes }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  //const currentIndex = themes.findIndex((t) => t.slug === theme.slug);

  const { availableThemes } = useAppSelector(
    (state) => state.UserReducer.currentUser
  );
  const { passTest } = useAppSelector((state) => state.UserReducer);

  const [quizComponents, setQuizComponents] = useState<
    { testName: FC<any>; testTheme: string }[]
  >([
    {
      testName: Quize1,
      testTheme: "Основи JavaScript",
    },
    { testName: Quize2, testTheme: "Структура коду" },
  ]);

  //const isUserTest = availableThemes[currentIndex]?.themeTest;
  const allTests = quizComponents.some((item) => item.testTheme);
  const [accessTests, setAccessTests] = useState();
  console.log(allTests, "allTests");

  return (
    <MainLayout>
      {quizComponents
        .filter((test) =>
          availableThemes.map((item) => item.themeName).includes(test.testTheme)
        )
        .map((test) => (
          <>
            <test.testName key={test.testTheme} />
          </>
        ))}
      <Footter />
    </MainLayout>
  );
};

export default StatisticsPage;
