import { Inter, Montserrat, Poppins } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Panna torte",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <div style={{ minHeight: "calc(100vh - 56px)" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
