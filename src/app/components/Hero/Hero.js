"use client";

import Image from "next/image";
import "./Hero.scss";

import cake1 from "../../../../public/images/hero/cake1.png";
import cake2 from "../../../../public/images/hero/cake2.png";
import cake3 from "../../../../public/images/hero/cake3.png";

import BaseButton from "../UI/BaseButton/BaseButton";
import Logo from "../Logo/Logo";

export default function Hero({ content }) {
  const images = [cake1, cake2, cake3];

  return (
    <div className="hero d-flex justify-content-center">
      <div className="hero-container w-100">
        <div className="hero-main text-center base-gradient w-100 d-flex  justify-content-center">
          <div>
            <Logo></Logo>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
            <div className="hero-btns d-flex justify-content-center gap-4 mt-5">
              <BaseButton isLink href="torte">
                {content.btn1}
              </BaseButton>
              <BaseButton btnCol="primary" isLink href="povprasevanje">
                {content.btn2}
              </BaseButton>
            </div>
          </div>
        </div>
        <div className="base-container d-flex justify-content-center">
          <div className="hero-cakes d-flex gap-3">
            {images.map((cake, index) => (
              <div
                key={index}
                className="hero-cake_img text-center d-flex flex-column justify-content-between"
              >
                <Image priority key={index} src={cake} alt={`Image ${index}`} />
                <div className="">1st</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
