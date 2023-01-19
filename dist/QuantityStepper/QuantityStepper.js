"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const md_1 = require("react-icons/md");
const getButtonSizeClass = (size) => {
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
const getInputSizeClass = (size) => {
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
function QuantityStepper(props) {
    const { value, onChange, min = 0, max = 999999999999999, className = "", size = "md", } = props;
    const handleChange = (newValue) => {
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
    return (react_1.default.createElement("div", { className: `flex border w-fit overflow-hidden ${className}` },
        react_1.default.createElement("button", { className: `btn btn-ghost btn-xs no-animation rounded-r-none
          ${getButtonSizeClass(size)}
        `, onClick: () => handleChange(`${value - 1}`), disabled: value <= min },
            react_1.default.createElement(md_1.MdRemove, null)),
        react_1.default.createElement("input", { onChange: (e) => handleChange(e.target.value), type: "text", placeholder: "10", className: `input focus:bg-transparent text-center px-1 rounded-none input-xs 
          ${getInputSizeClass(size)}
        `, size: value.toString().length + 4, value: value, onFocus: (e) => e.target.select(), onKeyDown: (e) => {
                if (e.key === "ArrowUp") {
                    e.preventDefault();
                    handleChange(`${value + 1}`);
                }
                if (e.key === "ArrowDown") {
                    e.preventDefault();
                    handleChange(`${value - 1}`);
                }
            } }),
        react_1.default.createElement("button", { className: `btn btn-ghost btn-xs no-animation rounded-l-none
          ${getButtonSizeClass(size)}
        `, onClick: () => handleChange(`${value + 1}`), disabled: value >= max },
            react_1.default.createElement(md_1.MdAdd, null))));
}
exports.default = QuantityStepper;
