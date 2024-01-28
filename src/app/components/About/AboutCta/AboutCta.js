import BaseSectionTitle from "../../UI/BaseSectionTitle/BaseSectionTItle";
import BaseButton from "../../UI/BaseButton/BaseButton";

import Image from "next/image";
import aboutImg from "../../../../../public/images/about/about.png";

import "./AboutCta.scss";

export default function AboutCta({ content }) {
  return (
    <div className="about-cta base-container base-window pb-5">
      <BaseSectionTitle text="O nas" />
      <div className="d-md-flex gap-5 mt-5">
        <div className="about-cta__col w-50">
          <p style={{ whiteSpace: "pre-line" }}>{content.text}</p>
          <BaseButton isLink href="o-nas" className="d-none d-md-block">
            {content.btn}
          </BaseButton>
        </div>
        <div className="about-cta__col w-50">
          <div className="about-cta-img d-flex ">
            <Image priority src={aboutImg} alt="about image" />
          </div>
        </div>
        <BaseButton className="d-md-none mt-4">{content.btn}</BaseButton>
      </div>
    </div>
  );
}
