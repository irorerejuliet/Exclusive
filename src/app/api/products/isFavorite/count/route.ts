// app/api/products/wishlist/count/route.ts
import { NextResponse } from "next/server";
export async function GET() {
  const count = await prisma.product.count({
    where: {
      isFavorite: true,
    },
  });

  return NextResponse.json({ count });
}
