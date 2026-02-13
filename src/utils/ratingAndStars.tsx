import { Star, StarHalf } from "lucide-react";

export const ratingAndStars = (rating: number) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<Star key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<StarHalf key={i} className="text-yellow-400" />);
    } else {
      stars.push(<Star key={i} className="text-yellow-400" />);
    }
  }

  return stars;
};
