import Link from "next/link";

const ProfilePage = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center my-20 text-sm">
        <Link href={"/"}>Home</Link> /
          <Link href={"/account"} className="font-medium">
            My Account
          </Link>
        </div>
        <p className="text-sm font-medium">
          Welcome! <span className="text-primary">Md Rimel</span>
        </p>
      </div>
      <div className="grid items-center md:grid-cols-2 grid-cols-1 pb-24">
        <div>
          <div>
            <h4 className="text-base font-medium">Manage My Account</h4>
            <div className="ml-6 space-y-1 py-3">
              <Link href={"/about"} className="text-base font-normal text-primary">
                My Profile
              </Link>
              <p className="text-base font-normal text-[#B0B0B0]">
                Address Book
              </p>
              <p className="text-base font-normal text-[#B0B0B0]">
                My Payment Options
              </p>
            </div>
          </div>
          <div className="pb-4">
            <h4 className="text-base font-medium py-2">My Orders</h4>
            <div className="ml-6 space-y-1">
              <p className="text-base font-normal text-[#B0B0B0]">My Returns</p>
              <p className="text-base font-normal text-[#B0B0B0]">
                My Cancellations
              </p>
            </div>
          </div>
          <h4 className="text-base font-medium">My WishList</h4>
        </div>

        {/* Edit Profile */}
        <div className="shadow-md w-[870px] p-10">
          <h4 className="text-xl text-primary font-medium">
            Edit Your Profile
          </h4>
          <div className="flex gap-10">
            <div className="space-y-6">
              <div className="">
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  placeholder="Md"
                  className="shadow bg-[#F5F5F5] py-2 px-4 w-[330px] rounded-4 mt-2"
                />
              </div>
              <div>
                <label htmlFor="name">Last Name</label>
                <input
                  type="text"
                  placeholder="Rimel"
                  className="shadow bg-[#F5F5F5] py-2 px-4 w-[330px] rounded-4 mt-2"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label htmlFor="name">Email</label>
                <input
                  type="text"
                  placeholder="irorerejuliet@gmail.com"
                  className="shadow bg-[#F5F5F5] py-2 px-4 w-[330px] rounded-4 mt-2"
                />
              </div>
              <div>
                <label htmlFor="name">Address</label>
                <input
                  type="text"
                  placeholder="Kingston, 5236, United state"
                  className="shadow bg-[#F5F5F5] py-2 px-4 w-[330px] rounded-4 mt-2"
                />
              </div>
            </div>
          </div>
          <div className="pt-10">
            <h4 className="pb-4">Password Changes</h4>
            <input
              type="text"
              placeholder="Current Password"
              className="shadow bg-[#F5F5F5] py-2 px-4 w-full rounded-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="New Password"
              className="shadow bg-[#F5F5F5] py-2 px-4 w-full rounded-4 my-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Comfirm Password"
              className="shadow bg-[#F5F5F5] py-2 px-4 w-full rounded-4  focus:outline-none"
            />
            <div className="flex justify-end items-center gap-5 pt-8">
              <p className="text-base font-medium">Cancel</p>
              <button className="text-base font-medium bg-primary rounded-4 text-white w-[214px] py-2 px-4 ">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
<input
  type="text"
  placeholder="What are looking for "
  className="focus:outline-none"
/>;

export default ProfilePage;
