import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { ITheme } from "@/types/themes";
import { useAppSelector } from "@/hooks/redux";
import { useRouter } from "next/router";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value?: string) => void;
  themes: ITheme[];
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, themes } = props;
  const { availableThemes } = useAppSelector(
    (state) => state.UserReducer.currentUser
  );

  const UserThemesCount = availableThemes.length;
  const actions = [
    {
      actionName: "Перейти до наступної",
      actionTheme:
        UserThemesCount < themes.length
          ? themes[UserThemesCount].meta.MainTheme
          : "",
      actionUrl:
        UserThemesCount < themes.length ? themes[UserThemesCount].slug : "",
    },
    {
      actionName: "Повторити останню",
      actionTheme:
        UserThemesCount > 0 && UserThemesCount - 1 < themes.length
          ? themes[UserThemesCount - 1].meta.MainTheme
          : "",
      actionUrl:
        UserThemesCount > 0 && UserThemesCount - 1 < themes.length
          ? themes[UserThemesCount - 1].slug
          : "",
    },
  ];

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>З поверненням!!!</DialogTitle>
      <List sx={{ pt: 0 }}>
        {actions.map((action, index) => (
          <ListItem disableGutters key={index}>
            <ListItemButton
              onClick={() => handleListItemClick(action.actionUrl)}
              key={index}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${action.actionName}  (${action.actionTheme})`}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo({ themes }: any) {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  const handleClose = (value?: any) => {
    setOpen(false);
    localStorage.setItem("isAlerted", "true");
    if (value) {
      router.push("themes/" + value);
    }
  };

  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose} themes={themes} />
    </div>
  );
}
