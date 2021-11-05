import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParsedUrl } from "../hooks";
import { getIds } from "../utils/getIds";

import styled from "styled-components/macro";

import { fetchPostsRequest } from "../ducks/posts/actions";
import { fetchOptionsRequest } from "../ducks/options/actions";

import { selectPosts } from "../ducks/posts/selectors";
import { selectOptions } from "../ducks/options/selectors";

import { MultiSelect, Cards } from "../components";
import { SelectChangeEvent } from "@mui/material/Select";

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;

function Main() {
  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);
  const options = useSelector(selectOptions);

  const [userId, setUserId] = useState<string[]>([]);
  const parsedUrl = useParsedUrl();
  const navigate = useNavigate();

  useEffect(() => {
    if (parsedUrl.userId) {
      setUserId(
        typeof parsedUrl.userId === "string"
          ? [parsedUrl.userId]
          : (parsedUrl.userId as string[])
      );
    }

    dispatch(fetchOptionsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchPostsRequest({ userId }));

    const url = userId.length > 0 ? `${getIds(userId, "&")}` : "";

    navigate(url);
  }, [dispatch, userId, navigate]);

  const handleMultiSelectChange = useCallback(
    (event: SelectChangeEvent<typeof userId>) => {
      const {
        target: { value: users },
      } = event;
      setUserId(
        typeof users === "string"
          ? users.split(",")
          : users.map((value) => value)
      );
    },
    []
  );

  return (
    <Container>
      <MultiSelect
        userId={userId}
        options={options}
        handleChange={handleMultiSelectChange}
      />
      <Cards posts={posts} />
    </Container>
  );
}

export default Main;
