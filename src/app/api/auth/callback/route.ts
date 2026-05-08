// import { createClient } from "@/lib/supabase/server";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const requestUrl = new URL(request.url);
//   const code = requestUrl.searchParams.get("code");

//   if (code) {
//     const supabase = await createClient();

//     const { error } = await supabase.auth.exchangeCodeForSession(code);

//     if (error) {
//       console.error("Error exchanging code:", error.message);

//       return NextResponse.redirect(
//         `${requestUrl.origin}/login?error=auth_failed`,
//       );
//     }

//     return NextResponse.redirect(`${requestUrl.origin}/`);
//   }

//   return NextResponse.redirect(`${requestUrl.origin}/login`);
// }

import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const error = url.searchParams.get("error");
  if (error) {
    return NextResponse.redirect(`${url.origin}/login?error=oauth_failed`);
  }

  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${url.origin}/login`);
  }

  const supabase = await createClient();

  const { error: exchangeError } =
    await supabase.auth.exchangeCodeForSession(code);

  if (exchangeError) {
    console.error("Error exchanging code:", exchangeError.message);

    return NextResponse.redirect(`${url.origin}/login?error=auth_failed`);
  }

  return NextResponse.redirect(`${url.origin}/`);
}