import MainLayout from "@/layouts/MainLayout";
import styled from "@emotion/styled";
import React, { FC, useEffect, useState } from "react";
import Footter from "@/components/Navigation/MainNavigation/Footer";
import { ITheme } from "@/types/themes";
import { updateThemeScore_ } from "@/actions/user";
import { Quize1, Quize2 } from "@/components/Quiz/quize";
import { useAppSelector } from "@/hooks/redux";
import { Button, Collapse, Tooltip } from "@mui/material";
import ChartComponent from "@/components/Charts/Charts";

interface StatisticsPageProps {
  themes: ITheme[];
}

const StatisticsPage: FC<StatisticsPageProps> = ({ themes }) => {
  const { isAuth } = useAppSelector((state) => state.UserReducer);

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

  useEffect(() => {
    setQuizComponents((prevQuizComponents) =>
      prevQuizComponents.map((item) => {
        const isOpen = item.testTheme === currentTheme && item.isOpen;
        return {
          ...item,
          isOpen,
        };
      })
    );
  }, [currentTheme]);

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

  const tests = quizComponents
    .filter((test) =>
      availableThemes.map((item) => item.themeName).includes(test.testTheme)
    )
    .map((test) => {
      const theme = availableThemes.find(
        (item) => item.themeName === test.testTheme
      );
      const score = theme ? theme.themeScore : 0;
      const name = theme ? theme.themeName : "";

      return {
        ...test,
        name,
        score,
      };
    });
  return (
    <MainLayout>
      <StatisticsPageWrapper>
        <Container>
          {isAuth ? (
            <>
              <TestDigramWrapper>
                <div>
                  <MainTitle>
                    Це сторінка з тестами, які ви вже проходили
                  </MainTitle>
                  <Text>
                    Тут ви зможете перевірити свої знання знову або покращити
                    свій результат.
                  </Text>
                  <Text>
                    Щоб почати тест просто натисніть на кнопку з потрібною вам
                    темою.
                  </Text>
                  <Text>
                    З права розташована статистика ваших оцінок за тести в
                    вигляді діаграми з назвою теми та оцінкою.
                  </Text>
                  <Text>
                    Якщо ви зможете набрати більше балів, ніж було, ви отримаєте
                    привітання та повідомлення!
                  </Text>
                </div>
                {tests.length > 0 && (
                  <div>
                    {" "}
                    <MainTitle
                      style={{
                        textAlign: "center",
                        margin: "0px 0px 10px 0px",
                      }}
                    >
                      Ваша статистика
                    </MainTitle>
                    <ChartComponent tests={tests as any} />
                  </div>
                )}
              </TestDigramWrapper>
              <TestsWrapper>
                <MainTitle>Доступні тести:</MainTitle>
                {/* <ChartComponent /> */}
                {quizComponents
                  .filter((test) =>
                    availableThemes
                      .map((item) => item.themeName)
                      .includes(test.testTheme)
                  )
                  .map((test, index) => (
                    <div key={test.testTheme}>
                      <Tooltip
                        title={`Ви набрали ${
                          availableThemes.find(
                            (item) => item.themeName === test.testTheme
                          )?.themeScore
                        }%`}
                      >
                        <StyledButton onClick={() => toggleTest(index)}>
                          {test.testTheme}
                        </StyledButton>
                      </Tooltip>

                      <Collapse in={test.isOpen}>
                        <test.testName />
                      </Collapse>
                    </div>
                  ))}
              </TestsWrapper>
            </>
          ) : (
            <MainTitle>Зареєструйтесь для доступу </MainTitle>
          )}
        </Container>
      </StatisticsPageWrapper>

      <Footter />
    </MainLayout>
  );
};

export default StatisticsPage;
const TestDigramWrapper = styled("div")({
  display: "flex",
});
const StatisticsPageWrapper = styled("div")({
  background: "#161616",
  minHeight: "800px",
});

const Container = styled("div")({
  maxWidth: "1200px",
  margin: "0 auto",
});

const MainTitle = styled("div")({
  color: "#ef6817",
  fontSize: "25px",
  fontWeight: "bold",
  padding: "25px 0px 5px 0px",
});

const Text = styled("div")({
  fontSize: "18px",
  margin: "0px 0px 25px 10px",
  color: "white",
});

const TestsWrapper = styled("div")({
  fontSize: "18px",
  color: "white",
  maxWidth: "800px",
});

const StyledButton = styled(Button)({
  fontSize: "11px",
  color: "#52cc00",
  fontWeight: "bold",
  margin: "10px 0px 0px 10px",
});
