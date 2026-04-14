import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> },
) => {
  const supabase = await createClient();
  const { productId } = await params;
  console.log(productId);
  if (!productId)
    return NextResponse.json(
      {
        success: false,
        message: "No Id found",
      },
      { status: 400 },
    );

  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", productId)
      .maybeSingle();

    if (error) {
      console.log("Supabase error:", error.message);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 },
      );
    }

    console.log("Fetched product:", data); // ✅ log here

    return NextResponse.json({
      success: true,
      message: `${productId} fetched successfully`,
      data
    });
  } catch (error) {
    console.log("Server error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 },
    );
  }
};
