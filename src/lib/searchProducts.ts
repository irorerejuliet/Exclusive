import axios from "axios";

export const searchProducts = async (query: string) => {
  if (!query || query.trim().length < 2) return [];

  const res = await axios.get("/api/products/search", {
    params: { q: query },
  });

  return res.data;
};
