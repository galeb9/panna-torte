import { NextResponse } from "next/server";
const products = require("../../../../public/json/products.json");

export async function GET() {
  return NextResponse.json({
    products,
  });
}
