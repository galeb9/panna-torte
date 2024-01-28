import BaseSectionTitle from "../UI/BaseSectionTitle/BaseSectionTItle";
import BaseButton from "../UI/BaseButton/BaseButton";
import ProdcutImage from "@/app/components/ProdcutImage/ProdcutImage";

import Link from "next/link";
import "./Products.scss";

export default function Products({ content, bg }) {
  return (
    <div className={`py-4 ${bg ? "base-bg-grey" : ""}`}>
      <div className="base-container my-5" style={{ minHeight: "60vh" }}>
        <BaseSectionTitle text={content.title}></BaseSectionTitle>

        <div className="products-list mt-5">
          {content.cakes.map((cake, index) => (
            <div key={index} className="product">
              <ProdcutImage
                images={cake.images}
                showBottomGallery={false}
              ></ProdcutImage>
              <h4>{cake.name}</h4>
              <div className="d-flex justify-content-between my-3">
                <div>{cake.price} €</div>
                <Link
                  className="cake-link"
                  href={`/torte/${cake.id}`}
                  aria-current="page"
                >
                  Izvedi več
                </Link>
              </div>
              <BaseButton isLink href="povprasevanje">
                Naroči
              </BaseButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
