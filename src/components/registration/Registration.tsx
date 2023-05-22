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
        <div className="registration__header">Реєстрація</div>
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
        <Button
          className="registration__btn"
          onClick={() => Registration_(email, password, userName, router)}
        >
          Зареєструватися
        </Button>
        <Link href={"/autorization/login"}>Ввійти в аккаунт</Link>
      </Container>
    </StyledRegistration>
  );
};
const StyledRegistration = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "200px",
});
const Container = styled("div")({
  marginTop: "100px",
  margin: "0 auto",
  maxWidth: "1200px",
  display: "flex",
  flexDirection: "column",
});

export default Registration;
