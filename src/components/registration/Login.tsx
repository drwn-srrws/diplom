import { useDispatch } from "react-redux";
import { Login_ } from "@/actions/user";
import { setUser } from "@/store/reducers/userReducer";
import { StyledInput } from "../UI/Input";
import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogin = () => {
    Login_(email, password, dispatch, router);
  };

  return (
    <StyledRegistration>
      <Container>
        <RegistrationTitle>Авторизація</RegistrationTitle>
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
        <StyledButton onClick={handleLogin}>Ввійти</StyledButton>
        <StyledLink href="/autorization">Зареєструватися</StyledLink>
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
  marginTop: "-100px",
});

const RegistrationTitle = styled("div")({
  color: "#ef6817",
  fontSize: "25px",
  fontWeight: "bold",
});

const StyledButton = styled(Button)({
  width: "130px",
  height: "40px",
  margin: "20px 0px 20px 80px",
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

export default Login;
