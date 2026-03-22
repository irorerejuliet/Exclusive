export interface CategoryApiResponse {
  success: boolean;
  message: string;
  data: Category[];
}

export interface Category {
  id: number;
  created_at: string;
  name: string;
  title: string;
  description: string;
}
