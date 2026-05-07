import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useUser() {
  const queryClient = useQueryClient();

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get("/api/user");
      return res.data;
    },
  });

  return {
    user: userQuery.data?.user,
    status: userQuery.status,
    refetchUser: userQuery.refetch,
    invalidateUser: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  };
}
