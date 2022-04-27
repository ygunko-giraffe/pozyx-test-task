import { useQuery } from "react-query";
import { USERS_QUERY_KEY } from "constants/react-query/QUERY_KEYS";
import { axiosClient } from "lib";
import { UserDataType } from "@types";

type UsersResponseType = Array<UserDataType>;

const useUsersQuery = () =>
  useQuery<UsersResponseType>(USERS_QUERY_KEY, async () => {
    const response = await axiosClient.get<UsersResponseType>("/users");

    return response.data ?? null;
  });

export default useUsersQuery;
