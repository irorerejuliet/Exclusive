

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";



const Footer = () => {
  return (
    <footer className=" bg-black text-white py-12 ">
      <section className="wrapper md:py-0 py-5 md:px-0 px-6">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 justify-between ">
          {/* Exclusive */}
          <div>
            <Link href={"/"} className="text-2xl font-bold">
              Exclusive
            </Link>
            <p className="mb-3 text-xl">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex items-center border border-white rounded-lg p-2 w-full max-w-xs justify-between">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent text-white outline-none w-full pr-2"
              />
              <Image
                src="/images/email-icon.svg"
                alt="email-icon"
                width={24}
                height={24}
              />
            </div>
          </div>

          {/* Support */}
          <div className="ml-10">
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <p className="mb-2">111 Bijoy sarani, Dhaka,</p>
            <p className="mb-2">DH 1515, Bangladesh.</p>
            <p className="mb-2">exclusive@gmail.com</p>
            <p className="mb-2">+88015-88888-9999</p>
          </div>

          {/* Account */}
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-4">Account</h3>
            <div className="flex flex-col">
              <Link href={"/account"}>My Account</Link>
              <Link href={"/login"}>Login / Signup</Link>
              <Link href={"/cart"}>Cart</Link>
              <Link href={"/wishlists"}>Wishlist</Link>
              <Link href={""}>Shop</Link>
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
            <Link href={""}>Privacy Policy</Link>
            <Link href={""}>Terms Of Use</Link>
            <Link href={""}>FAQ</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Download App</h3>
            <p className="text-sm mb-3">Save $3 with App New User Only</p>
            <div className="flex gap-3 mb-4">
              <Image
                src="/images/Qr Code.svg"
                alt="QR Code"
                width={80}
                height={80}
              />
              <div className="flex flex-col gap-2">
                <Image
                  src="/images/google.svg"
                  alt="Google Play"
                  width={110}
                  height={40}
                />
                <Image
                  src="/images/AppStore.svg"
                  alt="App Store"
                  width={110}
                  height={40}
                />
              </div>
            </div>
            <div className="flex gap-4 text-lg">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </div>
          </div>
        </div>

        <div className="text-center border-t border-gray-700 mt-10 pt-6 text-sm">
          © Copyright Rimel 2022. All right reserved
        </div>
      </section>
    </footer>
  );
};

export default Footer;
