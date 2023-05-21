import { ITheme } from "@/types/themes";

import { FC, useEffect } from "react";

import Registration from "@/components/registration/Registration";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Button } from "@mui/material";
import { Login_ } from "@/actions/user";
import Login from "@/components/registration/Login";

interface HomepageProps {
  themes: ITheme[];
}

const Registrationpage: FC = () => {
  // const { isAuth } = useAppSelector((state) => state.UserReducer);
  // //const isAuth = localStorage.getItem("isAuth");
  // useEffect(() => {
  //   console.log(isAuth, "1111111111111111111111111");
  // }, [isAuth]);

  return <Login />;
};

export default Registrationpage;
