import React from "react";
import createQuiz from "./createQuize";

const questionsData = [
  {
    question: "Для чого призначений тег <script> в HTML?",
    options: [
      "Для определения стилей элементов",
      "Для вставки JavaScript кода",
      "Для создания таблиц",
      "Для создания списков",
    ],
    answer: 1,
  },
  {
    question:
      "Як можна підключити зовнішній JavaScript файл до HTML документа?",
    options: [
      '<script src="script.js"></script>',
      '<javascript src="script.js"></javascript>',
      '<link rel="script" href="script.js">',
      '<script href="script.js"></script>',
    ],
    answer: 0,
  },
  {
    question: "Як можна визначити коментар у JavaScript коді?",
    options: [
      "// Це коментар",
      "/* Це коментар */",
      "<!-- Це коментар -->",
      "** Це коментар **",
    ],
    answer: 0,
  },
  {
    question:
      "Яка функція використовується для виведення повідомлення в браузері?",
    options: ["console.log()", "alert()", "prompt()", "confirm()"],
    answer: 1,
  },
  {
    question: "Яка із наведених опцій є правильним використанням тега <h1>?",
    options: [
      "<h1>Це заголовок</h1>",
      "<h1><div>Це заголовок</div></h1>",
      "<div><h1>Це заголовок</h1></div>",
      "<p><h1>Це заголовок</h1></p>",
    ],
    answer: 0,
  },
];

const Quiz_ = createQuiz(questionsData);

export function Quize1() {
  return (
    <div>
      <Quiz_ />
    </div>
  );
}

const questionsData2 = [
  {
    question:
      "Які синтаксичні конструкції і команди виконують дії в JavaScript?",
    options: ["Інструкції", "Коментарі", "Крапки з комою", "Директиви"],
    answer: 0,
  },
  {
    question: "Як розділяти інструкції в JavaScript?",
    options: ["Крапкою", "Комою", "Двокрапкою", "Косою рискою"],
    answer: 0,
  },
  {
    question: "Як можна викликати багато інструкцій в JavaScript?",
    options: [
      "Розділяючи їх комою",
      "Розділяючи їх крапкою",
      "Розділяючи їх двокрапкою",
      "Розділяючи їх косою рискою",
    ],
    answer: 0,
  },
  {
    question: "Як можна пропустити крапку з комою в JavaScript?",
    options: [
      "Завжди потрібно ставити крапку з комою",
      "Завжди можна пропустити крапку з комою",
      "Можна пропустити крапку з комою, якщо є перенесення на новий рядок",
      "Можна пропустити крапку з комою, якщо є коментарі",
    ],
    answer: 2,
  },
  {
    question: 'Чи може JavaScript "забути" вставити крапку з комою?',
    options: [
      "Так, завжди",
      "Так, у деяких випадках",
      "Ні, ніколи",
      "Тільки в зовсім складних програмах",
    ],
    answer: 1,
  },
  {
    question: "Як можна додати коментар в JavaScript?",
    options: [
      "// Це коментар",
      "/* Це коментар */",
      "<!-- Це коментар -->",
      "** Це коментар **",
    ],
    answer: 0,
  },
  {
    question: "Які коментарі в JavaScript не впливають на виконання коду?",
    options: [
      "Однорядкові коментарі, починаючи з //",
      "Багаторядкові коментарі, починаючи з /* і закінчуючи */",
      "Всі коментарі впливають на виконання коду",
      "Коментарі не можуть бути використані в JavaScript",
    ],
    answer: 0,
  },
];

const Quiz2_ = createQuiz(questionsData);

export function Quize2() {
  return (
    <div className="App">
      <Quiz2_ />
    </div>
  );
}
