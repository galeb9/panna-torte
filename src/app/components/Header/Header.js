"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import Link from "next/link";
import Logo from "../Logo/Logo.js";
import BaseButton from "../UI/BaseButton/BaseButton";

import "./Header.scss";

export default function Header() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const pathname = usePathname();

  const links = [
    { text: "Domov", route: "/" },
    { text: "Torte", route: "/torte" },
    { text: "Galerija", route: "/galerija" },
    { text: "O nas", route: "/o-nas" },
  ];

  return (
    <div className="sticky-top bg-white">
      <nav className="base-container navbar navbar-expand-lg px-0">
        <div className="container-fluid">
          <Logo />

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
