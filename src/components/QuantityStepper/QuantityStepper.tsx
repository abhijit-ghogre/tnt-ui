import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";

interface Props {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

function QuantityStepper(props: Props) {
  const {
    value,
    onIncrement,
    onDecrement,
    onChange,
    min = 0,
    max = 999999999999999,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      onChange(0);
      return;
    }

    const inputValue = parseInt(e.target.value, 10);

    if (Number.isNaN(inputValue)) {
      return;
    }

    if (inputValue < min || inputValue > max) {
      return;
    }

    onChange(inputValue);
  };

  return (
    <div className="flex border w-fit">
      <button
        className="btn btn-ghost no-animation rounded-r-none"
        onClick={() => onDecrement()}
        disabled={value <= min}
      >
        <MdRemove />
      </button>
      <input
        onChange={handleChange}
        type="text"
        placeholder="10"
        className="input focus:bg-transparent text-center px-1 rounded-none"
        size={value.toString().length + 4}
        value={value}
        onFocus={(e) => e.target.select()}
        onKeyUp={(e) => {
          if (e.key === "ArrowUp") {
            onIncrement();
          }
          if (e.key === "ArrowDown") {
            onDecrement();
          }
        }}
      />
      <button
        className="btn btn-ghost no-animation rounded-l-none"
        onClick={() => onIncrement()}
        disabled={value >= max}
      >
        <MdAdd />
      </button>
    </div>
  );
}

export default QuantityStepper;
