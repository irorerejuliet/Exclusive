import { ProductSignleResponseData } from "@/types/products";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";

const useProduct = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data, status, error } = useQuery({
    queryKey: ["products", productId ?? ""],
    queryFn: async () => {
      const res = await axios<ProductSignleResponseData>(
        `/api/products/${productId}`,
      );
      console.log("checking api ", res.data);
      return res.data;
    },
    enabled: productId ? true : false,
  });
  return {
    product: data?.data,
    error,
    status,
  };
};
export default useProduct;
