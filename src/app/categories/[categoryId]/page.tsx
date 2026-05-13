"use client";

import useCategoryProducts from "@/hooks/useCategoryProducts";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  const params = useParams();

  const categoryId = params.categoryId as string;

  const { products, status, error } = useCategoryProducts(categoryId);

  if (status === "pending") {
    return <p>Loading products...</p>;
  }

  if (status === "error") {
    return (
      <p>{error instanceof Error ? error.message : "Something went wrong"}</p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product: any) => (
        <div key={product.id} className="border p-4 rounded">
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
