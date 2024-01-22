import BaseSectionTitle from "../UI/BaseSectionTitle/BaseSectionTItle";
import "./Info.scss";
import Image from "next/image";
import order from "../../../../public/images/info/order.png";
import delivery from "../../../../public/images/info/delivery.png";
import card from "../../../../public/images/info/card.png";

export default function Info({ content }) {
  const images = [order, card, delivery];
  images.forEach((image, index) => (content.items[index].img = image));

  return (
    <div className="info-container base-container py-5 mt-4">
      <BaseSectionTitle text={content.title}></BaseSectionTitle>
      <div className="info d-flex justify-content-center gap-5 py-5 mt-5">
        {content.items.map((item, index) => (
          <div key={index} className="info-item text-center">
            <div className="info-bg d-flex justify-content-center align-items-center mx-auto mb-5">
              <Image priority src={item.img} alt="Info icon" />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
