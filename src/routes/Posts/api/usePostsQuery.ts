import { useQuery } from "react-query";
import { POSTS_QUERY_KEY } from "constants/react-query/QUERY_KEYS";
import { axiosClient } from "lib";
import { PostDataType } from "@types";

type PostsResponseType = Array<PostDataType>;

const usePostsQuery = () =>
  useQuery<PostsResponseType>(POSTS_QUERY_KEY, async () => {
    const response = await axiosClient.get<PostsResponseType>("/posts");

    return response.data ?? null;
  });

export default usePostsQuery;
