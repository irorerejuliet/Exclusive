"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type UseFetchProps = {
  queryKey: string[];
  url: string;
};

function useFetch<T>({ queryKey, url }: UseFetchProps) {
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      const res = await axios.get<T>(url);
      return res.data;
    },
  });

  return query;
}

export default useFetch;
