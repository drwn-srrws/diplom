import { ITheme } from "@/types/themes";

import { FC, useEffect } from "react";

import Registration from "@/components/registration/Registration";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Button } from "@mui/material";
import { Login_ } from "@/actions/user";
import { useRouter } from "next/router";

interface HomepageProps {
  themes: ITheme[];
}

const Registrationpage: FC = () => {
  const { isAuth } = useAppSelector((state) => state.UserReducer);

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    console.log(localStorage.getItem("email"));

    Login_(
      localStorage.getItem("email") as string,
      localStorage.getItem("password") as string,
      dispatch,
      router,
     // "/"
    );
  }, [dispatch]);

  return !isAuth ? <Registration /> : <Button href="/">12321</Button>;
};

export default Registrationpage;
