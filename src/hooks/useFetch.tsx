"use client";

import { useEffect, useState } from "react";

interface FetchType {
  url: string;
  params?: string;
}

const useFetch = ({ url, params }: FetchType) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const fullUrl = params
          ? `${process.env.NEXT_PUBLIC_API_URL}/${url}/${params}`
          : `${process.env.NEXT_PUBLIC_API_URL}/${url}`;

        const res = await fetch(fullUrl);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await res.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url, params]);

  return { data, isLoading, error };
};

export default useFetch;
