import MainLayout from "@/layouts/MainLayout";
import styled from "@emotion/styled";
import React, { FC, useEffect, useState } from "react";
import Footter from "@/components/Navigation/MainNavigation/Footer";
import { ITheme } from "@/types/themes";
import { useRouter } from "next/router";
import { addAccessThemes_, updateThemeScore_ } from "@/actions/user";
import { Quize1, Quize2 } from "@/components/Quiz/quize";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { AddThemeAccess, passTestScore } from "@/store/reducers/userReducer";

interface StatisticsPageProps {
  themes: ITheme[];
}

const StatisticsPage: FC<StatisticsPageProps> = ({ themes }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { availableThemes } = useAppSelector(
    (state) => state.UserReducer.currentUser
  );
  const { passTest } = useAppSelector((state) => state.UserReducer);

  const [quizComponents, setQuizComponents] = useState<
    { testName: FC<any>; testTheme: string; isOpen: boolean }[]
  >([
    {
      testName: Quize1,
      testTheme: "Основи JavaScript",
      isOpen: false,
    },
    { testName: Quize2, testTheme: "Структура коду", isOpen: false },
  ]);

  const [currentTheme, setCurrentTheme] = useState<string>("");

  useEffect(() => {
    if (
      availableThemes.some(
        (item) => item.themeName === currentTheme && item.themeScore < passTest
      )
    ) {
      alert(
        `Ви набрали ${passTest}%, це краще ніж в минулий раз. Так тримати!`
      );
      updateThemeScore_(
        localStorage.getItem("id") as string,
        currentTheme,
        passTest
      );
    }
  }, [availableThemes, currentTheme, passTest]);

  console.log(passTest, "passTest111111111");
  const toggleTest = (index: number) => {
    setQuizComponents((prevQuizComponents) =>
      prevQuizComponents.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            isOpen: !item.isOpen,
          };
        } else {
          return {
            ...item,
            isOpen: false,
          };
        }
      })
    );

    setCurrentTheme(quizComponents[index].testTheme);
  };

  return (
    <MainLayout>
      {quizComponents
        .filter((test) =>
          availableThemes.map((item) => item.themeName).includes(test.testTheme)
        )
        .map((test, index) => (
          <div key={test.testTheme}>
            <button onClick={() => toggleTest(index)}>{test.testTheme}</button>
            {test.isOpen && <test.testName />}
          </div>
        ))}

      <p>Current Theme: {currentTheme}</p>

      <Footter />
    </MainLayout>
  );
};

export default StatisticsPage;
