import { ReactNode } from "react";
declare type Size = "sm" | "md" | "lg";
declare type Variant = "solid" | "wired" | "ghost";
interface Props {
    size?: Size;
    variant?: Variant;
    children: ReactNode;
    fit?: boolean;
    disabled?: boolean;
}
declare function Button(props: Props): JSX.Element;
export default Button;
