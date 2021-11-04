import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components/macro";

interface IProps {
  variant: "text" | "rectangular" | "circular";
  height: number;
  width: number | string;
  amount: number;
}

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const CardsSkeleton: React.FC<IProps> = ({
  variant,
  height,
  width,
  amount,
}) => {
  return (
    <Flex>
      {Array(amount)
        .fill(null)
        .map(() => (
          <Skeleton
            key={uuidv4()}
            variant={variant}
            height={height}
            width={width}
          />
        ))}
    </Flex>
  );
};

export default CardsSkeleton;
