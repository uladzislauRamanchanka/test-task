import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { IPost } from "../../interfaces";
import { selectLoadingPosts } from "../../ducks/posts/selectors";
import { Card, CardSkeleton } from "./components";

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface IProps {
  posts: IPost[];
}

const Cards: React.FC<IProps> = ({ posts }) => {
  const isLoading = useSelector(selectLoadingPosts);

  return (
    <CardsWrapper>
      {isLoading ? (
        <CardSkeleton
          amount={10}
          variant="rectangular"
          height={246}
          width="100%"
        />
      ) : (
        posts?.map((post) => <Card key={post.id} post={post} />)
      )}
    </CardsWrapper>
  );
};

export default Cards;
