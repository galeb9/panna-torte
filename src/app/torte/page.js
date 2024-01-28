import Products from "../components/Products/Products";
const productsJson = require("../../../public/json/products.json");

export default function CakesList() {
  return <Products content={productsJson} />;
}
