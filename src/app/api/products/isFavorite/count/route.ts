import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("id", { count: "exact" })
    .eq("isFavorite", true);

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({
    count: data.length,
  });
};
