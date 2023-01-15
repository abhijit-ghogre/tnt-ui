import React from "react";

type Justify = "start" | "end" | "center" | "between" | "around" | "evenly";
type Items = "start" | "end" | "center" | "stretch";
type BrakePoint = "sm" | "md" | "lg";
export interface Props {
  className?: string;
  justify?: Justify;
  items?: Items;
  children: React.ReactNode;
  breakAt?: BrakePoint;
}

const getJustifyClassNames = (justify: Justify) => {
  switch (justify) {
    case "end":
      return "justify-end";
    case "center":
      return "justify-center";
    case "between":
      return "justify-between";
    case "around":
      return "justify-around";
    case "evenly":
      return "justify-evenly";
    case "start":
    default:
      return "justify-start";
  }
};

const getItemsClassnames = (items: Items) => {
  switch (items) {
    case "start":
      return "items-start";
    case "end":
      return "items-end";
    case "center":
      return "items-center";
    case "stretch":
    default:
      return "items-stretch";
  }
};

const getBreakpointClassNames = (breakAt: BrakePoint) => {
  switch (breakAt) {
    case "lg":
      return "lg:flex-row";
    case "md":
      return "md:flex-row";
    case "sm":
    default:
      return "sm:flex-row";
  }
};
function ResponsiveRow(props: Props) {
  const {
    children,
    className = "",
    justify = "start",
    items = "stretch",
    breakAt = "sm",
  } = props;
  return (
    <div
      className={`
        flex
        flex-col
        ${getJustifyClassNames(justify)}
        ${getItemsClassnames(items)}
        ${getBreakpointClassNames(breakAt)}    
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default ResponsiveRow;
