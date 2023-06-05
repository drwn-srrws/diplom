import { useAppSelector } from "@/hooks/redux";
import { passTestScore } from "@/store/reducers/userReducer";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function createQuiz(questionsData: any) {
  return function Quiz() {
    const [questions, setQuestions] = useState(questionsData);
    const { passTest } = useAppSelector((state) => state.UserReducer);
    const dispatch = useDispatch();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const calculatePercentage = () => {
      return (score / questions.length) * 100;
    };

    const Testscore = calculatePercentage() > 60;
    const percentage = calculatePercentage();
    const handleAnswer = (answerIndex: any) => {
      if (answerIndex === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
        setIsCompleted(true);
      }
    };
    isCompleted && dispatch(passTestScore(calculatePercentage()));
    console.log(passTest);
    const restartQuiz = () => {
      setScore(0);
      setCurrentQuestion(0);
      setShowScore(false);
      setIsCompleted(false);
    };

    return (
      <QuizeWrapper>
        {showScore ? (
          <TextWrapper>
            <StyledTitle>Результат</StyledTitle>
            <p>
              Вы набрали {score} из {questions.length} балів!
            </p>
            <p>Відсоток вірних відповідей: {percentage}%</p>
            {Testscore && <p>Тест пройдено успішно</p>}
            <StyledButton onClick={restartQuiz}>Пройти ще раз</StyledButton>
          </TextWrapper>
        ) : (
          <TextWrapper>
            <StyledTitle>Питання {currentQuestion + 1}</StyledTitle>
            <StyledH3>{questions[currentQuestion].question}</StyledH3>
            <ul>
              {questions[currentQuestion].options.map(
                (option: any, index: any) => (
                  <li key={index}>
                    <StyledButton
                      size="small"
                      onClick={() => handleAnswer(index)}
                    >
                      {option}
                    </StyledButton>
                  </li>
                )
              )}
            </ul>
          </TextWrapper>
        )}
      </QuizeWrapper>
    );
  };
}

export default createQuiz;

const QuizeWrapper = styled("div")({
  border: "1px solid #ef6817",
  background: "#161616",
  color: "white",
  boxSizing: "border-box",
  padding: "20px",
  margin: "20px 0px",
  maxWidth: "800px",
  width: "800px",

  "& ul, & ol": {
    listStyleType: "none",
    margin: "10px 0px",
  },
});

const StyledTitle = styled("h2")({
  //display: "flex",
  color: "#BEDEFF",
  margin: "0px 0px 15px 0px",
});
const StyledH3 = styled("h3")({
  //display: "flex",

  color: "#ef6817",
  margin: "0px 0px 0px 15px",
});
const StyledButton = styled(Button)({
  fontSize: "12px",
  margin: "10px 0px 0px 40px",
  color: "#BEDEFF",
  transition: "transform 0.3s",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const TextWrapper = styled("div")({});
