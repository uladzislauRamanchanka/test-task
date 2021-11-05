import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import queryString, { ParsedQuery } from "query-string";

const useParsedUrl = (): ParsedQuery => {
  const search = useLocation().search;
  return useMemo(() => queryString.parse(search), [search]);
};

export default useParsedUrl;
