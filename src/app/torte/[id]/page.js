const productsJson = require("../../../../public/products.json");

import "./SingleCake.scss";

import BaseButton from "../../components/UI/BaseButton/BaseButton";
import Image from "next/image";

import cake1 from "../../../../public/images/hero/cake1.png";
import cake2 from "../../../../public/images/hero/cake2.png";
import cake3 from "../../../../public/images/hero/cake3.png";

export default function Cake({ params }) {
  const { id } = params;
  const quantity = 1;
  const cake = productsJson.cakes.find((cake) => cake.id === id);
  console.log(cake);

  const dummyImages = [cake1, cake2, cake3];

  return (
    <div className="single-cake base-container d-flex py-5">
      <div className="cake-col">
        {/* <div className="custom-carousel">
          <div
            id="carouselExampleIndicators"
            className="carousel slide carousel-dark"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="img-container">
                  <Image
                    priority
                    src={cake1}
                    alt="Cake image"
                    className="cake-main__img d-block w-100"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-container">
                  <Image
                    priority
                    src={cake2}
                    alt="Cake image"
                    className="cake-main__img d-block w-100"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-container">
                  <Image
                    priority
                    src={cake3}
                    alt="Cake image"
                    className="cake-main__img d-block w-100"
                  />
                </div>
              </div>
            </div>

            <div className="carousel-indicators d-block">
              <div className="d-flex gap-3">
                <div>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <Image priority src={cake1} alt="Cake image" />
                </div>
                <div>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <Image priority src={cake2} alt="Cake image" />
                </div>
                <div>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <Image priority src={cake3} alt="Cake image" />
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}

        <div className="d-flex justify-content-center">
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
