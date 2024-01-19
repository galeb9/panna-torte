"use client";
import "./BaseButton.scss";
import Link from "next/link";

export default function BaseButton({
  onClick,
  href,
  isLink,
  anchorLink,
  children,
  className,
}) {
  const buttonProps = {
    className: `base-button shadow ${className}`,
    onClick,
  };

  if (isLink) {
    return (
      <Link href={href}>
        <a {...buttonProps}>{children}</a>
      </Link>
    );
  }

  if (anchorLink) {
    return (
      <a href={href} {...buttonProps}>
        {children}
      </a>
    );
  }

  return <button {...buttonProps}>{children || "text"}</button>;
}
