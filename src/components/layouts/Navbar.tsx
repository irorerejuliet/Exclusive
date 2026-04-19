"use client";

import { useCartCount } from "@/hooks/useCart";
import { Menu, X, User, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "SignUp", href: "/sign-up" },
];

const categories = [
  "Beauty",
  "Fragrances",
  "Furniture",
  "Groceries",
  "Home Decoration",
  "Kitchen Accessories",
  "Laptops",
  "Mens Shirts",
  "Mens Shoes",
  "Mens Watches",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const cartCount = useCartCount();

  return (
    <header className="bg-white text-black border-b">
      <nav className="flex justify-between items-center py-4 wrapper relative">
        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/" className="text-2xl md:text-4xl font-bold">
            Exclusive
          </Link>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex gap-6 items-center text-base">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP RIGHT SIDE */}
        <div className="hidden md:flex gap-4 items-center">
          {/* Search */}
          <div className="flex gap-2 border border-gray-200 shadow rounded-md py-2 px-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="focus:outline-none"
            />
            <Image
              src="/images/SearchIcon.svg"
              alt="search"
              width={20}
              height={20}
            />
          </div>

          {/* Icons */}
          <div className="flex gap-4 items-center">
            <Image
              src="/images/HeartIcon.svg"
              alt="wishlist"
              width={28}
              height={28}
            />

            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile */}
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

        {/* MOBILE RIGHT ICONS */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <User size={20} />
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex flex-col gap-4">
          {/* Close button */}
          <button onClick={() => setOpen(false)}>
            <X />
          </button>

          {/* Nav Links */}
          <div className="flex flex-col gap-3 text-lg">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-4">
            <p className="text-sm text-gray-500 font-semibold mb-2">
              Categories
            </p>

            <div className="flex flex-col gap-2 text-base">
              {categories.map((cat) => (
                <Link key={cat} href="#">
                  {cat}
                </Link>
              ))}
            </div>
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
