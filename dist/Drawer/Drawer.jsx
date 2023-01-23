"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Drawer(props) {
    const { isVisible, onOverlayClick, children = null, sideContent, end = false, } = props;
    return (<div className={`
        drawer fixed top-0 left-0 w-full h-full
        ${end ? "drawer-end" : ""} 
    `}>
      <input type="checkbox" className="drawer-toggle" checked={isVisible} readOnly/>
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <div role="presentation" className="drawer-overlay" onClick={onOverlayClick}/>
        <div className="w-80 bg-base-100">{sideContent}</div>
      </div>
    </div>);
}
exports.default = Drawer;
