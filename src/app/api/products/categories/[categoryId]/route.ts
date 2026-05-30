import { createClient } from "@/lib/supabase/server";
import { apiResponse } from "@/utils/errorHandling";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ categoryId: string }> },
) {
  const supabase = await createClient();

  const { categoryId } = await params;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category_id", categoryId);

  if (error) {
    return apiResponse({
      success: false,
      message: error.message,
      status: 400,
    });
  }

  return apiResponse({
    success: true,
    message: "Products fetched successfully",
    data,
    status: 200,
  });
}
