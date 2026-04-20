import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";



// wishlist (GET)
export const GET = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("wishlist")
    .select(`
      product_id,
      products (*)
    `)
    .eq("user_id", user.id);

  if (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
};



export const POST = async (req: Request) => {
  const { productId } = await req.json();
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    // check if already in wishlist
    const { data: existing } = await supabase
      .from("wishlist")
      .select("*")
      .eq("user_id", user.id)
      .eq("product_id", productId)
      .single();

    if (existing) {
      // remove
      await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", user.id)
        .eq("product_id", productId);

      return NextResponse.json({
        success: true,
        action: "removed",
      });
    } else {
      // add
      await supabase.from("wishlist").insert({
        user_id: user.id,
        product_id: productId,
      });

      return NextResponse.json({
        success: true,
        action: "added",
      });
    }
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
};
