import Image from "next/image";
import Link from "next/link";


const ContactDetails = () => {
  return (
    <section className="bg-white text-black">
      <div className="wrapper">
        <div className="flex  items-center gap-2 py-20">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/about" className="text-lg font-normal">
            About
          </Link>
        </div>
        <div className="flex  items-center gap-10 py-20  ">
          <div className="shadow border border-gray-100 w-85 h-114.25 pt-4 px-8 rounded-md">
            <div className="space-y-6 pb-4">
              <div className="gap-2 flex items-center">
                <button className="text-white bg-primary rounded-full p-4">
                  <Image
                    src="/images/call.svg"
                    alt="callIcon"
                    width={12}
                    height={12}
                  />
                </button>
                <span className="text-base font-bold">Call To Us</span>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <div className="border-b  my-4"></div>
            <div className="space-y-4">
              <div className="gap-2 flex items-center">
                <button className="text-white bg-primary rounded-full p-4">
                  <Image
                    src="/images/message.svg"
                    alt="callIcon"
                    width={12}
                    height={12}
                  />
                </button>
                <span className="text-base font-bold py-6">Write To Us</span>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className="w-250   bg-white text-[#000000] p-8 rounded-md shadow">
            <form className="space-y-6">
              {/* Top Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full p-4 rounded-xl bg-[#F5F5F5] border border-gray-200 focus:outline-none focus:ring-2 "
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full p-4 rounded-xl bg-[#F5F5F5] border border-gray-200 focus:outline-none focus:ring-2"
                />
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="w-full p-4 rounded-xl bg-[#F5F5F5] border border-gray-200 focus:outline-none focus:ring-2 "
                />
              </div>

              <textarea
                rows={8}
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-[#F5F5F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-4 bg-red-500 text-white font-medium rounded-xl shadow hover:bg-red-600 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails
