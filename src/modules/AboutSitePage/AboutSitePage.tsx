import Footter from "@/components/Navigation/MainNavigation/Footer";
import MainLayout from "@/layouts/MainLayout";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Link from "next/link";

const AboutSitePage = () => {
  return (
    <MainLayout>
      <About>
        <Container>
          <MainTitle>Ласкаво просимо до нашого сайту!</MainTitle>
          <Text>
            Щоб почати навчання кожен користувач має{" "}
            <StyledLink href="/autorization/login">авторизуватися </StyledLink>
            на сайті.
          </Text>
          <Text>
            Щоб авторизуватись натисніть на кнопку в навігації війти в аккаунт.
          </Text>
          <MainTitle>Ви вже вивчали мову JavaScript? </MainTitle>
          <Text>
            Пройдіть тест на головній сторінці та пропустіть вже знайомі теми.
          </Text>
          <Text>Майте на увазі. Тест можна пройти лише 1 раз.</Text>
          <Text>
            Не хвилютесь, теми, які ви пропустите зберігаються і ви завжди
            можете їх пройти на сторінці{" "}
            <StyledLink href="/themes">всі теми</StyledLink>
          </Text>
          <Text>Проходження тесту нає 4 рівні оцінювання.</Text>
          <Text>
            Тому кожен користувач пропусте індивідуальну кількість тем
          </Text>
          <MainTitle>Як проходить навчання?</MainTitle>
          <Text>
            Навчання на нашому представляє собой процес послідовного навчання.
          </Text>
          <Text>
            Вам поступово будуть відкриватися нові теми, за проходження минулих.
          </Text>
          <Text>
            Іноді прийдеться пройти тест, щоб перейти на слідуючу сторінку, що
            дозволить вам переконатися, що ви гарно вивчили тему.
          </Text>
          <Text>
            Всі пройдені вами тести зберігаються на сторінкі{" "}
            <StyledLink href="/themes">всі теми</StyledLink>
          </Text>
          <MainTitle>Якщо я хочу пройти тест знову?</MainTitle>
          <Text>
            Всі пройдені вами тести зберігаються на сторінкі{" "}
            <StyledLink href="/statistics">тести</StyledLink>
          </Text>
          <Text>Тут ви зможете знову пройти тести та закріпити знання</Text>
          <Text>
            На сторінці ви також зможете побачити графік пройдених тем
          </Text>
          <MainTitle>Де я можу побачити прогрес навчання?</MainTitle>
          <Text>
            В <StyledLink href="/profile">профілі</StyledLink> користувача ви
            зможете побачити всі ваші пройдені та майбутні теми
          </Text>
          <Text>Також ви побачите пряму вашого прогресу для зручності</Text>
          <MainTitle>Бажаємо вам успішного навчання!!!</MainTitle>
        </Container>
      </About>
      <Footter></Footter>
    </MainLayout>
  );
};

export default AboutSitePage;

const About = styled("div")({
  padding: "15px 0px 50px 0px",
  background: "#161616",
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
  margin: "15px 0px 15px 10px",
  color: "white",
});

const TextGreen = styled("div")({
  fontSize: "18px",
  margin: "15px 0px 15px 10px",

  color: "#98b1cc  ",
});

const Border = styled("div")({
  //width: "2px",
  height: "2px",
  background: "white",
});

const StyledLink = styled(Link)({
  color: "#52cc00",
});
