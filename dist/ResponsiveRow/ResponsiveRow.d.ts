import React from "react";
declare type Justify = "start" | "end" | "center" | "between" | "around" | "evenly";
declare type Items = "start" | "end" | "center" | "stretch";
declare type BrakePoint = "sm" | "md" | "lg";
export interface Props {
    className?: string;
    justify?: Justify;
    items?: Items;
    children: React.ReactNode;
    breakAt?: BrakePoint;
}
declare function ResponsiveRow(props: Props): JSX.Element;
export default ResponsiveRow;
