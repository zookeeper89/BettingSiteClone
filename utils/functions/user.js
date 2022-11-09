import useSWR, { useSWRConfig } from "swr";

function useUser() {
  const { data: user } = useSWR(`/api/user/GetUserSafe`);
  return user;
}

export default useUser;
