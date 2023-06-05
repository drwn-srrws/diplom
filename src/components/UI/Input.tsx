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
      hasValue={value ? true : false}
    />
  );
};

const Input_S = styled(Input)<{ hasValue: boolean }>`
  width: 300px;
  margin: 40px 0px 0px 0px;
  color: white;
  background-color: ${(props) => (props.hasValue ? "#262F3D" : "transparent")};

  & .MuiInput-underline:before {
    border-bottom: 1px solid white;
  }

  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid white;
  }
`;

export { StyledInput };
