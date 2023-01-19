"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Drawer(props) {
    const { isVisible, onOverlayClick, children, sideContent, end = false, } = props;
    return (react_1.default.createElement("div", { className: `
        drawer fixed top-0 left-0 w-full h-full
        ${end ? "drawer-end" : ""} 
    ` },
        react_1.default.createElement("input", { type: "checkbox", className: "drawer-toggle", checked: isVisible, readOnly: true }),
        react_1.default.createElement("div", { className: "drawer-content" }, children),
        react_1.default.createElement("div", { className: "drawer-side" },
            react_1.default.createElement("div", { role: "presentation", className: "drawer-overlay", onClick: onOverlayClick }),
            react_1.default.createElement("div", { className: "w-80 bg-base-100" }, sideContent))));
}
exports.default = Drawer;
