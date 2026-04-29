import { createClient } from "@/lib/supabase/client";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");
  if (!q || q.trim().length < 2) {
    return NextResponse.json([], { status: 200 });
  }

  const supabase = createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .or(`title.ilike.%${q}%,description.ilike.%${q}%`);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}
