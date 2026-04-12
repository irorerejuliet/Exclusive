
"use client"
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  title: string;
  description: string;
  price: number;
  stock: number;
  category_id: number;
  thumbnail: string;
}

interface Errors {
  title?: string;
  price?: string;
  stock?: string;
}

const AddProduct = () => {
  const [values, setValues] = useState<FormData>({
    title: "",
    description: "",
    price: 0,
    stock: 0,
    category_id: 0,
    thumbnail: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "stock" || name === "category_id"
          ? Number(value)
          : value,
    }));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: FormData) => {
      const res = await axios.post("/api/products", payload);
      return res.data;
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Errors = {};

    if (!values.title) newErrors.title = "Title is required";
    if (values.price <= 0) newErrors.price = "Price must be greater than 0";
    if (values.stock < 0) newErrors.stock = "Stock cannot be negative";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    mutate(values);
  };

  return (
    <section className="bg-white text-black pt-10">
      <div className="max-w-xl mx-auto  p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block mb-1 text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              placeholder="Enter product title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={values.description}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              placeholder="Enter product description"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 text-sm font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={values.price}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              placeholder="Enter price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price}</p>
            )}
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-1 text-sm font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={values.stock}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              placeholder="Enter stock quantity"
            />
            {errors.stock && (
              <p className="text-red-500 text-sm">{errors.stock}</p>
            )}
          </div>

          {/* Category ID */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Category ID
            </label>
            <input
              type="number"
              name="category_id"
              value={values.category_id}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              placeholder="Enter category id"
            />
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Thumbnail URL
            </label>
            <input
              type="text"
              name="thumbnail"
              value={values.thumbnail}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              placeholder="Enter image URL"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-black text-white p-2 rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {isPending ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
