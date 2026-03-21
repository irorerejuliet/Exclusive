import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  const supabase = await createClient();

  try {
    const { data: products, error } = await supabase
      .from("products")
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
      message: "All Products are fetched successfullly",
      data: products,
    });
  } catch (error) {
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

export const POST = async (request: NextResponse) => {
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
