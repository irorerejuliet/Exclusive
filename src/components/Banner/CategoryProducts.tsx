"use client";

import { Category, CategoryApiResponse } from "@/types/category";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoryProducts = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      try {
        const res = await fetch("/api/categories");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = (await res.json()) as CategoryApiResponse;
        console.log(data);
        console.log(data);

        setCategories(data.data);
        setError("");
      } catch (err: unknown) {
        if(err instanceof Error){
         setError(err.message);
        } else {
          setError("Seomething went wrong")
        }
       
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);
  console.log(categories, "Cat");
  return (
    <div className="hidden lg:block w-64 border-r pr-6 text-black">
      {loading && <p>Loading...</p>}
      {error && !categories?.length && <p>{error}</p>}
      {categories.slice(0, 10).map((category, index: number) => (
        <div
          key={index}
          className="flex justify-between items-center py-3 text-[16px] cursor-pointer hover:text-black/70 capitalize"
        >
          <Link
            className="text-black hover:text-black/70 capitalize"
            href={`/categories/${category?.id}`}
          >
            {category?.name}
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

