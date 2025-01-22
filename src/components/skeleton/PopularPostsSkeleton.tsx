import { Skeleton } from "@/components/ui/skeleton"

const PopularPostsSkeleton = () => {
  return (
    <>
      <div className="flex items-center gap-2 py-2">
        <Skeleton className="h-6 w-6 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </>
  )
};

export default PopularPostsSkeleton;
