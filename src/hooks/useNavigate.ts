import { useCallback } from "react";
import { useNavigate, generatePath } from "react-router-dom";

const useNavigateParams = (): ((params: string) => void) => {
  const navigate = useNavigate();
  return useCallback(
    (params: string) => {
      const path = generatePath("?:queryString", {
        queryString: params,
      });
      navigate(path);
    },
    [navigate]
  );
};

export default useNavigateParams;
