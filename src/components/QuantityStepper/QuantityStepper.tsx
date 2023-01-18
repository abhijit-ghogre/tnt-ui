import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";

interface Props {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

function QuantityStepper(props: Props) {
  const {
    value,
    onChange,
    min = 0,
    max = 999999999999999,
    className = "",
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
        className="btn btn-ghost no-animation rounded-r-none"
        onClick={() => handleChange(`${value - 1}`)}
        disabled={value <= min}
      >
        <MdRemove />
      </button>
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        placeholder="10"
        className="input focus:bg-transparent text-center px-1 rounded-none"
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
        className="btn btn-ghost no-animation rounded-l-none"
        onClick={() => handleChange(`${value + 1}`)}
        disabled={value >= max}
      >
        <MdAdd />
      </button>
    </div>
  );
}

export default QuantityStepper;
