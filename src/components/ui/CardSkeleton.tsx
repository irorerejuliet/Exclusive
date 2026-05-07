import { Skeleton } from "./Skeleton";

const CardSkeleton = () => {
  return (
    <div className="w-full max-w-65 space-y-3">
      {/* IMAGE CARD */}
      <div className="rounded-xl overflow-hidden">
        <Skeleton className="h-45 w-full" />

        <div className="h-12 w-full">
          <Skeleton className="h-full w-full" />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="space-y-2 px-1">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />

        <div className="flex gap-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-10" />
        </div>

        <div className="flex gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-6" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
