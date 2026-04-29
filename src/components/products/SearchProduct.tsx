"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchProducts } from "@/lib/searchProducts";

const SearchProduct = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      setLoading(true);
      const data = await searchProducts(query);
      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, [query]);

  return (
    <section className="bg-white">
      <div className="wrapper py-10 text-black">
        <h1 className="text-xl font-bold">Results for "{query}"</h1> 

        {loading && <p>Loading...</p>}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {products.map((p: any) => (
            <div key={p.id} className="border p-3 rounded-md">
              <img src={p.thumbnail} />
              <h3>{p.title}</h3>
              <p>${p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SearchProduct