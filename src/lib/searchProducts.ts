import { Products } from "@/types/products";
import { createClient } from "./supabase/client";

export const searchProducts = async (query: string): Promise<Products[]> => {
  const supabase = createClient();

  if (!query.trim()) return [];

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("title", `%${query}%`)
    .limit(20);

  if (error) {
    console.error("Search Error:", error.message);
    return [];
  }

  return data ?? [];
};
