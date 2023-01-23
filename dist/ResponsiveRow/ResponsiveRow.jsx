"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const getJustifyClassNames = (justify) => {
    switch (justify) {
        case "end":
            return "justify-end";
        case "center":
            return "justify-center";
        case "between":
            return "justify-between";
        case "around":
            return "justify-around";
        case "evenly":
            return "justify-evenly";
        case "start":
        default:
            return "justify-start";
    }
};
const getItemsClassnames = (items) => {
    switch (items) {
        case "start":
            return "items-start";
        case "end":
            return "items-end";
        case "center":
            return "items-center";
        case "stretch":
        default:
            return "items-stretch";
    }
};
const getBreakpointClassNames = (breakAt) => {
    switch (breakAt) {
        case "lg":
            return "lg:flex-row";
        case "md":
            return "md:flex-row";
        case "sm":
        default:
            return "sm:flex-row";
    }
};
function ResponsiveRow(props) {
    const { children, className = "", justify = "start", items = "stretch", breakAt = "sm", } = props;
    return (<div className={`
        flex
        flex-col
        ${getJustifyClassNames(justify)}
        ${getItemsClassnames(items)}
        ${getBreakpointClassNames(breakAt)}    
        ${className}
      `}>
      {children}
    </div>);
}
exports.default = ResponsiveRow;
