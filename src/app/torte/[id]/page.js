const productsJson = require("../../../../public/products.json");

import "./SingleCake.scss";

import BaseButton from "../../components/UI/BaseButton/BaseButton";
import Image from "next/image";
import Link from "next/link";
import cake2 from "../../../../public/images/hero/cake2.png";

export default function Cake({ params }) {
  const { id } = params;
  const quantity = 1;
  const cake = productsJson.cakes.find((cake) => cake.id === id);
  console.log(cake);

  return (
    <div className="single-cake base-container d-flex py-5">
      <div className="cake-col">
        <div className=" d-flex justify-content-center">
          <Image
            priority
            src={cake2}
            alt="Cake image"
            className="cake-main__img"
          />
        </div>
        <div className="cake-image-nav d-flex gap-3 ">
          {cake.images.map((img, count) => (
            <div className="img-line__container flex-grow-1 " key={count}>
              <div className="img-line flex-grow-1"></div>
              <div className="d-flex justify-content-center">
                <Image
                  priority
                  src={cake2}
                  alt="Cake image"
                  className="cake-image-nav__img mt-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cake-col">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
          <h2 className="mb-0">{cake.name}</h2>
          <h4 className="mb-0 mt-2">{"€" + cake.price}</h4>
        </div>

        <p>{cake.desc}</p>

        <div className="cake-quantity cake-title d-flex align-items-center gap-4 mb-4">
          <h4>Količina</h4>
          <div className="title-line flex-grow-1"></div>
          <div className="cake-quantity__counter  d-flex align-items-center gap-3">
            <div className="quantity-btn">-</div>
            <div className="quantity-num">{quantity}</div>
            <div className="quantity-btn">+</div>
          </div>
        </div>
        <div className="mb-4">
          <div className="cake-title d-flex align-items-center gap-4 mb-2">
            <h4>Alergeni</h4>
            <div className="title-line flex-grow-1"></div>
          </div>
          <div className="alergeni d-flex flex-wrap">
            {cake.alergeni.map((alergen, index) => (
              <div className="alergeni-item" key={index}>
                {alergen}
              </div>
            ))}
          </div>
        </div>

        <BaseButton className="mt-3">Pošji povpraševanje</BaseButton>
      </div>
    </div>
  );
}
