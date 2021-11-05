import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/macro";
import { DATA } from "../../../utils/axios";
import { IComments, IPost } from "../../../interfaces";

import Comments from "./Comments";
import ExpandMore from "./ExpandMore";

interface IProps {
  post: IPost;
}

const Content = styled.div`
  padding: 1em;
  border: 2px solid teal;
  border-radius: 25px;
`;

const Header = styled.h1`
  text-align: center;
  color: burlywood;
`;

const Card: React.FC<IProps> = ({ post }) => {
  const [comments, setComments] = useState<IComments[]>([]);
  const commentId = useRef<number>(post.id);

  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (checked) getComments(commentId.current);
  }, [checked]);

  const getComments = async (id: number) => {
    const comments = await DATA.getComments(id);
    setComments(comments);
  };

  const handleChangeCollapse = () => setChecked((prev) => !prev);

  return (
    <>
      <Content>
        <Header>{post.title}</Header> <p>{post.body}</p>
        <div>
          <ExpandMore handleChange={handleChangeCollapse} expanded={checked} />
          {checked ? <Comments comments={comments} checked={checked} /> : null}
        </div>
      </Content>
    </>
  );
};

export default Card;
