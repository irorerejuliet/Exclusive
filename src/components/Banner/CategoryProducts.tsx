import useCategories from "@/hooks/useCategories";
import Image from "next/image";
import Link from "next/link";

const CategoryProducts = () => {
  const { categories, error, status } = useCategories();

 if (status === "pending") {
   return (
     <div className="hidden lg:block w-64 pr-6 ">
       {[...Array(8)].map((_, index) => (
         <div
           key={index}
           className="h-6 bg-gray-200 rounded animate-pulse mb-4 mt-10"
         />
       ))}
     </div>
   );
 }


  if (status === "error") {
    return (
      <div className="border border-red-200 bg-red-50 p-4 rounded">
        <p className="text-red-600">
          {error instanceof Error ? error.message : "Failed to load categories"}
        </p>
      </div>
    );
  }

  

  return (
    <div className="hidden lg:block w-64 border-r pr-6 text-black">
      {categories.slice(0, 10).map((category, index: number) => (
        <div
          key={category.id}
          className="flex justify-between items-center py-3 text-[16px] cursor-pointer hover:text-black/70 capitalize"
        >
          <Link
            className="text-black hover:text-black/70 capitalize"
            href={`/categories/${category.id}`}
          >
            {category.name}
          </Link>

          {index < 2 && (
            <Image
              src="/images/GreaterThanIcon.svg"
              alt="arrow"
              className="w-4 h-4 opacity-70"
              width={16}
              height={16}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryProducts;
