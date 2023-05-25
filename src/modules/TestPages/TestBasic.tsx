import { Button, Link, styled } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { ITheme } from "@/types/themes";
import MainLayout from "@/layouts/MainLayout";
import Footter from "@/components/Navigation/MainNavigation/Footer";
import { ContactForm } from "./components/Form";
import { Login_, addAccessThemes_, addStartTest_ } from "@/actions/user";
import { useAppSelector } from "@/hooks/redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

export const TestWhatJs: FC = ({}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    Login_(
      localStorage.getItem("email") as string,
      localStorage.getItem("password") as string,
      dispatch,
      router
    );
  }, []);
  const questions = [
    {
      questionText: "Які можливості надають скрипти JavaScript?",
      answerOptions: [
        {
          answerText: "Прямий доступ до ОС",
          isCorrect: false,
        },
        {
          answerText:
            "Обробка подій користувача, таких як кліки та натискання клавіш.",
          isCorrect: true,
        },
        {
          answerText:
            "Кроссдоменні запити, та доступ до сторінок на іншому домені",
          isCorrect: false,
        },
        {
          answerText: `Керування мережевим обладнанням.`,
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Де може виконуватися JavaScript, крім браузера?",
      answerOptions: [
        {
          answerText: "Тільки в браузерах на різних платформах.",
          isCorrect: false,
        },
        {
          answerText: "Тільки на сервері за допомогою рушія Node.js.",
          isCorrect: false,
        },
        {
          answerText: "Як на браузерах, так і на серверах та інших пристроях.",
          isCorrect: true,
        },
        {
          answerText: `Тільки на мобільних пристроях з операційною системою Android.`,
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Як працюють рушії JavaScript?",
      answerOptions: [
        {
          answerText:
            "Компіляція в байткод та виконання на віртуальній машині.",
          isCorrect: false,
        },
        {
          answerText: "Інтерпретація виконуваного коду рядок за рядком.",
          isCorrect: false,
        },
        {
          answerText:
            "Перетворення в оптимізований машинний код для виконання.",
          isCorrect: true,
        },
        {
          answerText: `Розподіл виконуваного коду на потоки для паралельного виконання.`,
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Які можливості надає вбудований JavaScript у браузері?",
      answerOptions: [
        {
          answerText: "Запуск додатків.",
          isCorrect: false,
        },
        {
          answerText: "Редагування системних файлів і налаштувань браузера.",
          isCorrect: false,
        },
        {
          answerText: "Керування комунікацією з сервером через AJAX-запити.",
          isCorrect: false,
        },
        {
          answerText: `Маніпулювання елементами сторінки, зміна стилів та анімація.`,
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Які обмеження має JavaScript у браузері з метою безпеки?",
      answerOptions: [
        {
          answerText: "Обмежена можливість зміни сторінок інших веб-сайтів.",
          isCorrect: true,
        },
        {
          answerText:
            "Валідація та перевірка даних у формах перед надсиланням.",
          isCorrect: false,
        },
        {
          answerText:
            "Маніпулювання елементами сторінки (створення, видалення, зміна).",
          isCorrect: false,
        },
        {
          answerText: `Взаємодія з браузерними API, такими як робота з кукі, локальне сховище.`,
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Як можна включити JavaScript на веб-сторінці?",
      answerOptions: [
        {
          answerText:
            "За допомогою тегу <script> з вбудованим кодом JavaScript всередині.",
          isCorrect: true,
        },
        {
          answerText: "За допомогою команд розширення браузера.",
          isCorrect: false,
        },
        {
          answerText: " За допомогою вбудованих розширень браузера.",
          isCorrect: false,
        },
        {
          answerText: `За допомогою налаштувань безпеки браузера.`,
          isCorrect: false,
        },
      ],
    },
    {
      questionText: 'Що таке "інструменти розробника" у браузері?',
      answerOptions: [
        {
          answerText: "Програмне забезпечення для розробки браузерів",
          isCorrect: false,
        },
        {
          answerText: "Набір інструментів для створення веб-сторінок",
          isCorrect: false,
        },
        {
          answerText:
            "Вбудовані інструменти для виявлення і виправлення помилок в коді",
          isCorrect: true,
        },
        {
          answerText: `Пристрої для розробки фізичного апаратного забезпечення`,
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Як можна відкрити інструменти розробника в браузері Google Chrome?",
      answerOptions: [
        {
          answerText: "Натиснути клавішу F12 або комбінацію клавіш Cmd+Opt+J",
          isCorrect: true,
        },
        {
          answerText: `Клацнути правою кнопкою миші на сторінці і вибрати "Відкрити інструменти розробника"`,
          isCorrect: false,
        },
        {
          answerText: `Виконати команду "Open Developer Tools" у меню браузера`,
          isCorrect: false,
        },
        {
          answerText: `Встановити окремий додаток для розробника з Chrome Web Store`,
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Яку помилку ви побачите у консолі, якщо у вихідному коді є посилання на неіснуючу функцію?",
      answerOptions: [
        {
          answerText: "Uncaught TypeError: myFunction is not a function",
          isCorrect: false,
        },
        {
          answerText: `Uncaught SyntaxError: Unexpected identifier`,
          isCorrect: false,
        },
        {
          answerText: `Uncaught ReferenceError: myFunction is not defined`,
          isCorrect: true,
        },
        {
          answerText: `Uncaught Error: Function myFunction is undefined`,
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const calculatePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };
  const { isCompleted } = useAppSelector(
    (state) => state.UserReducer.currentUser.startTest
  );
  const themeForAdd = [
    {
      themeName: "Вступ",
      themeUrl: "1Introduction",
      themeTest: true,
      themeScore: 0,
      nextPage: true,
    },
    {
      themeName: "Specifications",
      themeUrl: "2specifications",
      themeTest: true,
      themeScore: 0,
      nextPage: true,
    },
    {
      themeName: "Редактори коду",
      themeUrl: "3code-editors",
      themeTest: true,
      themeScore: 0,
      nextPage: true,
    },
    {
      themeName: "Інструменти розробника",
      themeUrl: "4devtools",
      themeTest: true,
      themeScore: 0,
      nextPage: true,
    },
    {
      themeName: "Основи JavaScript",
      themeUrl: "5Fundamentals",
      themeTest: true,
      themeScore: 100,
      nextPage: true,
    },
    {
      themeName: "Структура коду",
      themeUrl: "6Structure",
      themeTest: true,
      themeScore: 100,
      nextPage: true,
    },
    {
      themeName: "Сучасний режим, use strict",
      themeUrl: "7Strict-mode",
      themeTest: true,
      themeScore: 0,
      nextPage: true,
    },
    {
      themeName: "Змінні",
      themeUrl: "8Variables-mode",
      themeTest: true,
      themeScore: 0,
      nextPage: true,
    },

    {
      themeName: "Типи даних",
      themeUrl: "9Types",
      themeTest: true,
      themeScore: 0,
      nextPage: true,
    },
    {
      themeName: "Взаємодія: alert, prompt, confirm",
      themeUrl: "_10Alert",
      themeTest: true,
      themeScore: 0,
      nextPage: true,
    },
    {
      themeName: "Перетворення типу",
      themeUrl: "_11Type-conversions",
      themeTest: true,
      themeScore: 0,
      nextPage: true,
    },
  ];

  const renderResultMessage = () => {
    const percentage = calculatePercentage();

    if (percentage >= 99) {
      addStartTest_(localStorage.getItem("id") as string, {
        score: percentage,
        isCompleted: true,
      });
      addAccessThemes_(localStorage.getItem("id") as string, themeForAdd);
      <div>
        Вітаємо! Ви набрали {percentage}% вірних відповідей. Ви добре володієте
        базовими знаннями з javascript, тому тема Вступ та початок теми Основи
        JavaScript, які тепер доступні для вас. Ви можете починати навчання з
        теми <Link href="/themes/_11Type-conversions">Перетворення типів</Link>,
        але не хвилюйтеся, якщо ви зрозумієте, що вам не хватає знань або стане
        цікаво, ви завжди зможете повернутися.
      </div>;
    } else if (percentage >= 80) {
      addStartTest_(localStorage.getItem("id") as string, {
        score: percentage,
        isCompleted: true,
      });
      addAccessThemes_(
        localStorage.getItem("id") as string,
        themeForAdd.slice(0, 7)
      );
      return (
        <div>
          Вітаємо! Ви набрали {percentage}% вірних відповідей. Ви добре
          володієте базовими знаннями з javascript, тому тема Вступ та початок
          теми Основи JavaScript, які тепер доступні для вас. Ви можете починати
          навчання з теми <Link href="/themes/8Variables">Змінні</Link>, але не
          хвилюйтеся, якщо ви зрозумієте, що вам не хватає знань або стане
          цікаво, ви завжди зможете повернутися.
        </div>
      );
    } else if (percentage >= 60) {
      addStartTest_(localStorage.getItem("id") as string, {
        score: percentage,
        isCompleted: true,
      });
      addAccessThemes_(
        localStorage.getItem("id") as string,
        themeForAdd.slice(0, 5)
      );
      return (
        <div>
          Ви набрали {percentage}% вірних відповідей. Ви трохи володієте
          javascript, тому можете пропустити Вступ, який тепер став доступний
          для вас. Все ж таки ми рекомендуємо вам не поспішати та пройти теми
          вступу, але не хвилюйтеся, якщо ви зрозумієте, що вам не хватає знань
          або стане цікаво, ви завжди зможете повернутися.
        </div>
      );
    } else {
      addStartTest_(localStorage.getItem("id") as string, {
        score: percentage,
        isCompleted: true,
      });
      return (
        <div>
          Ви набрали {percentage}% вірних відповідей. Напевно, тільки почали
          вчити javascript. Вам непотрібно сумувати, ви тільки починаєте
          навчання, зараз лише від вас залежить, зможете ви покращити результат
          в майбутньому чи ні. Приступайте до навчання.
        </div>
      );
    }
  };
  console.log(isCompleted, "isCompleted");
  return (
    <Wrapper>
      {isCompleted ? (
        <>
          <div>Ви вже пройшли тест</div>
          <StyledButton href="/themes"> Переглянути доступні теми</StyledButton>
          <StyledButton href="/"> Повернутися</StyledButton>
        </>
      ) : showScore ? (
        <SectionScore>
          {renderResultMessage()}
          <StyledButton href="/themes"> Переглянути доступні теми</StyledButton>
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
      )}
    </Wrapper>
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
