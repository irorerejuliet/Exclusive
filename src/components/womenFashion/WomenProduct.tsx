import React, { useEffect, useState } from "react";
import { womenCollections } from "../Constants/womenCollections";

const WomenProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWomenCollection = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/womens-dresses",
        );
        const data = await response.json();
        console.log(data.products);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getWomenCollection();
  }, []);
  return (
    <div className="wrapper  py-20">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:px-0 px-4">
        {/* {womenCollections.map(({ id, title, image, price }) => (
          
          <div className="bg-white p-4 shadow rounded relative border border-gray-200 transform transition-transform duration-300 hover:scale-105" key={id}>
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-500">{price}</p>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
            <div
              className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-100"
            >
              <span className="group-hover:hidden">+</span>
              <span className="hidden group-hover:block">Add to Cart</span>
            </div>
          </div>
        ))} */}
        {loading && <p>Loading...</p>}

        {products.map(({ id, title, thumbnail, price }) => (
          <div key={id} className="bg-white p-4 shadow rounded">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-500">${price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenProduct;
