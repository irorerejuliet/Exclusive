import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const supabase = await createClient();

  try {
    const { data: categories, error } = await supabase
      .from("categories")
      .select("*");

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "All categories are fetched successfully",
      data: categories,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const POST = async (request: NextRequest) => {
  const supabase = await createClient();
  const body = await request.json();

  try {
    const { data, error } = await supabase
      .from("categories")
      .insert([body])
      .select();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Category created successfully",
        data: data,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
};
