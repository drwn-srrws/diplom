import { Button, styled } from "@mui/material";
import React, { FC, useState } from "react";
import { ITheme } from "@/types/themes";
import MainLayout from "@/layouts/MainLayout";
import Footter from "@/components/Navigation/MainNavigation/Footer";
import { ContactForm } from "./components/Form";

const TestBasicPage: FC = ({}) => {
  const questions = [
    {
      questionText: "Де вірно вказаний запуск вспливаючого вікна?",
      answerOptions: [
        {
          answerText: 'info ("Hi")',
          isCorrect: false,
        },
        {
          answerText: 'new alert ("Hi")',
          isCorrect: false,
        },
        {
          answerText: "нема вірних відповідей",
          isCorrect: false,
        },
        {
          answerText: `alert ("Hi")`,
          isCorrect: true,
        },
      ],
    },
    {
      questionText: `"Что будет записано в переменную test?
var a = 5;
var test = 5 != a ? "Yes" : "No";"`,
      answerOptions: [
        {
          answerText: "No",
          isCorrect: true,
        },
        {
          answerText: "Yes",
          isCorrect: false,
        },
        {
          answerText: "5",
          isCorrect: false,
        },
        {
          answerText: "a",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Что такое условный оператор?",
      answerOptions: [
        {
          answerText: "Оператор сравнения значений",
          isCorrect: true,
        },
        {
          answerText: "Конструкция для создания определенной переменной",
          isCorrect: false,
        },
        {
          answerText: "Конструкция, что выполняет код несколько раз",
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else setShowScore(true);
  };
  return (
    <Wrapper>
      {!showContactForm ? (
        showScore ? (
          <SectionScore>
            <div>
              Правильних відповідей {score} із {questions.length}
            </div>
            <StyledButton
              onClick={() => {
                setShowContactForm(true);
              }}
            >
              Відправити на почту
            </StyledButton>
            <StyledButton href="/"> Повернутися</StyledButton>
          </SectionScore>
        ) : (
          <Quizz>
            <QuestionSection>
              <QuestionCount>
                <span> Питання {currentQuestion + 1}</span>/{questions.length}
              </QuestionCount>
              <QuestionText>
                {questions[currentQuestion].questionText}
              </QuestionText>
            </QuestionSection>
            <AnswerSection>
              {questions[currentQuestion].answerOptions.map((item) => (
                <StyledButton
                  key={item.answerText}
                  onClick={() => handleAnswerOptionClick(item.isCorrect)}
                >
                  {item.answerText}
                </StyledButton>
              ))}
            </AnswerSection>
          </Quizz>
        )
      ) : (
        <ContactForm score={score} />
      )}
    </Wrapper>
    // <MainLayout>
    //   <Footter />
    // </MainLayout>
  );
};

const Wrapper = styled("div")({
  background: "#252d4a",
  width: "450px",
  minHeight: "200px",
  borderRadius: "15px",
  padding: "20px",
  display: "flex",
  boxShadow: "10px 10px 42px px rgba(0,0,0,0.75)",
});

const Quizz = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});
const QuestionSection = styled("div")({
  flex: "0 0 50%",
});
const QuestionCount = styled("div")({
  marginBottom: "20px",
  "& span": {
    fontSize: "28px",
  },
});

const QuestionText = styled("div")({
  marginBottom: "15px",
});

const AnswerSection = styled("div")({
  width: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
const StyledButton = styled(Button)({
  width: "100%",
  fontSize: "13px",
  color: "#fff",
  backgroundColor: "#252d4a",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
  padding: "5px",
  cursor: "pointer",
  border: "2px solid #234668",
  margin: "5px 0px",
  outline: "none",
  "& hower": {
    background: "#234648",
    transition: "all 03 ease",
  },
});
const SectionScore = styled("div")({});
export default TestBasicPage;
