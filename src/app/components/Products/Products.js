import BaseSectionTitle from "../UI/BaseSectionTitle/BaseSectionTItle";

import Image from "next/image";
import Link from "next/link";

import cake2 from "../../../../public/images/hero/cake2.png";
import "./Products.scss";
import BaseButton from "../UI/BaseButton/BaseButton";
import ProdcutImage from "@/app/components/ProdcutImage/ProdcutImage";

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
              {/* <Image priority src={cake2} alt="Cake image" />
              <div className="products-image-nav d-flex gap-3 mb-3">
                {cake.images.map((_, count) => (
                  <div className="img-line__container flex-grow-1" key={count}>
                    <div className="img-line flex-grow-1"></div>
                  </div>
                ))}
              </div> */}
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
              <BaseButton className="w-100">Naroči</BaseButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
