import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, Button, Input, Modal, styled } from "@mui/material";
import { Login_, updateUserName_ } from "@/actions/user";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useRouter } from "next/router";
import ProfileList from "@/components/ProfileList/ProfileList";

const UpdateAvatarForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [userName, setUserName] = useState<string>("ыыы");
  const dispatch = useAppDispatch();
  const [userAvatar, setUserAvatar] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUserNameModal, setIsOpenUserNameModal] = useState(false);
  const handleEditPhotoClick = () => {
    setIsOpen(true);
  };
  const handleEditUserNameClick = () => {
    setIsOpenUserNameModal(true);
  };
  const handleAcceptEditUserNameClick = () => {
    updateUserName_(localStorage.getItem("id") as string, userName);
  };
  const PORT = "https://8dd8-93-78-52-94.ngrok-free.app";
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
    <Wrapper>
      <Avatar
        alt="Remy Sharp"
        src={userAvatar}
        style={{ width: "200px", height: "200px" }}
      />
      <StyledEditButton onClick={handleEditPhotoClick}>
        Редагувати фотографію
      </StyledEditButton>
      <StyledModal open={isOpen} onClose={() => setIsOpen(false)}>
        <UpdateFotoWrapper>
          <Avatar
            alt="Remy Sharp"
            src={selectedFile ? URL.createObjectURL(selectedFile) : undefined}
            style={{
              width: "200px",
              height: "200px",
            }}
          />
          <form onSubmit={handleFormSubmit}>
            <FileInput htmlFor="fileInput">
              Завантажити зображення
              <input
                id="fileInput"
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </FileInput>
            <StyledButton type="submit">Змінити</StyledButton>
          </form>
        </UpdateFotoWrapper>
      </StyledModal>
      <StyledEditButton onClick={handleEditUserNameClick}>
        Редагувати ім`я
      </StyledEditButton>
      <StyledModal
        open={isOpenUserNameModal}
        onClose={() => setIsOpenUserNameModal(false)}
      >
        <UpdateFotoWrapper>
          <Title>Введіть нове ім`я</Title>
          <StyledInput onChange={(e) => setUserName(e.target.value)} />
          <StyledButton onClick={handleAcceptEditUserNameClick}>
            Змінити
          </StyledButton>
        </UpdateFotoWrapper>
      </StyledModal>
      {/* <ProfileList /> */}
    </Wrapper>
  );
};

export default UpdateAvatarForm;

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const FileInput = styled("label")({
  display: "flex",
  flexDirection: "column",
  color: "#ef6817",
  fontSize: "17px",
  margin: "30px 0px 30px 10px",
  textAlign: "center",
  transition: "transform 0.3s",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.01)",
  },
});
const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledButton = styled(Button)({
  fontSize: "11px",
  fontWeight: "bold",
  textAlign: "center",
  background: "#ef6817",
  color: "white",
  display: "flex",
  margin: "0 auto",
});
const UpdateFotoWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "700px",
  height: "400px",
  background: "#161616",
  borderRadius: "4px",
});

const StyledEditButton = styled(Button)({
  fontSize: "11px",
  fontWeight: "bold",
  textAlign: "center",
  background: "#ef6817",
  color: "white",
  display: "flex",
  //padding: "20px 0px 0px 0px",
  margin: "20px 0px 0px 0px",
});
const Title = styled("div")({
  color: "#ef6817",
});

const StyledInput = styled(Input)({
  background: "white",
  margin: "20px 0px",
});
