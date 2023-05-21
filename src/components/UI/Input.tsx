import styled from "@emotion/styled";
import { Input } from "@mui/material";
import { FC } from "react";

interface ThemePageProps {
  value: string;
  type: string;
  placeholder: string;
  setValue: (value: string) => void;
}

const StyledInput: FC<ThemePageProps> = ({
  value,
  type,
  placeholder,
  setValue,
}) => {
  return (
    <Input_S
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
const Input_S = styled(Input)({
  width: "300px",
  height: "100px",
});
export { StyledInput };
