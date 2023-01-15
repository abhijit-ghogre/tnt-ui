import React from "react";
import Link from "next/link";

type Size = "sm" | "xs" | "base" | "lg" | "xl" | "2xl";
type Weight = "light" | "normal" | "bold";
type Color = "primary" | "secondary" | "tertiary";

interface Props {
  children: React.ReactNode;
  size?: Size;
  weight?: Weight;
  link?: string;
  color?: Color;
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

const getTextColorClassNames = (color: Color) => {
  switch (color) {
    case "secondary":
      return "text-secondary";
    case "tertiary":
      return "text-tertiary";
    case "primary":
    default:
      return "text-primary";
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
    color = "primary",
  } = props;
  const TagName = getTagName(size);

  const commonClasses = `
        ${getTextColorClassNames(color)}
        ${getTextSizeClassNames(size)}
        ${getTextWeightClassNames(weight)}
  `;

  if (link) {
    return (
      <Link
        href={link}
        className={`${commonClasses} underline ${className}`}
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
