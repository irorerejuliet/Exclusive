"use client";

import Image from "next/image";
import Link from "next/link";
import NextLink from "next/link";
import { useEffect, useState } from "react";

const CategoryProducts = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const visibleCategories =
    categories.length > 0 ? categories.slice(0, 10) : [];

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products/category-list");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data);
        setError("");
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="w-[217px] border-r pr-6 text-black">
      {loading && <p>Loading....</p>}
      {error && categories.length === 0 && <p>{error}</p>}
      {visibleCategories.map((category: string, index: number) => (
        <div
          key={index}
          className="flex justify-between items-center py-3 text-[16px] cursor-pointer hover:text-black/70 capitalize"
        >
          <Link
            href={`/categories/${category}`}
            className="text-black hover:text-black/70 capitalize"
          >
            {category}
          </Link>

          {index < 2 && (
            <Image
              src="/images/GreaterThanIcon.svg"
              alt="arrow"
              className="w-4 h-4 opacity-70"
              width={16}
              height={16}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryProducts;
