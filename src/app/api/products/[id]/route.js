import { NextResponse } from "next/server";

const products = require("../../../../../public/json/products.json");

export async function GET(request, context) {
  const { params } = context;
  const product = products.cakes.filter(
    (item) => params.id === item.id.toString()
  );

  return NextResponse.json({
    product,
  });
}
