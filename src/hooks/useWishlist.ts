// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const useWishlist = () => {
//   const query = useQuery({
//     queryKey: ["wishlists"],
//     queryFn: async () => {
//       const res = await axios.get("/api/products/wishlists");
//       return res.data;
//     },
//   });

//   return {
//     wishlists: query.data?.data || [],
//     status: query.status,
//     error: query.error,
//   };
// };

// export default useWishlist;
