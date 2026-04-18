import { createClient } from "@/lib/supabase/server";
import { SignupFormData } from "@/schema/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as SignupFormData;

  if (!body.email || !body.password) {
    return NextResponse.json({
      success: false,
      message: "Invalide Credencials",
    },
    {status: 400}
);
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp(body);

  try {
    if (error && !data?.user) {
      console.log(error);
      return NextResponse.json(
        {
          success: false,
          message: error.message || "Failed to create user",
        },
        {
          status: 400,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message: "user register",
      data: data,
    });
  } catch (error) {
    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong",
        },
        {
          status: 500,
        },
      );
    }
  }
}
