"use client";

import { useState } from "react";
import Image from "next/image";
import { useDebounce } from "@/hooks/useDebounce";
import { useProductSearch } from "@/hooks/useProductSearch";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 400);

  const {
    data: products = [],
    isLoading,
    error,
  } = useProductSearch(debouncedQuery);

  return (
    <div className="relative w-full">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex gap-2 border border-gray-200 shadow rounded-md py-2 px-4"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What are you looking for?"
          className="flex-1 focus:outline-none"
        />

        <button type="submit">
          <Image
            src="/images/SearchIcon.svg"
            alt="Search"
            width={20}
            height={20}
          />
        </button>
      </form>

      {/* Loading State */}
      {isLoading && (
        <p className="absolute left-0 mt-2 text-sm text-gray-500">
          Searching...
        </p>
      )}

      {/* Error State */}
      {error && (
        <p className="absolute left-0 mt-2 text-sm text-red-500">
          Something went wrong.
        </p>
      )}

      {/* Search Results */}
      {query.trim().length > 1 && products.length > 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-md border bg-white shadow-lg">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="cursor-pointer border-b p-4 hover:bg-gray-50"
            >
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-500">${product.price}</p>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {debouncedQuery.trim().length > 1 &&
        !isLoading &&
        products.length === 0 && (
          <div className="absolute z-50 mt-2 w-full rounded-md border bg-white p-4 shadow-lg">
            <p className="text-gray-500">No products found.</p>
          </div>
        )}
    </div>
  );
};

export default SearchBar;
