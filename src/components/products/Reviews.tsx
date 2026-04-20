import Image from "next/image";
import React from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      image: "/images/frank.jpeg",
      rating: "★★★★★",
      comment:
        "The product quality is excellent. Delivery was fast and packaging was clean. Definitely worth the price.",
      time: "2 days ago",
    },
    {
      id: 2,
      name: "Mary Smith",
      image: "/images/annable.jpeg",
      rating: "★★★★☆",
      comment:
        "Good product overall. I like the design and functionality, but delivery took slightly longer than expected.",
      time: "1 week ago",
    },
  ];

  return (
    <section>
      {/* REVIEWS */}
      <div className="mt-16 bg-white border rounded-xl p-6 md:p-8 shadow-sm">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-black">
            Customer Reviews
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-yellow-500 font-semibold">4.5</span>
            <span>•</span>
            <span>150 verified reviews</span>
          </div>
        </div>

        {/* REVIEW GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border rounded-lg p-4 space-y-3 hover:shadow-md transition"
            >
              {/* USER */}
              <div className="flex items-center gap-3">
                <Image
                  src={review.image}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold"
                />

                <div>
                  <p className="font-medium text-sm text-black">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-400">Verified Buyer</p>
                </div>
              </div>

              {/* STAR */}
              <div className="text-yellow-500 text-sm">{review.rating}</div>

              {/* COMMENT */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {review.comment}
              </p>

              <p className="text-xs text-gray-400">{review.time}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <button className="text-sm font-medium text-red-500 hover:underline">
            View all reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
