import React from "react";
import { Collapse } from "@mui/material";
import { IComments } from "../../../interfaces";
import styled from "styled-components/macro";

interface IProps {
  comments: IComments[];
  checked: boolean;
}

const StyledCollapse = styled(Collapse)`
  width: 100%;
  .MuiCollapse-wrapper {
    width: 100%;
  }
  .MuiCollapse-wrapperInner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Comments: React.FC<IProps> = ({ comments, checked }) => {
  return (
    <StyledCollapse
      in={checked && comments.length > 0}
      timeout="auto"
      unmountOnExit
    >
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </StyledCollapse>
  );
};

export default Comments;
