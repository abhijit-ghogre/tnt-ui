"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_dom_1 = require("react-dom");
function Drawer(props) {
    const { isVisible, onOverlayClick, children = null, sideContent, end = false, disablePortal = false, } = props;
    const ref = (0, react_1.useRef)(null);
    const [mounted, setMounted] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        ref.current = document.querySelector("body");
        setMounted(true);
    }, []);
    const drawer = () => (<div className={`drawer fixed top-0 left-0 w-full h-full ${end ? "drawer-end" : ""}`}>
      <input type="checkbox" className="drawer-toggle" checked={isVisible} readOnly/>
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <div role="presentation" className="drawer-overlay" onClick={onOverlayClick}/>
        <div className="w-80 bg-base-100">{sideContent}</div>
      </div>
    </div>);
    if (disablePortal) {
        return <>{drawer()}</>;
    }
    return mounted && ref.current ? (0, react_dom_1.createPortal)(drawer(), document.body) : null;
}
exports.default = Drawer;
