import "./BaseSectionTitle.scss";

import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"] });

export default function BaseSectionTitle({ text }) {
  return (
    <div className="base-section-title__container d-flex align-items-center gap-4">
      <div className="title-line holder">
        {/* <div class="tinyLine tinyLine1"></div>
        <div class="tinyLine tinyLine2"></div> */}
      </div>
      <h2 className="base-section-title mb-0">{text}</h2>
      <div className="title-line"></div>
    </div>
  );
}
