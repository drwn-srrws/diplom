import React, { FC, useEffect, useState } from "react";

import { useAppSelector } from "@/hooks/redux";

import { ITheme } from "@/types/themes";
import styled from "@emotion/styled";
import { Link, Tooltip, Typography } from "@mui/material";
import UpdateAvatarForm from "./UpdateAvatarForm";

interface CompletedThemesProps {
  themes: ITheme[];
}

const CompletedThemes: FC<CompletedThemesProps> = ({ themes }) => {
  const { availableThemes } = useAppSelector(
    (state) => state.UserReducer.currentUser
  );
  return (
    <CompletedThemesWrapper>
      <Container>
        <Title>Ви вже пройшли</Title>
        <LinkWrapper>
          {availableThemes.map((item) => (
            <>
              <StyledLink href={`/themes/${item.themeUrl}`}>
                {item.themeName}
              </StyledLink>
              {item.themeScore > 0 && (
                <LinkScoreWrapper>
                  <StyledLink href={`/themes/${item.themeUrl}`}>
                    {item.themeName}
                  </StyledLink>
                  <Tooltip title="ваша оцінка за тест">
                    <Typography>
                      <Score>{`( ${item.themeScore}%)`}</Score>
                    </Typography>
                  </Tooltip>
                </LinkScoreWrapper>
              )}
            </>
          ))}
        </LinkWrapper>
      </Container>
    </CompletedThemesWrapper>
  );
};

export default CompletedThemes;

const CompletedThemesWrapper = styled("div")({});
const Score = styled("div")({
  color: "#52cc00",
  margin: "12px 0px 0px 10px",
});
const LinkScoreWrapper = styled("div")({
  display: "flex",
});
const StyledLink = styled(Link)({
  margin: "15px 0px 0px 6px",
  color: "white",
  textDecoration: "none",
  transition: "transform 0.3s",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.01)",
    color: "#ef6817",
  },
});
const Container = styled("div")({
  //   display: "flex",
  //   maxWidth: "1200px",
  //   margin: "0 auto",
});
const LinkWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Title = styled("div")({
  color: "#ef6817",
  fontSize: "25px",
  fontWeight: "bold",
});
