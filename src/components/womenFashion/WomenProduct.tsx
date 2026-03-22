// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// const WomenProduct = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getWomenCollection = async () => {
//       try {
//         const response = await fetch(
//           "https://dummyjson.com/products/womens-dresses",
//         );
//         const data = await response.json();
//         console.log(data.products);
//         setProducts(data.products);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getWomenCollection();
//   }, []);
//   return (
//     <div className="wrapper  py-20">
//       <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:px-0 px-4">
//         {loading && <p>Loading...</p>}
//         {products.map(({ id, title, thumbnail, price }) => (
//           <div key={id} className="bg-white p-4 shadow rounded">
//             <div>
//               <Image
//                 src={thumbnail}
//                 alt={title}
//                 width={120}
//                 height={48}
//                 className="w-full object-contain mb-4"
//               />
//             </div>

//             <h3 className="text-lg font-semibold">{title}</h3>
//             <p className="text-gray-500">${price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WomenProduct;
