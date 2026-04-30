"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState("");

  useEffect(() => {
    // Clear the input when leaving the search page
    if (pathname !== "/searchPage") {
      setQuery("");
      return;
    }

    // Populate the input from the URL while on the search page
    setQuery(searchParams.get("query") || "");
  }, [pathname, searchParams]);

  const onSubmit = () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    router.push(`/searchPage?query=${encodeURIComponent(trimmedQuery)}`);
  };

  return (
    <div className="border py-1 px-3 rounded-md flex items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit();
        }}
        placeholder="Search products..."
        className="w-full focus:outline-none"
      />

      <button onClick={onSubmit}>
        <Image
          src="/images/SearchIcon.svg"
          alt="Search"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
