

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";



const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <section className="wrapper py-10 px-6 md:px-0">
        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Exclusive */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              Exclusive
            </Link>
            <p className="mb-3 text-xl mt-3">Subscribe</p>
            <p className="mb-4 text-sm">Get 10% off your first order</p>

            <div className="flex items-center border border-white rounded-lg p-2 w-full max-w-xs justify-between">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent text-white outline-none w-full pr-2 text-sm"
              />
              <Image
                src="/images/email-icon.svg"
                alt="email-icon"
                width={20}
                height={20}
              />
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <p className="text-sm mb-2">Nigeria</p>
            <p className="text-sm mb-2">Osun, Osogbo</p>
            <p className="text-sm mb-2">irorerejuliet@gmail.com</p>
            <p className="text-sm mb-2">+2349022149874</p>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/account">My Account</Link>
              <Link href="/login">Login / Signup</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/wishlists">Wishlist</Link>
              <Link href="#">Shop</Link>
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/PrivacyAndPolicy">Privacy Policy</Link>
              <Link href="/termsAndCondition">Terms Of Use</Link>
              <Link href="/frequentlyAskQuestion">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="text-sm mb-3">Save $3 with App New User Only</p>

            <div className="flex gap-3 mb-4">
              <Image
                src="/images/Qr Code.svg"
                alt="QR Code"
                width={70}
                height={70}
              />
              <div className="flex flex-col gap-2">
                <Image
                  src="/images/google.svg"
                  alt="Google Play"
                  width={100}
                  height={35}
                />
                <Image
                  src="/images/AppStore.svg"
                  alt="App Store"
                  width={100}
                  height={35}
                />
              </div>
            </div>

            <div className="flex gap-4 text-lg">
              <Link
                href={
                  "https://www.facebook.com/share/16iQ3qRGjV/?mibextid=wwXIfr"
                }
              >
                <Facebook />
              </Link>
              <Link href={"https://x.com/irorerejuliet1?s=21"}>
                <Twitter />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/irorere_julet?igsh=dW9tem9sbWM0Z2Vk&utm_source=qr"
                }
              >
                <Instagram />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                }
              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center border-t border-gray-700 mt-10 pt-6 text-sm">
          © Copyright Rimel 2022. All right reserved
        </div>
      </section>
    </footer>
  );
};

export default Footer;
