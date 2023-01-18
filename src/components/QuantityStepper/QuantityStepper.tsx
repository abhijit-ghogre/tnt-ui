import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";

type Size = "xs" | "sm" | "md" | "lg";

interface Props {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
  size?: Size;
}

const getButtonSizeClass = (size: Size) => {
  switch (size) {
    case "xs":
      return "btn-xs";
    case "sm":
      return "btn-sm";
    case "lg":
      return "btn-lg";
    case "md":
    default:
      return "btn-md";
  }
};

const getInputSizeClass = (size: Size) => {
  switch (size) {
    case "xs":
      return "input-xs";
    case "sm":
      return "input-sm";
    case "lg":
      return "input-lg";
    case "md":
    default:
      return "input-md";
  }
};

function QuantityStepper(props: Props) {
  const {
    value,
    onChange,
    min = 0,
    max = 999999999999999,
    className = "",
    size = "md",
  } = props;

  const handleChange = (newValue: string) => {
    if (newValue === "") {
      onChange(0);
      return;
    }

    const inputValue = parseInt(newValue, 10);

    if (Number.isNaN(inputValue)) {
      return;
    }

    if (inputValue < min || inputValue > max) {
      return;
    }

    onChange(inputValue);
  };

  return (
    <div className={`flex border w-fit overflow-hidden ${className}`}>
      <button
        className={`btn btn-ghost btn-xs no-animation rounded-r-none
          ${getButtonSizeClass(size)}
        `}
        onClick={() => handleChange(`${value - 1}`)}
        disabled={value <= min}
      >
        <MdRemove />
      </button>
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        placeholder="10"
        className={`input focus:bg-transparent text-center px-1 rounded-none input-xs 
          ${getInputSizeClass(size)}
        `}
        size={value.toString().length + 4}
        value={value}
        onFocus={(e) => e.target.select()}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") {
            e.preventDefault();
            handleChange(`${value + 1}`);
          }
          if (e.key === "ArrowDown") {
            e.preventDefault();
            handleChange(`${value - 1}`);
          }
        }}
      />
      <button
        className={`btn btn-ghost btn-xs no-animation rounded-l-none
          ${getButtonSizeClass(size)}
        `}
        onClick={() => handleChange(`${value + 1}`)}
        disabled={value >= max}
      >
        <MdAdd />
      </button>
    </div>
  );
}

export default QuantityStepper;
