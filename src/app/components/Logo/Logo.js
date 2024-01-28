import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/panna-logo.png";

import "./Logo.scss";

export default function Logo() {
  return (
    <div className="logo-container">
      <Link className="navbar-brand" href="/">
        <Image priority src={logo} alt="Logo image" width={100} height={100} />
      </Link>
    </div>
  );
}
