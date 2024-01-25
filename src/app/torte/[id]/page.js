"use client";

const productsData = require("../../../../public/products.json");

import "./SingleCake.scss";

import BaseButton from "../../components/UI/BaseButton/BaseButton";
import Image from "next/image";

import { useState } from "react";

export default function Cake({ params }) {
  const { id } = params;
  const cake = productsData.cakes.find((cake) => cake.id === id);
  const images = cake.images;
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const quantity = 1;

  const handleImageClick = (img) => {
    // console.log(selectedImage);
    setSelectedImage(img);
  };

  return (
    <div className="single-cake base-container d-flex py-5">
      <div className="cake-col">
        <div className="cake-main__img-container d-flex justify-content-center">
          <Image
            priority
            src={`/images/cakes/${selectedImage}`}
            alt="Cake image"
            className="cake-main__img"
            quality={100}
            width={300}
            height={300}
          />
        </div>
        <div className="cake-image-nav d-flex gap-3 ">
          {cake.images.map((img, count) => (
            <div
              className="img-line__container flex-grow-1 "
              key={count}
              onClick={() => handleImageClick(img)}
            >
              <div
                className={`${
                  selectedImage === `${img}` ? "img-active" : ""
                } img-line flex-grow-1`}
              ></div>
              <div className="d-flex justify-content-center">
                <Image
                  priority
                  src={`/images/cakes/${img}`}
                  alt="Cake image"
                  className="cake-image-nav__img mt-3"
                  width={300}
                  height={300}
                  quality={1}
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
