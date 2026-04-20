import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useWishlist = () =>{
const fetchwishlists = useQuery({
  queryKey: ["wishlists"],
  queryFn: async () => {
    const res = await axios.get("/api/products/wishlist");
    return res.data;
  },
});

return {
  wishlists: fetchwishlists?.data.data || [],
  error: fetchwishlists?.error,
  status: fetchwishlists?.status
};
}

export default useWishlist