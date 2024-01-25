"use client";
import Image from "next/image";
import { useState } from "react";
import "./ProdcutImage.scss";
import chevron from "../../../../public/chevron.svg";

export default function Product({ images, showBottomGallery = true }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="product-image">
      <div className="next-prev-btns d-flex justify-content-between">
        <div onClick={() => handlePrevImage()} className="chevron-container">
          <Image
            src={chevron}
            alt="Chevron icon right"
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
        <div onClick={() => handleNextImage()} className="chevron-container">
          <Image src={chevron} alt="Chevron icon left" />
        </div>
      </div>
      <div className="product-image__img-container d-flex justify-content-center">
        <Image
          priority
          src={`/images/cakes/${selectedImage}`}
          alt="Cake image"
          className="product-image__img"
          quality={100}
          width={300}
          height={300}
        />
      </div>
      <div className="product-image-nav d-flex gap-3 ">
        {images.map((img, count) => (
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
            {showBottomGallery && (
              <div className="d-flex justify-content-center">
                <Image
                  priority
                  src={`/images/cakes/${img}`}
                  alt="Cake image"
                  className="product-image-nav__img mt-3"
                  width={300}
                  height={300}
                  quality={1}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
