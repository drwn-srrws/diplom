import React from "react";
import { styled } from "@mui/material";

type IContainerVariant = "normal" | "small" | "xsmall";

const getWidth = (variant: IContainerVariant) => {
  if (variant === "normal") return "1200px";
  if (variant === "small") return "1078px";
  if (variant === "xsmall") return "600px";
};

interface Props {
  children: React.ReactNode;
  variant?: IContainerVariant;
  style?: Record<string, string | number>;
}

const Container = ({ children, variant = "normal", style = {} }: Props) => (
  <Wrapper variant={variant} style={style}>
    {children}
  </Wrapper>
);

const Wrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "variant",
})<{ variant: IContainerVariant }>(({ variant }) => ({
  width: getWidth(variant),
  maxWidth: "90%",
  margin: "0 auto",
}));

export default Container;
