import "./BaseSectionTitle.scss";

export default function BaseSectionTitle({ text }) {
  return (
    <div className="base-section-title d-flex align-items-center gap-4">
      <div className="title-line"></div>
      <h2 className="base-section-title mb-0">{text}</h2>
      <div className="title-line"></div>
    </div>
  );
}
