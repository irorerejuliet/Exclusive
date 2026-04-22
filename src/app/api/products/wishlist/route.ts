import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { productId, isFavorite } = await req.json();
  const supabase = await createClient();
  console.log(productId, isFavorite);
  if (!productId) {
    return NextResponse.json(
      { success: false, message: "No favorite product" },
      { status: 400 },
    );
  }
  try {
    const { data, error } = await supabase
      .from("products")
      .update({ isFavorite: !isFavorite })
      .eq("id", productId)
      .select();
    if (error) throw error;
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Something went wrong";
    return NextResponse.json(
      { success: false, message },
      { status: 500 },
    );
  }
};
