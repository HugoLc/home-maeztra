import { NextResponse } from "next/server";
import { PRODUCTS } from "../(mock)/mock";

export async function GET() {
  try {
    const res = await fetch(
      "https://ecommerce-study.onrender.com/products/productByCategoryId/855ea256-a205-4b7f-91ed-747de6d351f3"
    );
    const data = await res.json();
    if (data && data.length) {
      return new NextResponse(JSON.stringify(data));
    }
    return new NextResponse(JSON.stringify(PRODUCTS));
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
