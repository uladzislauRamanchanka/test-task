import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

interface IReturned {
  [param: string]: string | string[] | null;
}

const useParsedUrl = (): IReturned => {
  const search = useLocation().search;
  return useMemo(() => queryString.parse(search), [search]);
};

export default useParsedUrl;
