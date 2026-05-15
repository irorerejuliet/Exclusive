export interface CategoryApiResponse {
  success: boolean;
  message: string;
  data: Category[];
}

export interface Category {
  created_at: string;
  name: string;
  slug: string;
  url: string;
  id: string;
}


