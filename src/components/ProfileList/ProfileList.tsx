import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useRouter } from "next/router";
import { Login_ } from "@/actions/user";
import { logout } from "@/store/reducers/userReducer";

export default function ProfileSelect() {
  const [userAvatar, setUserAvatar] = useState<string>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // State для хранения элемента, на который нужно расположить меню

  const dispatch = useAppDispatch();
  const router = useRouter();
  const PORT = `https://39b0-93-76-59-214.ngrok-free.app`;
  const { avatar } = useAppSelector((state) => state.UserReducer.currentUser);

  useEffect(() => {
    Login_(
      localStorage.getItem("email") as string,
      localStorage.getItem("password") as string,
      dispatch,
      router
      //location.pathname
    );
  }, [dispatch, router, router.pathname]);

  useEffect(() => {
    setUserAvatar(`${PORT}/api/user/avatars/${localStorage.getItem("avatar")}`);
  }, [PORT, localStorage.getItem("avatar")]);

  const handleAvatarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget); // Установка элемента, на который нужно расположить меню
  };
  const handleLogoutClick = () => {
    dispatch(logout());
    setAnchorEl(null);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null); // Закрытие меню
  };

  const handleCheckProfile = () => {
    router.push("/profile");
    setAnchorEl(null); // Закрытие меню
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Avatar src={userAvatar} onClick={handleAvatarClick} />{" "}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCheckProfile}>Переглянути профіль</MenuItem>

          <MenuItem onClick={handleLogoutClick}>Вийти з аккаунта</MenuItem>
        </Menu>
      </FormControl>
    </Box>
  );
}
