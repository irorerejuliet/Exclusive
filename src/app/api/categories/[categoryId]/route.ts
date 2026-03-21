
import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"



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
    return NextResponse.json(
        {
            success: false,
            message: error.message
        },
        {status: 400}
    )
  }
  
  return NextResponse.json(
    {
        success: true,
        message: `${categoryId}  fetched successfully fetched`,
        data,
    },
    {status: 404}
  )

    } catch (error) {
        return NextResponse.json(
          {
            success: false,
            message: error instanceof Error ? error.message : "Unknown error. Try again"
          },
          { status: 404 },
        );
    }
}