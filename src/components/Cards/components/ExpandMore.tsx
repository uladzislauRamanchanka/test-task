import React from "react";
import { styled as MUIstyled } from "@mui/material/styles";
import styled from "styled-components/macro";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandButton = MUIstyled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.standard,
  }),
}));

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

interface IProps {
  handleChange: () => void;
  expanded: boolean;
}

const ExpandMore: React.FC<IProps> = ({ handleChange, expanded }) => {
  return (
    <ButtonWrapper>
      <ExpandButton
        expand={expanded}
        onClick={handleChange as React.MouseEventHandler<HTMLButtonElement>}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandButton>
    </ButtonWrapper>
  );
};

export default ExpandMore;
