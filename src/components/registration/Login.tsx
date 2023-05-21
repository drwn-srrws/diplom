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
        <div className="registration__header">Авторизація</div>
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

        <button className="registration__btn" onClick={handleLogin}>
          Ввійти
        </button>
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

export default Login;
