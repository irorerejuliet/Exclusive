import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server";

interface Params {
    params: Promise<{productId: string}>
}

export const GET = async (request: Request, {params}: Params) => {
const supabase = await createClient()
const {productId} = await params;

try {
    
const { data, error } = await supabase
  .from("products")
  .select("*")
  .eq("id", productId);
  if(error) {
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
        message: `${productId}  fetched successfully`,
        data,
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