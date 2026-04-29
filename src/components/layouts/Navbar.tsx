"use client";

import { useCartCount } from "@/hooks/useCart";
import { Menu, X, User, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories, navLinks } from "../constant/navLinks";
import SearchBar from "./SearchBar";




const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const cartCount = useCartCount();

  

  return (
    <header className="bg-white text-black border-b fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center py-4 wrapper relative px-4">
        <div className="flex items-center gap-3">
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link
            href="/"
            className="text-2xl md:text-4xl font-bold hidden lg:block"
          >
            Exclusive
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6 items-center text-base">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex gap-4 items-center">
        <SearchBar/>

          <div className="flex gap-4 items-center">
            <Link href={"/wishlists"}>
              <Image
                src="/images/HeartIcon.svg"
                alt="wishlist"
                width={28}
                height={28}
              />
            </Link>

            <Link href="/cart" className="relative">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
              >
                <User size={18} />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md text-sm flex flex-col">
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

        {/* MOBILE RIGHT */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <User size={20} />
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full flex flex-col">
          {/* HEADER */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="text-2xl md:text-4xl font-bold ">
              Exclusive
            </Link>
            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          <div className="p-4 border-b">
            {/* <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) =>{
                  if(e.key === "Enter") handleSearch()
                }}
                placeholder="Search products..."
                className="bg-transparent w-full text-sm focus:outline-none"
              />
            </div> */}
            <SearchBar/>
          </div>

          {/* NAV LINKS */}
          <div className="p-4 border-b">
            <p className="text-xs text-gray-500 uppercase mb-3">Navigation</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium hover:text-red-500 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="p-4 flex-1 overflow-y-auto">
            <p className="text-xs text-gray-500 uppercase mb-3">Categories</p>

            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href="#"
                  className="text-sm bg-gray-100 hover:bg-gray-200 
                  px-3 py-2 rounded-md transition"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="p-4 border-t flex items-center justify-between">
            <button className="flex items-center gap-2 text-sm">
              <User size={18} />
              Account
            </button>

            <Link href="/cart" className="flex items-center gap-2 text-sm">
              <ShoppingCart size={18} />
              Cart ({cartCount})
            </Link>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </header>
  );
};

export default Navbar;