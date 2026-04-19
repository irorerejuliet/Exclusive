import Image from "next/image";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <section className="bg-white text-black pt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 py-10 text-sm text-gray-600">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/about" className="text-black font-medium">
            About
          </Link>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-10 pb-20">
          {/* LEFT CARD */}
          <div className="w-full lg:w-1/3 border border-gray-100 shadow-sm rounded-xl p-6">
            {/* CALL */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-white p-3 rounded-full">
                  <Image
                    src="/images/call.svg"
                    alt="callIcon"
                    width={14}
                    height={14}
                  />
                </div>
                <span className="font-bold">Call To Us</span>
              </div>

              <p className="text-sm text-gray-600">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm">Phone: +8801611112222</p>
            </div>

            <div className="border-b my-6"></div>

            {/* EMAIL */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-white p-3 rounded-full">
                  <Image
                    src="/images/message.svg"
                    alt="messageIcon"
                    width={14}
                    height={14}
                  />
                </div>
                <span className="font-bold">Write To Us</span>
              </div>

              <p className="text-sm text-gray-600">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm">Emails: customer@exclusive.com</p>
              <p className="text-sm">Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-2/3 border border-gray-100 shadow-sm rounded-xl p-6">
            <form className="space-y-6">
              {/* INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="w-full p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* MESSAGE */}
              <textarea
                rows={7}
                placeholder="Your Message"
                className="w-full p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
              />

              {/* BUTTON */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
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
};

export default ContactDetails;
