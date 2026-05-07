import React from "react";
import { Skeleton } from "./Skeleton";

const ProfileSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 lg:px-16 py-10">
      <Skeleton className="h-4 w-40 mb-10" />

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-6">
          <Skeleton className="h-5 w-40" />

          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>

          <Skeleton className="h-10 w-full mt-6" />
        </aside>

        {/* Main */}
        <main className="w-full lg:w-3/4 bg-white rounded-xl p-6 sm:p-10 border border-gray-100 space-y-8">
          <Skeleton className="h-6 w-48" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-12 w-full" />
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-4 pt-6">
            <Skeleton className="h-12 w-24" />
            <Skeleton className="h-12 w-40" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
