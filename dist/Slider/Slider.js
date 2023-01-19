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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
const react_1 = __importStar(require("react"));
function Slider(props) {
    const { children, currentSlide, onSlideChange, autoAnimate = true, animateInterval = 5000, transitionDuration = 0.5, ease = "easeInOut", areDotsVisible = true, } = props;
    const controls = (0, framer_motion_1.useAnimationControls)();
    const [resetFlip, setResetFlip] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            yield controls.start({
                x: `${-currentSlide * 100}%`,
            });
        }))();
    }, [controls, currentSlide, resetFlip]);
    (0, react_1.useEffect)(() => {
        if (autoAnimate) {
            const timeout = setTimeout(() => {
                if (currentSlide < react_1.default.Children.count(children) - 1) {
                    onSlideChange(currentSlide + 1);
                }
                else {
                    onSlideChange(0);
                }
            }, animateInterval);
            return () => clearTimeout(timeout);
        }
        return () => { };
    }, [autoAnimate, currentSlide, animateInterval, children, onSlideChange]);
    return (react_1.default.createElement("div", { className: "overflow-hidden" },
        react_1.default.createElement(framer_motion_1.motion.div, { className: "flex w-full", animate: controls, transition: {
                duration: transitionDuration,
                ease,
            }, drag: "x", onDragEnd: (event, info) => {
                if (info.offset.x < -50) {
                    if (currentSlide < react_1.default.Children.count(children) - 1) {
                        onSlideChange(currentSlide + 1);
                    }
                    else {
                        setResetFlip(!resetFlip);
                    }
                }
                else if (info.offset.x > 50) {
                    if (currentSlide > 0) {
                        onSlideChange(currentSlide - 1);
                    }
                    else {
                        setResetFlip(!resetFlip);
                    }
                }
                else {
                    onSlideChange(currentSlide);
                    setResetFlip(!resetFlip);
                }
            } }, react_1.default.Children.map(children, (child) => (react_1.default.createElement("div", { className: "min-w-full flex justify-center" }, child)))),
        areDotsVisible && (react_1.default.createElement("div", { className: "flex justify-center mt-2", role: "tablist" }, react_1.default.Children.map(children, (_, index) => (react_1.default.createElement("button", { key: index, className: "btn btn-ghost rounded-full btn-xs m-1 p-0 h-fit min-h-fit focus:outline-offset-0   ", onClick: () => onSlideChange(index) },
            react_1.default.createElement("span", { className: `badge badge-xs 
                ${index === currentSlide ? "bg-primary" : ""}
            ` }))))))));
}
exports.default = Slider;
