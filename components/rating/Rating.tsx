import { Star } from "lucide-react";

type RatingProps = {
  value: number;
};

function Rating({ value = 4 }: RatingProps) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`shrink-0 size-4 fill-current ${
            value > i ? "text-green-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default Rating;
