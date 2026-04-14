export interface ProductResponseData {
  success: boolean;
  message: string;
  data: Products[];
}
export interface ProductSignleResponseData {
  success: boolean;
  message: string;
  data: Products;
}

export interface Products {
  created_at: string;
  title: string;
  rating: number;
  stock: number;
  description: string;
  category: string;
  discount_percentage: number;
  price: string;
  tags: string[];
  brand?: string;
  weight: number;
  warranty_information: string;
  shipping_information: string;
  availability_status: string;
  return_policy?: string;
  minimum_order_quantity?: number;
  images: string[];
  thumbnail: string;
  sku: string;
  id: string;
}
