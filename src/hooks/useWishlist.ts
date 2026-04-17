// import { useQuery } from "@tanstack/react-query";


// const fetchWishlist = async () => {
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   if (!user) return [];

//   const { data, error } = await supabase
//     .from("wishlist")
//     .select("product_id")
//     .eq("user_id", user.id);

//   if (error) throw error;

//   return data.map((item) => item.product_id as string);
// };

// export const useWishlist = () => {
//   return useQuery({
//     queryKey: ["wishlist"],
//     queryFn: fetchWishlist,
//   });
// };
