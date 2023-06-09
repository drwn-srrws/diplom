---
MainTheme: "Інструменти розробника"

PageThemes:
  [
    { name: "Google Chrome", url: "GoogleChrome" },
    { name: "Firefox, Edge та інші", url: "Firefox" },
    { name: "Safari", url: "Safari" },
    { name: "Підсумки", url: "Results" },
    { name: "Мови над JavaScript", url: "LanguagesAboveJavaScript" },
    { name: "Висновок", url: "Results" },
  ]

Test: "true"
---

<Column>
# Інструменти розробника

Будь-який код схильний до помилок. Швидше за все, ви будете робити помилки… Хоча, про що я говорю? Ви точно будете робити помилки, принаймні, якщо ви людина, а не робот.

Зазвичай, користувачі не бачать помилок у браузері. Тому, якщо в скрипті трапиться щось хибне, ми не побачимо помилки і не зможемо її виправити.

Щоб побачити помилки і отримати додаткову інформацію про виконання скриптів, було створено і вбудовано в браузери “інструменти розробника”.

`Більшість` розробників надають перевагу Chrome чи Firefox, тому що ці браузери мають найкращі інструменти розробника. Інші браузери теж мають інструменти розробника, деколи навіть зі спеціальними функціями, проте вони не такі популярні, як Chrome чи Firefox. Тому більшість розробників мають “улюблений” браузер і переключаються на інші, якщо проблема специфічна для браузера.

Інструменти розробника потужні; вони мають багато функцій. Для початку, ми вивчимо, як їх відкрити, як переглядати помилки і як виконувати команди JavaScript.
</Column>

<Column id ="GoogleChrome">
## Google Chrome

Для прикладів ми будемо використовувати браузер Google Chrome. Інструменти розробника в ньому показуються лише англійською мовою, незалежно від налаштувань браузера.

Відкрийте сторінку bug.html. На ній є помилка в коді JavaScript. Вона прихована для звичайних користувачів, тому потрібно відкрити інструменти розробника, щоб її побачити.

Натисніть клавішу F12 або, якщо у вас Mac, комбінацію клавіш Cmd+Opt+J.

Інструменти розробника типово відкриваються на вкладці “Console” (консоль).

Ось так відображається помилка в консолі:

![console error](https://kept.com.ua/image/4HA7/4_1.png "console error")

Точний вигляд інструментів розробника може відрізнятися в залежності від вашої версії Chrome. Вони міняються час від часу, але в основному це вікно повинно бути схожим.

Тепер ми бачимо помилки, цього достатньо, щоб почати. Ми пізніше повернемося до інструментів розробника, щоб розглянути налагодження коду у розділі Налагодження в браузері.

</Column>

<Extra>
### Введення декількох рядків

Зазвичай, коли ми вводимо один рядок коду в консоль і натискаємо Enter, він виконується.

Щоб ввести декілька рядків коду, натисніть Shift+Enter. Таким чином можна вводити і виконувати довгі фрагменти JavaScript коду.

</Extra>

<Column id ="Firefox">
## Firefox, Edge та інші

Більшість браузерів використовують клавішу F12, щоб відкрити консоль розробника.

Їх вигляд зазвичай схожий. Якщо ви навчитеся використовувати однин з них (можете почати з Chrome), ви зможете легко переключитися на інший браузер.
</Column>

<Column id="Safari">
## Safari

Safari (стандартний браузер у macOS, не підтримується Windows/Linux) має свої нюанси. Спочатку нам потрібно увімкнути меню “Розробка”.

Відкрийте Параметри і перейдіть на панель “Експертні”. Знизу буде галочка, яку необхідно вибрати.

Тепер комбінація клавіш Cmd+Opt+C може переключати консоль. Також зауважте, що з’явився новий пункт “Розробка” у верхньому меню. Це меню має багато команд та опцій.

</Column>

<Column id ="Results">
## Підсумки

- Інструменти розробника дозволяють нам переглядати помилки, виконувати команди, досліджувати змінні та багато іншого.
- Їх можна відкрити клавішою F12 для більшості браузерів в Windows. В Chrome для Mac потрібно натиснути комбінацію клавіш Cmd+Opt+J, в Safari: Cmd+Opt+C (але спочатку інструменти потрібно увімкнути).

Тепер у нас є готове середовище. В наступному розділі ми приступимо до самого JavaScript.

</Column>
