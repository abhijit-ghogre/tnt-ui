import React from "react";
declare type Size = "sm" | "xs" | "base" | "lg" | "xl" | "2xl";
declare type Weight = "light" | "normal" | "bold";
interface Props {
    children: React.ReactNode;
    size?: Size;
    weight?: Weight;
    link?: string;
    className?: string;
    target?: "_blank" | "_self";
}
declare function Text(props: Props): JSX.Element;
export default Text;
