import { Login_ } from "@/actions/user";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { ITheme } from "@/types/themes";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

interface ThemePageProps {
  themes: ITheme[];
}
export const AboutLearning: FC<ThemePageProps> = ({ themes }) => {
  const { isAuth, currentUser } = useAppSelector((state) => state.UserReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const UserThemes = currentUser.availableThemes.map((item) => item.themeUrl);

  const countUserThemes = currentUser.availableThemes.length;

  const lastTheme =
    countUserThemes > 2
      ? `/themes/${UserThemes[countUserThemes - 1]}`
      : "/themes/1Introduction";
  useEffect(() => {
    Login_(
      localStorage.getItem("email") as string,
      localStorage.getItem("password") as string,
      dispatch,
      router
    );
  }, [dispatch]);

  return (
    <>
      <About>
        <Container>
          <MainTitle>
            Ласкаво просимо до нашого сайту, присвяченого підручнику JavaScript!
          </MainTitle>
          <Text>
            Наш ресурс пропонує вам всебічний і зрозумілий посібник з вивчення
            JavaScript, однієї з найпопулярніших мов програмування у світі
            веб-розробки. Якщо ви новачок у програмуванні або вже маєте певний
            досвід, наш підручник допоможе вам поглибити свої знання та навички
            у JavaScript.
          </Text>
          <MainTitle>У чому особливість нашого підручника?</MainTitle>
          <Text>
            Поступове введення: Ми починаємо з основних концепцій та принципів
            JavaScript, а потім поступово просуваємося до більш складних тем. Це
            дозволяє новачкам комфортно освоювати мову та не відчувати
            навантаження інформацією.
          </Text>
          <Text>
            Інтерактивні приклади: Ми пропонуємо інтерактивні приклади коду, які
            допоможуть вам краще зрозуміти принципи та застосування JavaScript.
            Ви зможете практикуватися прямо на нашому сайті та спостерігати
            результати свого коду.
          </Text>
          <MainTitle>Як проходить навчання?</MainTitle>
          <Text>
            Навчання на нашому представляє собой процес послідовного навчання.
            Вам поступово будуть відкриватися нові теми, за проходження минулих.
            Іноді прийдеться пройти тест, щоб перейти на слідуючу сторінку, що
            дозволить вам переконатися, що ви гарно вивчили тему.
          </Text>
        </Container>
      </About>
      <Learn>
        <Container>
          <LearnBanner>
            <LearnWrapper>
              {isAuth ? (
                countUserThemes > 1 ? (
                  <>
                    <MainTitleBlack>
                      Ви можете продовжити навчання натиснув на кнопку нижче
                    </MainTitleBlack>
                    <StyledButton variant="outlined" href={lastTheme}>
                      Продовжити навчання
                    </StyledButton>
                  </>
                ) : (
                  <>
                    <MainTitleBlack>
                      Вперше на сайті? Почніть навчання натиснув на кнопку нижче
                    </MainTitleBlack>
                    <StyledButton
                      variant="outlined"
                      href="/themes/1Introduction"
                    >
                      Почати навчання
                    </StyledButton>
                  </>
                )
              ) : (
                <>
                  <MainTitleBlack>
                    Не зареєстровані? Зареєструйтесь та почніть навчання!
                  </MainTitleBlack>
                  <StyledButton variant="outlined">Зареєструйтесь</StyledButton>
                </>
              )}
            </LearnWrapper>
            <LearnWrapper>
              {isAuth &&
                (currentUser.startTest.isCompleted ? (
                  <>
                    <MainTitleBlack>
                      Ви пройши тест та отримали {currentUser.startTest.score}%
                      вірних відповідей
                    </MainTitleBlack>
                  </>
                ) : (
                  <>
                    <MainTitleBlack>
                      Ви вже вивчали JavaScript? Пройдіть тест та пропустіть вже
                      знайомі вам теми
                    </MainTitleBlack>
                    <StyledButton variant="outlined" href="/test">
                      Пройти тест
                    </StyledButton>
                  </>
                ))}
            </LearnWrapper>
          </LearnBanner>
        </Container>
      </Learn>
      <ForWhat>
        <Container>
          <MainTitleForWhat>
            Ви все ще вагаєтесь навчатись вам чи ні?
          </MainTitleForWhat>
          <ForWhatText>
            JavaScript є однією з найпопулярніших мов програмування у світі
            веб-розробки. Вміння програмувати на JavaScript може відкрити широкі
            можливості для роботи у сфері розробки веб-додатків та веб-дизайну.
            Багато компаній шукають фахівців знайомих з JavaScript.
          </ForWhatText>
          <Border />
          <ForWhatText>
            JavaScript використовується не лише на стороні клієнта (у
            браузерах), але й на стороні сервера (за допомогою платформи
            Node.js). Це дає можливість розробляти повноцінні веб-додатки на
            обох сторонах, що розширює ваші можливості як програміста.
          </ForWhatText>
          <Border />
          <ForWhatText>
            JavaScript дозволяє створювати інтерактивні та динамічні
            веб-сторінки, що реагують на дії користувача. Багато фреймворків та
            бібліотек, таких як React, Angular та Vue.js, спрощують процес
            розробки та дозволяють створювати складні веб-додатки швидко та
            ефективно.
          </ForWhatText>
          <Border />
          <ForWhatText>
            JavaScript є досить простим для початківців мовою програмування.
            Вона має лаконічний синтаксис та вимагає меншої кількості
            налаштувань порівняно з іншими мовами. Ви зможете швидко побачити
            результати своєї роботи та розуміти, як ваш код взаємодіє зі
            сторінкою.
          </ForWhatText>
        </Container>
      </ForWhat>
    </>
  );
};

const About = styled("div")({
  padding: "15px 0px 0px 0px",
  background: "#f2f2f2",
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
});

const Banner = styled("div")({
  //border: "4px solid #ef6817",
  boxSizing: "border-box",
  margin: "0 auto",
  maxWidth: "800px",
  padding: "20px",
  //margin: "20px 0px",
  color: "#ef6817",
  // maxWidth: "800px",
  background: "#21201f",
});
const StyledButton = styled(Button)({
  width: "140px",
  height: "54px",
  borderRadius: "5px",
  fontSize: "11px",
  fontWeight: "bold",
  textAlign: "center",
  background: "#ef6817",
  color: "white",
  marginRight: "20px",
});

const Learn = styled("div")({
  marginTop: "50px",
  borderTop: "3px solid #ef6817",
  background: "#161616",
});
const MainTitleBlack = styled("div")({
  padding: "40px 0px",
  color: "white",
  fontSize: "25px",
  fontWeight: "bold",
});
const LearnBanner = styled("div")({
  display: "flex",
});

const LearnWrapper = styled("div")({
  textAlign: "center",
  width: "600px",
});

const ForWhat = styled("div")({
  background: "#161616",
  padding: "0px 0px 40px 0px",
});
const MainTitleForWhat = styled("div")({
  color: "#ef6817",
  fontSize: "25px",
  fontWeight: "bold",
  //textAlign: "center",
  padding: "65px 0px 0px 0px",
});

const ForWhatText = styled("div")({
  fontSize: "18px",
  color: "white",
  padding: "25px 0px 25px 20px",
  //maxWidth: "800px",
  margin: "0 auto",
});
const Border = styled("div")({
  //width: "2px",
  height: "2px",
  background: "white",
});
