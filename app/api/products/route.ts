import { NextResponse } from "next/server";
import { PRODUCTS } from "../(mock)/mock";

export async function GET() {
  try {
    return new NextResponse(JSON.stringify(PRODUCTS));
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
