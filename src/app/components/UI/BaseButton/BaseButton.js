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
  btnCol = "action",
}) {
  const buttonProps = {
    className: `base-button shadow ${className} ${"btn--" + btnCol}`,
    onClick,
  };

  if (isLink) {
    return (
      <Link href={href} {...buttonProps}>
        {children}
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
