import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo/Logo.js";

import tel from "../../../../public/images/footer/tel.svg";
import mail from "../../../../public/images/footer/mail.svg";
import fb from "../../../../public/images/footer/fb.svg";
import insta from "../../../../public/images/footer/insta.svg";
import location from "../../../../public/images/footer/location.svg";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer base-bg-grey py-5">
      <div className="base-container d-flex justify-content-between gap-5">
        <Logo />
        <div className="footer-items d-flex">
          <div>
            <h5 className="mb-3">Delovni čas</h5>
            <p>ponedeljek - sreda</p>
            <p>16:00 - 22:00</p>
          </div>
          <div>
            <h5 className="mb-3">Kontakt</h5>
            <div>
              <a href="tel:+1234567890">
                <Image
                  src={mail}
                  className="me-2"
                  alt="Custom SVG Image"
                  style={{ maxWidth: "18px" }}
                />
                123 456 789
              </a>
            </div>
            <div>
              <a href="mailto:example@example.com">
                <Image
                  src={tel}
                  className="me-2"
                  alt="Custom SVG Image"
                  style={{ maxWidth: "18px" }}
                />
                example@example.com
              </a>
            </div>
          </div>
          <div className="footer-links d-flex flex-column gap-1">
            <Link href="/torte">Ponudba</Link>
            <Link href="/galerija">Galerija</Link>
            <Link href="/o-nas">O nas</Link>
          </div>
          <div className="social-links d-flex flex-column gap-2">
            <div>
              <a
                href="mailto:example@example.com"
                className="d-flex align-items-center gap-2"
              >
                <Image
                  src={fb}
                  alt="Custom SVG Image"
                  style={{ maxWidth: "18px" }}
                />
                tekst
              </a>
            </div>
            <div>
              <a
                href="mailto:example@example.com"
                className="d-flex align-items-center gap-2"
              >
                <Image
                  src={insta}
                  alt="Custom SVG Image"
                  style={{ maxWidth: "18px" }}
                />
                tekst
              </a>
            </div>
            <div>
              <a
                href="mailto:example@example.com"
                className="d-flex align-items-center gap-2"
              >
                <Image
                  src={location}
                  alt="Custom SVG Image"
                  className=""
                  style={{ maxWidth: "18px" }}
                />
                location
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
