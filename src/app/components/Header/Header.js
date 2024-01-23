"use client";

import "./Header.scss";
import Link from "next/link";
import BaseButton from "../UI/BaseButton/BaseButton";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { text: "Domov", route: "/" },
    { text: "Torte", route: "/torte" },
    { text: "Galerija", route: "/galerija" },
    { text: "O nas", route: "/o-nas" },
  ];

  return (
    <div className="sticky-top bg-white">
      <nav className="base-container navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Logo
          </Link>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ flexGrow: 0 }}
          >
            <ul className="navbar-nav">
              {links.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className={`${
                      pathname === `${link.route}` ? "active" : ""
                    } nav-link`}
                    href={link.route}
                    aria-current="page"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <BaseButton>Naroči</BaseButton>
            <button
              className="navbar-toggler ms-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
