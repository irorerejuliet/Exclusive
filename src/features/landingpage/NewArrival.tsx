import Image from "next/image";

const NewArrival = () => {
  return (
    <div className="px-6 md:px-0 wrapper">
      {/* Header */}
      <div className="flex gap-3 items-center mb-3">
        <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
        <p className="text-primary text-base font-semibold">Featured</p>
      </div>

      <h3 className="text-3xl font-semibold mb-8">New Arrival</h3>

      {/* GRID WRAPPER */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* PLAYSTATION CARD */}
        <div className="relative w-full">
          <div className="bg-black text-white w-full p-10 rounded-lg relative overflow-hidden">
            <Image
              src="/images/PlayStation-5.svg"
              alt=""
              width={40}
              height={40}
              className="w-full  mx-auto"
            />

            <div className="absolute md:bottom-36 bottom-6 left-10 right-10 space-y-2">
              <h5 className="text-2xl font-semibold">PlayStation 5</h5>
              <p className="text-sm">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="underline text-base font-medium cursor-pointer">
                Shop now
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="space-y-6">
          {/* Women Collection */}
          <div className="bg-black text-white p-6 rounded-lg relative overflow-hidden">
            <Image
              src="/images/WomensCollection.svg"
              alt=""
              width={30}
              height={30}
              className="w-full max-w-md ml-auto"
            />

            <div className="absolute top-1/3 left-6 right-6 space-y-2">
              <h5 className="text-2xl font-semibold">Women’s Collections</h5>
              <p className="text-sm">
                Featured woman collections that give you another vibe.
              </p>
              <p className="underline text-base font-medium cursor-pointer">
                Shop now
              </p>
            </div>
          </div>

          {/* SPEAKER + PERFUME (two cards) */}
          <div className="grid sm:grid-cols-2 gap-5 pb-20">
            {/* Speakers */}
            <div className="bg-[#1F1F1F] text-white px-6 rounded-lg relative">
              <Image
                src="/images/Speakers.svg"
                alt="speaker"
                width={250}
                height={250}
                className="mx-auto pt-4 w-full "
              />

              <div className="absolute bottom-6 left-6 space-y-1">
                <h5 className="text-2xl font-semibold">Speakers</h5>
                <p className="text-sm">Amazon wireless speakers</p>
                <p className="underline text-base font-medium cursor-pointer">
                  Shop now
                </p>
              </div>
            </div>

            {/* Perfume */}
            <div className="bg-[#2C2C2C] text-white p-6 rounded-lg relative">
              <Image
                src="/images/Perfume.svg"
                alt="perfumes"
                width={40}
                height={40}
                className="mx-auto pt-4 w-full "
              />

              <div className="absolute bottom-6 left-6 space-y-1">
                <h5 className="text-2xl font-semibold">Perfume</h5>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                <p className="underline text-base font-medium cursor-pointer">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
