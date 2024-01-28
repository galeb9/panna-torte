import Hero from "./components/Hero/Hero";
import AboutCta from "./components/About/AboutCta/AboutCta";
import Products from "./components/Products/Products";
import Info from "./components/Info/Info";

const textContent = require("../../public/json/textContent.json");
const productsJson = require("../../public/json/products.json");

export default function Home() {
  return (
    <main>
      <Hero content={textContent.home} />
      <AboutCta content={textContent.about}></AboutCta>
      <Products content={productsJson}></Products>
      <Info content={textContent.info}></Info>
    </main>
  );
}
