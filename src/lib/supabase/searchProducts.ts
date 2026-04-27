import { Products } from "@/types/products";
import { createClient } from "./client";


export async function searchProducts(query: string): Promise<Products[]> {
    const supabase = createClient()
  if (query.trim().length < 2) {
    return [];
  }

  const searchTerm = query.trim();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .or(
      `name.ilike.%${searchTerm}%,category.ilike.%${searchTerm}%,brand.ilike.%${searchTerm}%`,
    )
    .limit(20);

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}
