import React, { FC, useEffect, useState } from "react";

import { useAppSelector } from "@/hooks/redux";

import { ITheme } from "@/types/themes";
import styled from "@emotion/styled";
import { Link } from "@mui/material";
import UpdateAvatarForm from "./UpdateAvatarForm";

interface CompletedThemesProps {
  themes: ITheme[];
}

const FutureThemes: FC<CompletedThemesProps> = ({ themes }) => {
  const { availableThemes } = useAppSelector(
    (state) => state.UserReducer.currentUser
  );
  console.log("themes", themes);
  return (
    <CompletedThemesWrapper>
      <Container>
        <Title>Теми для проходження в майбутньому </Title>
        <LinkWrapper>
          {themes.slice(availableThemes.length).map((item) => (
            <>
              <StyledLink>{item.meta.MainTheme}</StyledLink>
            </>
          ))}
        </LinkWrapper>
      </Container>
    </CompletedThemesWrapper>
  );
};

export default FutureThemes;

const CompletedThemesWrapper = styled("div")({});

const StyledLink = styled(Link)({
  margin: "15px 0px 0px 6px",
  color: "#727271",
  textDecoration: "none",
});
const Container = styled("div")({});
const LinkWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});
const Title = styled("div")({
  color: "#ef6817",
  fontSize: "25px",
  fontWeight: "bold",
});
