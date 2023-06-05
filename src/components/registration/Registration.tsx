import React, { useState } from "react";
import { StyledInput } from "../UI/Input";
import { Registration_ } from "@/actions/user";
import { useAppDispatch } from "@/hooks/redux";
import Link from "next/link";
import { Button, styled } from "@mui/material";
import { useRouter } from "next/router";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <StyledRegistration>
      <Container>
        <RegistrationTitle>Реєстрація</RegistrationTitle>
        <StyledInput
          value={email}
          setValue={setEmail}
          type="text"
          placeholder="Введіть email..."
        />
        <StyledInput
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Введіть пароль..."
        />
        <StyledInput
          value={userName}
          setValue={setUserName}
          type="text"
          placeholder="Введіть им'я користувача..."
        />
        <StyledButton
          onClick={() =>
            Registration_(email, password, userName, router, dispatch)
          }
        >
          Зареєструватися
        </StyledButton>
        <StyledLink href={"/autorization/login"}>Ввійти в аккаунт</StyledLink>
      </Container>
    </StyledRegistration>
  );
};
const StyledRegistration = styled("div")({
  background: "#161616",
  minHeight: "937px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const Container = styled("div")({
  maxWidth: "1200px",
  display: "flex",
  flexDirection: "column",
  marginTop:"-100px"
});

const RegistrationTitle = styled("div")({
  color: "#ef6817",
  fontSize: "25px",
  fontWeight: "bold",
});

const StyledButton = styled(Button)({
  width: "130px",
  height: "40px",
  margin: "20px 0px 20px 50px",
  borderRadius: "5px",
  fontSize: "11px",
  fontWeight: "bold",
  textAlign: "center",
  background: "#ef6817",
  color: "white",
  marginRight: "20px",
});

const StyledLink = styled(Button)({
  width: "130px",
  height: "40px",
  //margin: "20px 0px 0px 50px",
  borderRadius: "5px",
  fontSize: "11px",
  fontWeight: "bold",
  textAlign: "center",

  color: "white",
  marginRight: "20px",
});

export default Registration;
