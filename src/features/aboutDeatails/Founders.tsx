
"use client";
import { foundersData } from "@/components/constant/aboutData";
import { Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Image from "next/image";


const Founders = () => {
  return (
    <div className="lg:flex flex-row justify-between  items-center gap-10 wrapper">
      {foundersData.map(({ id, image, title, subTitle }) => (
        <div key={id}>
          <div className="w-[370px] bg-[#F5F5F5] pt-6 ">
            <Image src={image} alt="tomCruise" width={40} height={40} className="text-center m-auto" />
          </div>
          <p className="text-2xl font font-medium pt-2">{title}</p>
          <p className="text-base font-normal py-1">{subTitle}</p>
          <div className="text-black flex gap-4 items-center py-1">
            <Twitter/>
            <Instagram/>
            <LinkedinIcon />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Founders;
