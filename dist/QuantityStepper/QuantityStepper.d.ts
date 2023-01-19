/// <reference types="react" />
declare type Size = "xs" | "sm" | "md" | "lg";
interface Props {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    className?: string;
    size?: Size;
}
declare function QuantityStepper(props: Props): JSX.Element;
export default QuantityStepper;
