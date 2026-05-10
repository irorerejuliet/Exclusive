"use client";

import useProfile from "@/hooks/useProfile";
import ProfileSkeleton from "@/components/ui/ProfileSkeleton";
import useAuthGuard from "@/hooks/useAuthGuard";


const ProfilePage = () => {

  useAuthGuard()
  const { profile, status, error } = useProfile();

  
  if (status === "pending") {
    return <ProfileSkeleton />;
  }
  if (status === "error") {
    return (
      <div className="border border-red-200 bg-red-50 p-4 rounded">
        <p className="text-red-600">
          {error?.message || "Failed to load products."}
        </p>
      </div>
    );
  }

  return (
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
            value={profile?.firstname || ""}
            className="w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none rounded-md p-3 transition"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            value={profile?.firstname || ""}
            className="w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none rounded-md p-3 transition"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={profile?.email}
            className="w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none rounded-md p-3 transition"
          />
        </div>

        {/* <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                placeholder="Kingston, 5236, United Kingdom"
                className="w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none rounded-md p-3 transition"
              />
            </div> */}

        {/* Password Section */}
        {/* <div className="md:col-span-2 mt-4 space-y-4">
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
            </div> */}

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
  );
};

export default ProfilePage;
