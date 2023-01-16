import React from "react";
import Link from "next/link";

type Size = "sm" | "xs" | "base" | "lg" | "xl" | "2xl";
type Weight = "light" | "normal" | "bold";

interface Props {
  children: React.ReactNode;
  size?: Size;
  weight?: Weight;
  link?: string;
  className?: string;
  target?: "_blank" | "_self";
}

const getTagName = (size: Size) => {
  switch (size) {
    case "xs":
      return "p";
    case "sm":
      return "p";
    case "lg":
      return "h3";
    case "xl":
      return "h2";
    case "2xl":
      return "h1";
    case "base":
    default:
      return "p";
  }
};

const getTextSizeClassNames = (size: Size) => {
  switch (size) {
    case "xs":
      return "text-xs";
    case "sm":
      return "text-sm";
    case "lg":
      return "text-lg";
    case "xl":
      return "text-xl";
    case "2xl":
      return "text-2xl";
    case "base":
    default:
      return "text-base";
  }
};

const getTextWeightClassNames = (weight: Weight) => {
  switch (weight) {
    case "light":
      return "font-light";
    case "bold":
      return "font-bold";
    case "normal":
    default:
      return "font-normal";
  }
};

function Text(props: Props) {
  const {
    children,
    className = "",
    size = "base",
    weight = "normal",
    link = "",
    target = "_self",
  } = props;
  const TagName = getTagName(size);

  const commonClasses = `
        ${getTextSizeClassNames(size)}
        ${getTextWeightClassNames(weight)}
  `;

  if (link) {
    return (
      <Link
        href={link}
        className={`${commonClasses} link ${className}`}
        target={target}
      >
        {children}
      </Link>
    );
  }

  return (
    <TagName className={`${commonClasses} ${className}`}>{children}</TagName>
  );
}
export default Text;
