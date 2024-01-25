import Products from "../components/Products/Products";
const productsJson = require("../../../public/products.json");

export default function CakesList() {
  return <Products content={productsJson} />;
}
