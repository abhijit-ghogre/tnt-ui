"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
const react_1 = __importDefault(require("react"));
const rx_1 = require("react-icons/rx");
const Text_1 = __importDefault(require("../Text/Text"));
function Collapse(props) {
    const { children, heading, className, isCollapsed, onToggle } = props;
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("button", { className: "flex items-center justify-between px-1 py-3 w-full", onClick: onToggle },
            react_1.default.createElement(Text_1.default, null, heading),
            react_1.default.createElement("div", { className: `
            transition-transform transform-gpu
            ${isCollapsed ? "" : "-scale-y-100"}
          ` },
                react_1.default.createElement(rx_1.RxCaretDown, { size: 20 }))),
        react_1.default.createElement("div", { className: "divider m-0 h-0" }),
        react_1.default.createElement(framer_motion_1.AnimatePresence, null, !isCollapsed && (react_1.default.createElement(framer_motion_1.motion.div, { className: "overflow-hidden", layout: true, transition: { duration: 0.2, type: "tween" }, initial: {
                height: 0,
            }, animate: {
                height: "auto",
            }, exit: {
                height: 0,
            } },
            react_1.default.createElement("div", { className: "px-1 py-3" }, children))))));
}
exports.default = Collapse;
