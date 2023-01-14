import React, { ReactNode } from "react";

type Size = "sm" | "md" | "lg";
type Variant = "solid" | "wired" | "ghost";
interface Props {
  size?: Size;
  variant?: Variant;
  children: ReactNode;
  fit?: boolean;
  disabled?: boolean;
}

const getSizeClassNames = (size: Size) => {
  switch (size) {
    case "sm":
      return "p-1.5 text-xs";
    case "lg":
      return "p-3";
    case "md":
    default:
      return "p-2 text-sm";
  }
};

const getVariantClassNames = (variant: Variant) => {
  switch (variant) {
    case "wired":
      return "bg-transparent text-primary border border-primary";
    case "ghost":
      return "bg-transparent text-primary underline border border-transparent";
    case "solid":
    default:
      return "bg-primary text-secondary border border-primary";
  }
};
function Button(props: Props) {
  const {
    children,
    size = "md",
    variant = "solid",
    fit = true,
    disabled = false,
  } = props;

  return (
    <button
      className={`
      ${getSizeClassNames(size)} 
      ${getVariantClassNames(variant)}
      block
      ${fit ? "w-fit" : "w-full"}
      disabled:opacity-50
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
