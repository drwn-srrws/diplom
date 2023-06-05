import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { ITheme } from "@/types/themes";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { isNewUser } from "@/store/reducers/userReducer";
import Link from "next/link";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value?: string) => void;
  themes: ITheme[];
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const { userName } = useAppSelector((state) => state.UserReducer.currentUser);
  const handleClose = () => {
    onClose();
  };

  return (
    <StyledDialog onClose={handleClose} open={open}>
      <StyledDialogTitle>
        Привіт <strong style={{ color: "#52cc00" }}>{userName}</strong> !!!
      </StyledDialogTitle>

      <TextWhite>Тепер ви можете почати навчання</TextWhite>
      <TextRed>Але не кваптесь</TextRed>
      <Border />

      <Text>Можливо ви в минулому вже вивчали javascript?</Text>
      <TextWhite>
        Якщо так, то пропонуємо вам спочатку пройти{" "}
        <Link href="/test">стартовий тест!</Link>
      </TextWhite>
      <Border />
      <Text>
        Також для кращого розуміння як проходить навчання рекомендуємо
      </Text>
      <TextWhite>
        перейти на сторінку <Link href="/aboutSite">про посібник</Link>
      </TextWhite>
    </StyledDialog>
  );
}

export default function ModalNewUser({ themes }: any) {
  const [open, setOpen] = React.useState(true);
  const dispatch = useAppDispatch();
  const handleClose = (value?: any) => {
    setOpen(false);
    dispatch(isNewUser(false));
  };

  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose} themes={themes} />
    </div>
  );
}

const StyledDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    backgroundColor: "#1b1b1b",
    width: 600,
    height: 400,
    display: "flex",
    alignItems: "center",
  },
});

const StyledDialogTitle = styled(DialogTitle)({
  color: "#ef6817",
});

const Text = styled("div")({
  color: "#ef6817",
  fontSize: "18px",
  margin: "10px 0px",
});
const TextWhite = styled("div")({
  color: "white",
  fontSize: "18px",
  margin: "10px 0px",
});

const TextRed = styled("div")({
  margin: "10px 0px",
  color: "#52cc00",
  fontSize: "18px",
});

const Border = styled("div")({
  margin: "10px 0px",
  width: "100%",
  height: "2px",
  background: "white",
});
