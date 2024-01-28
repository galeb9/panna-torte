"use client";
import "./SingleCake.scss";

import BaseButton from "@/app/components/UI/BaseButton/BaseButton";
import ProdcutImage from "@/app/components/ProdcutImage/ProdcutImage";
const productsData = require("../../../../public/json/products.json");

export default function Cake({ params }) {
  const { id } = params;
  const cake = productsData.cakes.find((cake) => cake.id === id);
  const images = cake.images;

  const quantity = 1;

  return (
    <div className="single-cake base-container d-flex py-5">
      <div className="cake-col">
        <ProdcutImage images={images}></ProdcutImage>
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
