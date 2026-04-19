import { Skeleton } from "./Skeleton";

const CardSkeleton = () => {
  return (
    <div className="w-full max-w-[260px] space-y-3 animate-pulse">
      {/* IMAGE CARD */}
      <div className="bg-gray-200 rounded-xl overflow-hidden">
        <Skeleton className="h-[180px] w-full" />

        {/* Reserve space for hover button */}
        <div className="h-12 w-full">
          <Skeleton className="h-full w-full" />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="space-y-2 px-1">
        <Skeleton className="h-3 w-16 rounded" /> {/* category */}
        <Skeleton className="h-4 w-40 rounded" /> {/* title */}
        <Skeleton className="h-3 w-full rounded" /> {/* desc */}
        <Skeleton className="h-3 w-3/4 rounded" />
        {/* PRICE */}
        <div className="flex gap-2">
          <Skeleton className="h-4 w-16 rounded" />
          <Skeleton className="h-4 w-10 rounded" />
        </div>
        {/* RATING */}
        <div className="flex gap-2">
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-4 w-6 rounded" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
