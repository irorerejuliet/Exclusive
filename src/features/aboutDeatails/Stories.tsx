
"use client";
import Image from "next/image";
import Link from "next/link";

const Stories = () => {
  return (
    <div className="wrapper px-4 md:px-0">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 py-10 text-sm md:text-base">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/about" className="font-medium">
          About
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-10">
        {/* Text */}
        <div className="w-full lg:w-1/2 space-y-6 text-base md:text-lg">
          <h3 className="text-3xl md:text-4xl font-bold">Our Story</h3>
          <p>
             Launced in 2015, Exclusive is South Asia’s premier online
            shopping  makterplace with an active presense in Bangladesh.
            Supported by wide  range of tailored marketing, data and service
            solutions, Exclusive  has 10,500 sallers and 300 brands and serves
            3 millioons customers  across the region. {" "}
          </p>
          {" "}
          <p>
           Exclusive has more than 1 Million products to offer, growing at a
           very fast. Exclusive offers a diverse assotment in categories 
            ranging from consumer. 
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/story.svg"
            alt="story"
            width={600}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Stories;