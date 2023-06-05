import React from "react";
import { styled } from "@mui/system";
import { ITheme } from "@/types/themes";
import { useAppSelector } from "@/hooks/redux";
import { Tooltip } from "@mui/material";

interface ProgressBarProps {
  progress: number;
  total: number;
  themes: ITheme[];
}

const ProgressBarContainer = styled("div")`
  width: 100%;
  height: 20px;
  background-color: #727271;
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressBarFill = styled("div")<{ width: number }>`
  height: 100%;
  background-color: #ef6817;
  transition: width 0.3s ease-in-out;
  width: ${({ width }) => `${width}%`};
`;

const Wrapper = styled("div")({
  paddingBottom: "50px",
});

const Container = styled("div")({
  maxWidth: "500px",
  margin: "0 auto",
});

const StyledH2 = styled("h2")({
  color: "#52cc00",
  textAlign: "center",
  margin: "20px 0px",
});

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total }) => {
  const progressPercentage = Math.round((progress / total) * 100);

  return (
    <Wrapper>
      <Container>
        {" "}
        <StyledH2>Прогрес проходження тем</StyledH2>
        <Tooltip title={`${progressPercentage}%`} followCursor>
          <ProgressBarContainer>
            <ProgressBarFill width={progressPercentage} />
          </ProgressBarContainer>
        </Tooltip>
      </Container>
    </Wrapper>
  );
};

const Progress: React.FC<ProgressBarProps> = ({ themes, progress, total }) => {
  const { availableThemes } = useAppSelector(
    (state) => state.UserReducer.currentUser
  );

  return (
    <div>
      <ProgressBar progress={progress} total={total} themes={themes} />
    </div>
  );
};

export default Progress;
