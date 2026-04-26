"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const [limit, setLimit] = useState(10)
  const router = useRouter();

  const handleSearch = (e) => {
   setSearch(e.target.value);
  };

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    setQuery(search)
  }

  const showMore = () => {
    setLimit((prev) => prev + 10)
  }
  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-2 border border-gray-200 shadow rounded-md py-2 px-4"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="What are you looking for?"
        className="flex-1 focus:outline-none"
      />

      <button type="submit">
        <Image
          src="/images/SearchIcon.svg"
          alt="search"
          width={20}
          height={20}
        />
      </button>
    </form>
  );
};

export default SearchBar;
