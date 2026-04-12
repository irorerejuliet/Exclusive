
"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  title: string;
  description: string;
  price: number;
  stock: number;
  category_id: number;
  thumbnail: string;
}

interface CreatePostPayload {
  title?: string;
  price?: number;
  stock?: number;
}

const AddProduct = () => {
    const queryClient = useQueryClient();
    const router = useRouter()
  const [values, setValues] = useState<FormData>({
    title: "",
    description: "",
    price: 0,
    stock: 0,
    category_id: 0,
    thumbnail: "",
  });

 
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setValues((prev) => ({...prev, [name]:  type === "number" ? Number(value) : value}))
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: CreatePostPayload) => {
      const res = await axios.post("/api/products", payload);
      return res.data;
    },
    onSuccess: (data) => {
        if(data.success) {
            queryClient.invalidateQueries({ queryKey: ["post"] });
            router.push("/")
        }
    }
  });


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   if (
     !values.title ||
     !values.description ||
     values.price <= 0 ||
     values.stock <= 0 ||
     !values.thumbnail
   ) {
     alert("Please fill in all the required fields correctly");
     return;
   }
        
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
              required
              value={values.title}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              placeholder="Enter product title"
            />
           
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Description
            </label>
            <textarea
              name="description"
              required
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
              required
              value={values.price}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              placeholder="Enter price"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-1 text-sm font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              required
              value={values.stock}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              placeholder="Enter stock quantity"
            />
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
