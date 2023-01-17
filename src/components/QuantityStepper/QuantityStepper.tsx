import React from "react";

interface Props {
  size?: Sizes;
  variant?: Variants;
  initialValue: number;
  onIncrement: React.MouseEventHandler<HTMLButtonElement>;
  onDecrement: React.MouseEventHandler<HTMLButtonElement>;
}

type Sizes = "xs" | "sm" | "md";
type Variants = "ghost" | "solid";
const getInputSizes = (size: Sizes) => {
  switch (size) {
    case "xs":
      return "input-xs";
    case "md":
      return "input-md";
    case "sm":
    default:
      return "input-sm";
  }
};

const getButtonSizes = (size: Sizes) => {
  switch (size) {
    case "xs":
      return "btn-xs";
    case "md":
      return "btn-md";
    case "sm":
    default:
      return "btn-sm";
  }
};

const getVariantClassNames = (variant: Variants) => {
  switch (variant) {
    case "ghost":
      return "input input-ghost input-bordered";
    case "solid":
    default:
      return "input";
  }
};
function QuantityStepper(props: Props) {
  const {
    size = "sm",
    variant = "ghost",
    initialValue,
    onIncrement,
    onDecrement,
  } = props;
  return (
    <div className="flex items-center relative w-fit">
      <button
        className={`btn btn-ghost btn-square absolute top-0 left-0 hover:bg-transparent ${getButtonSizes(
          size
        )}`}
        onClick={onDecrement}
      >
        -
      </button>
      <input
        className={`text-center w-full rounded-none focus:bg-transparent focus:outline-none ${getInputSizes(
          size
        )}  ${getVariantClassNames(variant)}`}
        value={initialValue}
      />
      <button
        className={`btn btn-ghost absolute top-0 right-0 hover:bg-transparent ${getButtonSizes(
          size
        )}`}
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
}

QuantityStepper.defaultProps = {
  size: "sm",
  variant: "ghost",
};
export default QuantityStepper;
