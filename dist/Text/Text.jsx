"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const getTagName = (size) => {
    switch (size) {
        case "xs":
            return "p";
        case "sm":
            return "p";
        case "lg":
            return "h3";
        case "xl":
            return "h2";
        case "2xl":
            return "h1";
        case "base":
        default:
            return "p";
    }
};
const getTextSizeClassNames = (size) => {
    switch (size) {
        case "xs":
            return "text-xs";
        case "sm":
            return "text-sm";
        case "lg":
            return "text-lg";
        case "xl":
            return "text-xl";
        case "2xl":
            return "text-2xl";
        case "base":
        default:
            return "text-base";
    }
};
const getTextWeightClassNames = (weight) => {
    switch (weight) {
        case "light":
            return "font-light";
        case "bold":
            return "font-bold";
        case "normal":
        default:
            return "font-normal";
    }
};
function Text(props) {
    const { children, className = "", size = "base", weight = "normal", link = "", target = "_self", } = props;
    const TagName = getTagName(size);
    const commonClasses = `
        ${getTextSizeClassNames(size)}
        ${getTextWeightClassNames(weight)}
  `;
    if (link) {
        return (<link_1.default href={link} className={`${commonClasses} link ${className}`} target={target}>
        {children}
      </link_1.default>);
    }
    return (<TagName className={`${commonClasses} ${className}`}>{children}</TagName>);
}
exports.default = Text;
