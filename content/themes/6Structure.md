---
MainTheme: "Структура коду"

PageThemes:
  [
    { name: "Інструкції", url: "instrukciyi" },
    { name: "Крапка з комою", url: "semicolon" },
    { name: "Коментарі", url: "code-comments" },
  ]

Test: "false"
---

<Column>
# Структура коду

Спочатку розглянемо “будівельні блоки” коду.
</Column>

<Column id="instrukciyi">
## Інструкції
Інструкції – це синтаксичні конструкції та команди, які виконують дії.

Ми вже бачили інструкцію alert('Привіт, світ!'), яка показує повідомлення “Привіт, світ!”.

Можна писати стільки інструкцій, скільки завгодно. Інструкції можна розділяти крапкою з комою.

Наприклад, тут ми розділити “Привіт, світ” на два виклики alert:

<Code>

1.  `alert('Привіт'); alert('Світ');`

</Code>

Зазвичай кожну інструкцію пишуть з нового рядка, щоби код було легше читати:

<Code>

1. ` alert('Привіт');`
2. `alert('Світ');`

</Code>

</Column>

<Column id="semicolon">
## Крапка з комою

Здебільшого крапку з комою можна пропустити, якщо є перенесення на новий рядок.

Такий код буде працювати:

<Code>

1. ` alert('Привіт')`
2. `alert('Світ')`

</Code>

У цьому разі JavaScript інтерпретує перенесення рядка як “неявну” крапку з комою. Це називається [автоматичне вставлення крапки з комою]("https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion").

### Переважно новий рядок означає крапку з комою. Але “переважно” не означає “завжди”!

У деяких випадках новий рядок не означає крапку з комою. Наприклад:

<Code>

1. `alert(3 +`
2. `1`
3. `+ 2);`

</Code>

Код виведе 6, тому що JavaScript не вставить тут крапку з комою. Інтуїтивно зрозуміло, що, якщо рядок закінчується плюсом "+", то це “незакінчений вираз”, тому крапка з комою не потрібна. І в цьому випадку все працює як задумано.

###Але є ситуації, коли JavaScript “забуває” вставити крапку з комою там, де це дійсно потрібно.

Помилки, які виникають у таких ситуаціях, досить важко виявити й виправити.

<Extra> 
### Приклад такої помилки
Якщо хочете побачити конкретний приклад такої помилки, зверніть увагу на цей код:

<Code>

1. `alert("Привіт");`
2.
3. `[1, 2].forEach(alert);`

</Code>

Поки що не задумуйтеся, що означають квадратні дужки [] і forEach. Ми вивчимо їх пізніше. Зараз просто запам’ятайте результат виконання коду: спочатку виведеться Привіт, далі 1, а потім 2.

А тепер видалимо крапку з комою після першого alert

<Code>

1. `alert("Привіт")`
2.
3. `[1, 2].forEach(alert);`

</Code>

Різниця з кодом вище лише в одному символі: крапка з комою, яку ми видалити в кінці першого рядка.

Якщо ми запустимо цей код, виведеться лише Привіт (а потім виникне помилка, яку можна побачити в консолі). Числа більше не виводяться.

Це тому що JavaScript не вставляє крапку з комою перед квадратними дужками [...]. Оскільки крапка з комою автоматично не вставиться, код у цьому прикладі виконається як одна інструкція.

Ось як рушій побачить її:

<Code>

1. `alert("Привіт")[1, 2].forEach(alert);`

</Code>

Виглядає дивно, чи не так? У цьому випадку таке об’єднання неправильне. Щоби код правильно працював, нам потрібно поставити крапку з комою після `alert`.

Це може статися в інших випадках.

</Extra>

Ми рекомендуємо ставити крапку з комою між інструкціями, навіть якщо вони розділені новими рядками. Це правило широко використовується в спільноті розробників. Варто повторити ще раз – здебільшого можна пропускати крапки з комою. Але безпечніше – особливо для новачка – використовувати їх.

</Column>

<Column id="code-comments">
## Коментарі

З часом програми стають все складнішими та складнішими. Виникає потреба додавати коментарі, які будуть описувати що робить код і чому.

Коментарі можна писати в будь-якому місці скрипту. Вони не впливають на його виконання, тому що рушій просто ігнорує коментарі.

### Однорядкові коментарі починаються з подвійної косої риски `//`.

Частина рядка після `//` вважається коментарем. Такий коментар може займати весь рядок, або міститися після інструкції.

Ось так:

<Code>

1. `// Цей коментар займає весь рядок`
2. `alert('Привіт');`
3.
4. `alert('Світ'); // Цей коментар міститься після інструкції`

</Code>

Вміст коментаря ігнорується, тому, якщо ми напишемо всередині `/_ … _/` код, він не виконається.

Деколи виникає необхідність тимчасово вимкнути частину коду:

<Code>

1. `/* Закоментований код`
2. `alert('Привіт');`
3. `*/`
4. `alert('Світ');`

</Code>

</Column>

<Extra>
### Використовуйте комбінації клавіш!

У більшості редакторів рядок коду можна закоментувати, натиснувши комбінацію клавіш `Ctrl+/`, а щоби закоментувати декілька рядків – виділіть потрібні рядки та натисніть комбінацію клавіш `Ctrl+Shift+/`. У macOS потрібно натискати клавішу `Cmd` замість `Ctrl` і клавішу `Option` замість `Shift`.
</Extra>

<Extra>
### Вкладені коментарі не підтримуються!

<Code>

1. `/*`
2. ` /* вкладений коментар ?!? */`
3. `*/`
4. `alert( 'Світ' );`

</Code>

</Extra>

<Column>

Будь ласка, не вагайтесь коментувати ваш код.

Коментарі збільшують розмір коду, але це не проблема. Є багато інструментів, які мініфікують код перед публікацією на робочий сервер. Вони видалять коментарі, тому їх не буде в робочих скриптах. Отже, коментарі жодним чином не впливають на робочий код.

Пізніше в посібнику буде розділ Якість коду, який пояснить, як краще писати коментарі.

</Column>
