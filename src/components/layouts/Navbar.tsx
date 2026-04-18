"use client";
import { Menu, X, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="bg-white text-black">
      <nav className="flex justify-between items-center py-4 relative wrapper ">
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

          <div className="flex gap-4 items-center">
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

            {/* PROFILE SECTION */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen((prev) => !prev)}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100"
              >
                <User size={18} />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md flex flex-col text-sm">
                  <Link href="/profile" className="px-4 py-2 hover:bg-gray-100">
                    My Profile
                  </Link>
                  <Link href="/orders" className="px-4 py-2 hover:bg-gray-100">
                    Orders
                  </Link>
                  <Link
                    href="/settings"
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button className="text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                    Logout
                  </button>
                </div>
              )}
            </div>
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
          <Link href={"/"}>Home</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/signup"}>SignUp</Link>

          {/* PROFILE (mobile) */}
          <Link href={"/profile"}>Profile</Link>
        </div>
      </nav>
      <div className="w-full border-t border-gray-200"></div>
    </header>
  );
};

export default Navbar;
