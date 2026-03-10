"use client"
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { HiMenuAlt1 } from "react-icons/hi";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white text-black">
      <nav className="flex justify-between items-center  py-4 relative  wrapper ">
        <Link href={"/"} className="text-4xl font-bold">
          Exclusive
        </Link>
        <div className="hidden md:flex gap-6 items-center text-base font-normal">
          <Link href={"/"}>Home</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/sign-up"}>SignUp</Link>
        </div>

        {/* Search + Icons */}
        <div className="hidden md:flex gap-4 items-center ">
          <div className="flex gap-1 border border-gray-200 shadow rounded-md py-2 px-4 text-black ">
            <input
              type="text"
              placeholder="What are looking for "
              className="focus:outline-none"
            />
            <Image
              src="/images/SearchIcon.svg"
              alt="searchIcon"
              width={24}
              height={24}
            />
          </div>
          <div className="flex gap-4">
            <Image
              src="/images/HeartIcon.svg"
              alt="heartIcon"
              width={32}
              height={32}
            />
            <Image
              src="/images/Cart1Icon.svg"
              alt="cartIcon"
              width={32}
              height={32}
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } flex-col md:hidden absolute top-full left-0 text-lg font-semibold text-red-900 px-4 pt-4 pb-6 gap-4 z-50`}
        >
          <Link href={""}>Home</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/signup"}>SignUp</Link>
        </div>
      </nav>
      <div className="w-full border-t border-gray-200"></div>
    </header>
  );
};

export default Navbar;
