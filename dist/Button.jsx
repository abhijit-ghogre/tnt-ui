"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const getSizeClassNames = (size) => {
    switch (size) {
        case "sm":
            return "p-1.5 text-xs";
        case "lg":
            return "p-3";
        case "md":
        default:
            return "p-2 text-sm";
    }
};
const getVariantClassNames = (variant) => {
    switch (variant) {
        case "wired":
            return "bg-transparent text-primary border border-primary";
        case "ghost":
            return "bg-transparent text-primary underline border border-transparent";
        case "solid":
        default:
            return "bg-primary text-secondary border border-primary";
    }
};
function Button(props) {
    const { children, size = "md", variant = "solid", fit = true, disabled = false, } = props;
    return (<button className={`
      ${getSizeClassNames(size)} 
      ${getVariantClassNames(variant)}
      block
      ${fit ? "w-fit" : "w-full"}
      disabled:opacity-50
      `} disabled={disabled}>
      {children}
    </button>);
}
exports.default = Button;
