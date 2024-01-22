import Products from "../components/Products/Products";
const textContent = require("../../../public/textContent.json");

export default function CakesList() {
  return <Products content={textContent.products} />;
}
