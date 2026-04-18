"use client";

import React from "react";
import Link from "next/link";
import {
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
  Bell,
  HelpCircle,
} from "lucide-react";

const ProfilePage = () => {
  // Navigation items based on your project requirements
  const sidebarLinks = [
    { name: "Manage My Account", icon: <User size={20} />, active: true },
    { name: "My Orders", icon: <Package size={20} />, active: false },
    { name: "My Wishlist", icon: <Heart size={20} />, active: false },
    { name: "Addresses", icon: <MapPin size={20} />, active: false },
    { name: "Notifications", icon: <Bell size={20} />, active: false },
    { name: "Help Center", icon: <HelpCircle size={20} />, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-black px-4 sm:px-8 lg:px-16 py-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-10">
        <Link href="/" className="hover:text-black transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-black font-medium">My Account</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-1/4 space-y-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Manage My Account</h3>
            <ul className="space-y-3">
              {sidebarLinks.map((link) => (
                <li key={link.name}>
                  <button
                    className={`flex items-center gap-3 w-full px-3 py-2 rounded-md transition ${
                      link.active
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <button className="flex items-center gap-3 text-red-500 hover:text-red-600 transition px-3">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="w-full lg:w-3/4 bg-white shadow-sm rounded-xl p-6 sm:p-10 border border-gray-100">
          <h2 className="text-2xl font-semibold text-primary mb-8">
            Edit Your Profile
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Form Fields */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="Md"
                className="w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none rounded-md p-3 transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Rimel"
                className="w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none rounded-md p-3 transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="rimel1111@gmail.com"
                className="w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none rounded-md p-3 transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                placeholder="Kingston, 5236, United Kingdom"
                className="w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none rounded-md p-3 transition"
              />
            </div>

            {/* Password Section */}
            <div className="md:col-span-2 mt-4 space-y-4">
              <h3 className="font-medium text-gray-900">Password Changes</h3>
              <input
                type="password"
                placeholder="Current Password"
                className="w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none rounded-md p-3 transition"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none rounded-md p-3 transition"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none rounded-md p-3 transition"
              />
            </div>

            {/* Actions */}
            <div className="md:col-span-2 flex justify-end items-center gap-6 mt-6">
              <button
                type="button"
                className="text-gray-600 hover:text-black transition font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-primary text-white px-10 py-4 rounded-md font-medium hover:opacity-90 transition shadow-lg shadow-primary/20"
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
