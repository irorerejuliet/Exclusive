// import { ProductResponseData } from "@/types/products";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const useWishlist = () => {
//   const fetchedWishlist = useQuery({
//     queryKey: ["wishlist"],
//     queryFn: async () => {
//       const res = await axios.get<ProductResponseData>(
//         "/api/products/wishlist",
//       );
//       return res.data;
//     },
//   });

//   return {
//     wishlist: fetchedWishlist.data?.data || [],
//     error: fetchedWishlist.error,
//     status: fetchedWishlist.status,
//     isLoading: fetchedWishlist.isLoading,
//   };
// };

// export default useWishlist;
