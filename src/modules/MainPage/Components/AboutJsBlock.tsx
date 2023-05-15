import styled from "@emotion/styled";
import { Button } from "@mui/material";

export default function AboutJsBlock() {
  return (
    <>
      <AboutWrapper>
        <Container>
          <AboutJsTitle>Що таке JavaScript?</AboutJsTitle>
          <AboutJsText>
            JavaScript — мова програмування для створення інтерактивних
            Web-сторінок. Далі Ви ознайомитеся, що і як можна зробити з
            допомогою цієї мови.
          </AboutJsText>

          <AboutJsTitle>JavaScript — це не Java!</AboutJsTitle>
          <AboutJsText>
            Дехто може подумати, що JavaScript — це те саме, що й Java, бо ці
            мови мають схожі назви. Насправді це не так. На початку знайомства з
            мовою недоречно подавати усі відмінності між цією мовою та іншою.
            Достатньо запамятати таке. Java — це обєктно-орієнтована мова
            програмування, коди якої перед запуском програми опрацьовує
            компілятор. Створені з допомогою Java програми працюють як завершені
            додатки або як вбудовані у Web-сторінку аплети. Незважаючи на таку
            вбудованість, їх зберігають на ПК-клієнті як окремі файли. На
            відміну від цього код JavaScript розташовують всередині HTML
            сторінки. Він не може діяти як окрема програма, а працює запущеним у
            проглядачах Internet Explorer, Netscape Navigator, Google Chrome,
            Mozilla FireFox тощо
          </AboutJsText>

          <AboutJsTitle>Використання JavaScript</AboutJsTitle>
          <AboutJsText>
            Що потрібно, щоб використовувати скрипти, написані мовою JavaScript?
            Вам потрібен браузер, спроможний працювати з JavaScript. Наприклад,
            сучасні версії перелічених вище проглядачів. Перед знайомством з
            мовою JavaScript потрібно познайомитися з основами іншої мови —
            HTML.
          </AboutJsText>
          <AboutJsTitle>
            Чи варто обрати JavaScript програмування, як першу мову?
          </AboutJsTitle>
          <AboutJsText>
            Навчання основам JavaScript — це основа бази знань майбутнього
            програміста. Ця мова дуже проста, та допомагає зрозуміти, як працює
            код. Тому вивчати її рекомендують у першу чергу дітям. У майбутньому
            це допоможе програмісту початківцю легше вивчити інші популярні
            мови. За допомогою js можна створити любий сценарій для сайту,
            розробити калькулятор, запросити данні користувача, передати
            інформацію на сервер, та багато чого іншого. За рахунок певної
            обмеженості, мова дуже легко засвоюється. Вивчення JavaScript
            програмування має сенс ще й тому, що спеціалістам у цій галузі легко
            знайти роботу. Навіть декількох уроків буде достатньо, щоб мати
            змогу виконувати прості замовлення. Якщо отримати повноцінну освіту,
            то проблем з працевлаштуванням взагалі не буде.
          </AboutJsText>
        </Container>
      </AboutWrapper>
    </>
  );
}

const AboutWrapper = styled("div")({
  background: "#1B1B1B",
  color: "white",
});

const AboutJsTitle = styled("div")({
  margin: "40px 0px 0px 0px",
  fontSize: "25px",
});
const AboutJsText = styled("div")({
  display: "flex",
  fontSize: "18px",
  margin: "15px 0px 10px 10px",
});

const Container = styled("div")({
  padding: "15px 0px 0px 0px",
  maxWidth: "1200px",
  margin: "0 auto",
});

const StyledButton = styled(Button)({
  width: "180px",
  background: "#343434",
  color: "white",
  marginRight: "20px",
});
