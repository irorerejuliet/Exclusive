import { Skeleton } from "./Skeleton";


const CardSkeleton = () => {
  return (
    <div className="w-[270px] space-y-4">
      <Skeleton className="h-[250px] w-full rounded-lg" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  );
};

export default CardSkeleton;
