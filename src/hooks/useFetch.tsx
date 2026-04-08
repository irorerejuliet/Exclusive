"use client";

// import { useEffect, useState } from "react";

// interface FetchType {
//   url: string;
//   params?: string;
// }

// const useFetch = <T,>({ url, params }: FetchType) => {
//   const [data, setData] = useState<T | null>(null);
//   const [isLoading, setLoading] = useState(true);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     const getData = async () => {
//       setLoading(true);
//       try {
//         const fullUrl = params
//           ? `${process.env.NEXT_PUBLIC_API_URL}/${url}/${params}`
//           : `${process.env.NEXT_PUBLIC_API_URL}/${url}`;

//         const res = await fetch(fullUrl);

//         if (!res.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const result = await res.json();
//         setData(result);
//       } catch (err: unknown) {
//         if(err instanceof Error){
//       setError(err.message);
//         }else {
//           setError("Something went wrong")
//         }
        
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, [url, params]);

//   return { data, isLoading, error };
// };

// export default useFetch;



import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

interface FetchType {
  url: string;
  params?: string;
}

export const useFetch = <T,>({ url, params }: FetchType) => {
  const queryKey = params ? [url, params] : [url];

  const fetchData = async (): Promise<T> => {
    const endpoint = params ? `${url}/${params}` : url;
    const res = await api.get(endpoint);
       console.log(res.data);
    return res.data;
  };

  return useQuery({
    queryKey,
    queryFn: fetchData,
  });
};
