"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  const onSubmit = () => {
    if (!query.trim()) return;
    router.push(`/searchPage?query=${query}`);
  };

  return (
    <div className="border py-1 px-3 rounded-md flex items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit();
        }}
        placeholder="Search products..."
        className="w-full focus:outline-none"
      />

      <button onClick={onSubmit}>
        {" "}
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

