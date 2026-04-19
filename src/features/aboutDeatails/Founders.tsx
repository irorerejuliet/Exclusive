// "use client";
// import { foundersData } from "@/components/constant/aboutData";
// import { Instagram, LinkedinIcon, Twitter } from "lucide-react";
// import Image from "next/image";

// const Founders = () => {
//   return (
//     <div className="lg:flex flex-row justify-between  items-center gap-10 wrapper mb-24">
//       {foundersData.map(({ id, image, title, subTitle }) => (
//         <div key={id}>
//           <div className=" bg-[#F5F5F5] pt-9 px-10 ">
//             <Image
//               src={image}
//               alt="tomCruise"
//               width={236}
//               height={397}
//               className="object-cover mx-auto"
//             />
//           </div>
//           <p className="text-2xl font font-semibold pt-2">{title}</p>
//           <p className="text-base font-normal py-1">{subTitle}</p>
//           <div className="text-black flex gap-4 items-center py-1">
//             <Twitter />
//             <Instagram />
//             <LinkedinIcon />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Founders;

"use client";
import { foundersData } from "@/components/constant/aboutData";
import { Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Image from "next/image";

const Founders = () => {
  return (
    <div className="wrapper px-4 mb-20">
      <div className="flex md:flex-row flex-col justify-between  items-center gap-10 wrapper mb-24">
        {foundersData.map(({ id, image, title, subTitle }) => (
          <div key={id} className="text-center">
            <div className="bg-[#F5F5F5] pt-6 px-6">
              <Image
                src={image}
                alt={title}
                width={250}
                height={350}
                className="object-cover mx-auto"
              />
            </div>

            <p className="text-xl md:text-2xl font-semibold mt-3">{title}</p>
            <p className="text-sm md:text-base text-gray-600">{subTitle}</p>

            <div className="flex justify-center gap-4 mt-2">
              <Twitter size={18} />
              <Instagram size={18} />
              <LinkedinIcon size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;