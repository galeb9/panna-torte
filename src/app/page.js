import Hero from "./components/Hero/Hero";
const textContent = require("../../public/textContent.json");

export default function Home() {
  return (
    <main>
      <Hero content={textContent.home} />
    </main>
  );
}
