import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server";


export const GET = async () => {
    const supabase = await createClient()

    try {
        
const { data: categories, error } = await supabase
  .from("categories")
  .select("*");

  if(error){
    return NextResponse.json(
        {
            success: false,
            message: error.message,
        },
        {status: 404}
    )
  }

  return NextResponse.json(
    {
        success: true,
        message: "All categories are fetched successfully ",
        data: categories
    }
  )

    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error ? error.message : "Something went wrong"
            }
        )
    }
}