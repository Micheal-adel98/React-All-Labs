import { useContext } from "react";
import { ApiContext } from "../contexts";

export const useCreatePost = () => {
  //caching
  const apiContext = useContext(ApiContext);
  return async (payload) => {
    const { data } = await apiContext.post("/posts",payload);
    return data;
  };
};
