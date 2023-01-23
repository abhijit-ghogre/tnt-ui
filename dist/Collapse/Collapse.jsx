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
    return (<div className={className}>
      <button className="flex items-center justify-between px-1 py-3 w-full" onClick={onToggle}>
        <Text_1.default>{heading}</Text_1.default>
        <div className={`
            transition-transform transform-gpu
            ${isCollapsed ? "" : "-scale-y-100"}
          `}>
          <rx_1.RxCaretDown size={20}/>
        </div>
      </button>
      <div className="divider m-0 h-0"/>

      <framer_motion_1.AnimatePresence>
        {!isCollapsed && (<framer_motion_1.motion.div className="overflow-hidden" layout transition={{ duration: 0.2, type: "tween" }} initial={{
                height: 0,
            }} animate={{
                height: "auto",
            }} exit={{
                height: 0,
            }}>
            <div className="px-1 py-3">{children}</div>
          </framer_motion_1.motion.div>)}
      </framer_motion_1.AnimatePresence>
    </div>);
}
exports.default = Collapse;
