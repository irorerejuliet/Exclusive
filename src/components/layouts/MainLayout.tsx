"use client"

import Link from "next/link";
import React, { ReactNode } from "react";
import { sidebarLinks } from "../constant/sidebarLinks";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useQueryClient } from "@tanstack/react-query";


interface MainlayoutProps {
  children: ReactNode;
}
const MainLayout = ({ children }: MainlayoutProps) => {
    const router = useRouter();
    const supabase = createClient();
    const queryClient = useQueryClient();

    const handleLogout = async () => {
      // SIGN USER OUT
      const { error } = await supabase.auth.signOut();

      // HANDLE ERROR
      if (error) {
        console.log(error.message);
        return;
      }

      // CLEAR REACT QUERY CACHE
      queryClient.clear();

      // REDIRECT USER
      router.push("/login");
    };



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
              {sidebarLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.name}>
                    <button
                      className={`flex items-center gap-3 w-full px-3 py-2 rounded-md transition ${
                        link.active
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon size={20} />
                      <span>{link.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <button onClick={handleLogout} className="flex items-center gap-3 text-red-500 hover:text-red-600 transition px-3">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
