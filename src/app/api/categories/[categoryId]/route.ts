
import { createClient } from "@/lib/supabase/server"
import { apiResponse } from "@/utils/errorHandling"





interface Params{
    params: Promise<{categoryId: string}>
}
export const GET = async (request: Request, {params}: Params) => {
    const supabase = await createClient()
    const {categoryId} = await params

    try {
        
const { data, error } = await supabase
  .from("categories")
  .select("*")
  .eq("id", categoryId);
  if(error){
    return apiResponse({
      success: false,
      message: error.message,
      status: 400,
    });
  }
  
  return apiResponse({
    success: true,
    message: `${categoryId}  fetched successfully fetched`,
    data,
    status: 200,
  });

    } catch (error) {
        return apiResponse({
          success: false,
          message:
            error instanceof Error ? error.message : "Unknown error. Try again",
          status: 500,
        });
    }
}




export const DELETE = async (request: Request, {params}: Params) => {
  const supabase = await createClient()
  const {categoryId} = await params;

  
try {
  const { error } = await supabase
    .from("categories")
    .delete()
    .eq("id", categoryId);
  
    if(error){
      return apiResponse({
        success: false,
        message: error.message,
        status: 400,
      });
    }


    return apiResponse({
      success: true,
      message: `${categoryId}  delected successfully`,
    });
} catch (error) {
  return apiResponse({
    success: false,
    message: error instanceof Error ? error.message : " Something whent wrong",
  });
}
}