import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const categoryId = searchParams.get("categoryId");
  const supabase = await createClient();

  try {
    let query = supabase.from("products").select("*");

    if (categoryId) {
      query = query.eq("category_id", categoryId);
    }

    const { data: products, error } = await query;

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
      message: "All products fetched successfully",
      data: products,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 },
    );
  }
};

export const POST = async (request: NextRequest) => {
  const supabase = await createClient();
  const body = await request.json();

  try {
    const { data, error } = await supabase
      .from("products")
      .insert([body])
      .select("*");

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "The product has been successfully added to the database.",
        data,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unknow Error, Try again later",
      },
      { status: 500 },
    );
  }
};
