import React, { ReactNode } from "react";

type Size = "sm" | "md" | "lg";
type Variant = "solid" | "wired" | "ghost";
interface Props {
  size?: Size;
  variant?: Variant;
  children: ReactNode;
  fit?: boolean;
  disabled?: boolean;
  className?: string;
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
    className = "",
  } = props;

  return (
    <button
      className={`
        block
        disabled:opacity-50
        ${getSizeClassNames(size)} 
        ${getVariantClassNames(variant)}
        ${fit ? "w-fit" : "w-full"}
        ${className}
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
