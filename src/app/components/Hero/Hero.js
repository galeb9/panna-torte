"use client";

import Image from "next/image";
import "./Hero.scss";
import cake1 from "../../../../public/images/cake1.png";
import cake2 from "../../../../public/images/cake2.png";
import cake3 from "../../../../public/images/cake3.png";

import BaseButton from "../UI/BaseButton/BaseButton";

export default function Hero({ content }) {
  const images = [cake1, cake2, cake3];

  return (
    <div className="hero d-flex justify-content-center">
      <div className="hero-container w-100">
        <div className="hero-main text-center base-bg-grey w-100">
          <h2>{content.title}</h2>
          <p>{content.text}</p>
          <div className="hero-btns d-flex justify-content-center gap-4 mt-5">
            <BaseButton>{content.btn1}</BaseButton>
            <BaseButton>{content.btn2}</BaseButton>
          </div>
        </div>
        <div className="base-container d-flex justify-content-center">
          <div className="hero-cakes d-flex gap-3">
            {images.map((cake, index) => (
              <div key={index} className="hero-cake_img">
                <Image key={index} src={cake} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
