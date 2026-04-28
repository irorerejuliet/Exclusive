"use client";

import Image from "next/image";



const SearchBar = () => {
  
  return (
    <div  className="boder border-gray-200 py-1 px-2 rounded-md">
        <input
          type="text"
          
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
      

    </div>
  );
};

export default SearchBar;
