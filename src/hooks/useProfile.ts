import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export default function useProfile(){
  const profileQuery = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axios("/api/profile")
      return res.data
    }
  })

  return {
    profile: profileQuery?.data?.profile,
    error: profileQuery.error,
    status: profileQuery.status
  }
}