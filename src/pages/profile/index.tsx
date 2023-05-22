import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";
import { Login_ } from "@/actions/user";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useRouter } from "next/router";
import ProfileList from "@/components/ProfileList/ProfileList";

const UpdateAvatarForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const [userAvatar, setUserAvatar] = useState<string>();
  const PORT = "https://5553-93-78-0-205.ngrok-free.app";
  useEffect(() => {
    if (localStorage.getItem("avatar")) {
      setUserAvatar(
        `${PORT}/api/user/avatars/${localStorage.getItem(
          "avatar"
        )}?${Date.now()}` // Добавлен параметр запроса с текущей датой и временем
      );
    }
  }, [selectedFile]);

  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file as any);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedFile) {
      try {
        const userId = localStorage.getItem("id");
        const formData = new FormData();
        formData.append("avatar", selectedFile);

        await axios.put(`${PORT}/api/user/updateAvatar/${userId}`, formData);

        await Login_(
          localStorage.getItem("email") as string,
          localStorage.getItem("password") as string,
          dispatch,
          router
        );

        const updatedUserAvatar = `${PORT}/api/user/avatars/${localStorage.getItem(
          "avatar"
        )}?${Date.now()}`; // Добавлен параметр запроса с текущей датой и временем
        setUserAvatar(updatedUserAvatar); // Обновляем значение userAvatar

        console.log("Avatar successfully updated");
      } catch (error) {
        console.error("Error updating avatar:", error);
      }
    }
  };

  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src={userAvatar}
        style={{ width: "200px", height: "200px" }}
      />
      <form onSubmit={handleFormSubmit}>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={handleFileChange}
        />
        <button type="submit">Update Avatar</button>
      </form>
      {/* <ProfileList /> */}
    </>
  );
};

export default UpdateAvatarForm;
