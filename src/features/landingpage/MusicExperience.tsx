import { salesTime } from "@/components/constant/salesData";
import Image from "next/image";


const MusicExperience = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row justify-between items-center py-16 px-6 md:px-20 wrapper">
      {/* LEFT TEXT SECTION */}
      <div className="text-center md:text-left">
        <p className="text-[#00FF66] text-base font-bold">Categories</p>

        <h2 className="text-3xl md:text-5xl leading-tight md:leading-[60px] tracking-wide font-semibold mt-2">
          Enhance Your <br /> Music Experience
        </h2>

        {/* TIMER CIRCLES */}
        <div className="flex gap-4 justify-center md:justify-start mt-6">
          {salesTime.map(({ id, title, time }) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center rounded-full bg-white text-black size-16 md:size-[62px]"
            >
              <span className="text-lg md:text-xl font-bold">{time}</span>
              <h3 className="text-[10px] md:text-xs font-medium text-center">
                {title}
              </h3>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button className="text-lg bg-[#00FF66] text-white py-2 px-4 w-[171px] rounded mt-6 md:mt-4 mx-auto md:mx-0">
          Buy now
        </button>
      </div>

      {/* IMAGE SECTION */}
      <Image
        src="/images/JBL_BOOMBOX_2_HERO_image.svg"
        alt="jblBoomBox"
        width={50}
        height={50}
        className="w-full max-w-xs md:max-w-md lg:max-w-xl mt-10 md:mt-0"
      />
    </div>
  );
};

export default MusicExperience;
