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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
const react_1 = __importStar(require("react"));
const ai_1 = require("react-icons/ai");
const Text_1 = __importDefault(require("../Text/Text"));
function Slider(props) {
    const { children, currentSlide, onSlideChange, autoAnimate = true, animateInterval = 5000, transitionDuration = 0.5, ease = "easeInOut", areDotsVisible = true, leftIcon = (react_1.default.createElement("div", { className: "btn btn-circle" },
        react_1.default.createElement(ai_1.AiOutlineLeft, null))), rightIcon = (react_1.default.createElement("div", { className: "btn btn-circle" },
        react_1.default.createElement(ai_1.AiOutlineRight, null))), areArrowsVisible = true, isSlideCountVisible = false, } = props;
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
    return (react_1.default.createElement("div", { className: "" },
        react_1.default.createElement("div", { className: "overflow-hidden relative" },
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
            areArrowsVisible && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("button", { className: "absolute top-1/2 -translate-y-1/2 left-1", onClick: () => currentSlide > 0
                        ? onSlideChange(currentSlide - 1)
                        : onSlideChange(react_1.default.Children.count(children) - 1) }, leftIcon),
                react_1.default.createElement("button", { className: "absolute top-1/2 -translate-y-1/2 right-1", onClick: () => currentSlide < react_1.default.Children.count(children) - 1
                        ? onSlideChange(currentSlide + 1)
                        : onSlideChange(0) }, rightIcon)))),
        areDotsVisible && (react_1.default.createElement("div", { className: "flex justify-center mt-2" }, react_1.default.Children.map(children, (_, index) => (react_1.default.createElement("button", { key: index, className: "btn btn-ghost rounded-full btn-xs m-1 p-0 h-fit min-h-fit focus:outline-offset-0   ", onClick: () => onSlideChange(index) },
            react_1.default.createElement("span", { className: `badge badge-xs 
                ${index === currentSlide ? "bg-primary" : ""}
            ` })))))),
        isSlideCountVisible && (react_1.default.createElement("div", { className: "pt-2 flex gap-2 items-center justify-center" },
            react_1.default.createElement("button", { onClick: () => currentSlide > 0
                    ? onSlideChange(currentSlide - 1)
                    : onSlideChange(react_1.default.Children.count(children) - 1) },
                react_1.default.createElement(ai_1.AiOutlineLeft, null)),
            react_1.default.createElement(Text_1.default, null, `${currentSlide + 1}/${react_1.default.Children.count(children)}`),
            react_1.default.createElement("button", { onClick: () => currentSlide < react_1.default.Children.count(children) - 1
                    ? onSlideChange(currentSlide + 1)
                    : onSlideChange(0) },
                react_1.default.createElement(ai_1.AiOutlineRight, null))))));
}
exports.default = Slider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUErRTtBQUMvRSwrQ0FBOEQ7QUFDOUQsdUNBQStEO0FBQy9ELHdEQUFnQztBQWlCaEMsU0FBUyxNQUFNLENBQUMsS0FBWTtJQUMxQixNQUFNLEVBQ0osUUFBUSxFQUNSLFlBQVksRUFDWixhQUFhLEVBQ2IsV0FBVyxHQUFHLElBQUksRUFDbEIsZUFBZSxHQUFHLElBQUksRUFDdEIsa0JBQWtCLEdBQUcsR0FBRyxFQUN4QixJQUFJLEdBQUcsV0FBVyxFQUNsQixjQUFjLEdBQUcsSUFBSSxFQUNyQixRQUFRLEdBQUcsQ0FDVCx1Q0FBSyxTQUFTLEVBQUMsZ0JBQWdCO1FBQzdCLDhCQUFDLGtCQUFhLE9BQUcsQ0FDYixDQUNQLEVBQ0QsU0FBUyxHQUFHLENBQ1YsdUNBQUssU0FBUyxFQUFDLGdCQUFnQjtRQUM3Qiw4QkFBQyxtQkFBYyxPQUFHLENBQ2QsQ0FDUCxFQUNELGdCQUFnQixHQUFHLElBQUksRUFDdkIsbUJBQW1CLEdBQUcsS0FBSyxHQUM1QixHQUFHLEtBQUssQ0FBQztJQUNWLE1BQU0sUUFBUSxHQUFHLElBQUEsb0NBQW9CLEdBQUUsQ0FBQztJQUN4QyxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUVsRCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsQ0FBQyxHQUFTLEVBQUU7WUFDVixNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxHQUFHLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRzthQUM3QixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUM7SUFDUCxD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QUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBR3RCLDhCQUFDLG1CQUFjLE9BQUcsQ0FDWCxDQUNMLENBQ1AsQ0FDRyxDQUNQLENBQUM7QUFDSixDQUFDO0FBRUQsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWFzaW5nRGVmaW5pdGlvbiwgbW90aW9uLCB1c2VBbmltYXRpb25Db250cm9scyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBaU91dGxpbmVMZWZ0LCBBaU91dGxpbmVSaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHQvVGV4dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBjdXJyZW50U2xpZGU6IG51bWJlcjtcbiAgb25TbGlkZUNoYW5nZTogKGN1cnJlbnRTbGlkZTogbnVtYmVyKSA9PiB2b2lkO1xuICBhdXRvQW5pbWF0ZT86IGJvb2xlYW47XG4gIGFuaW1hdGVJbnRlcnZhbD86IG51bWJlcjtcbiAgdHJhbnNpdGlvbkR1cmF0aW9uPzogbnVtYmVyO1xuICBlYXNlPzogRWFzaW5nRGVmaW5pdGlvbjtcbiAgYXJlRG90c1Zpc2libGU/OiBib29sZWFuO1xuICBsZWZ0SWNvbj86IFJlYWN0Tm9kZTtcbiAgcmlnaHRJY29uPzogUmVhY3ROb2RlO1xuICBhcmVBcnJvd3NWaXNpYmxlPzogYm9vbGVhbjtcbiAgaXNTbGlkZUNvdW50VmlzaWJsZT86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIFNsaWRlcihwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGN1cnJlbnRTbGlkZSxcbiAgICBvblNsaWRlQ2hhbmdlLFxuICAgIGF1dG9BbmltYXRlID0gdHJ1ZSxcbiAgICBhbmltYXRlSW50ZXJ2YWwgPSA1MDAwLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IDAuNSxcbiAgICBlYXNlID0gXCJlYXNlSW5PdXRcIixcbiAgICBhcmVEb3RzVmlzaWJsZSA9IHRydWUsXG4gICAgbGVmdEljb24gPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tY2lyY2xlXCI+XG4gICAgICAgIDxBaU91dGxpbmVMZWZ0IC8+XG4gICAgICA8L2Rpdj5cbiAgICApLFxuICAgIHJpZ2h0SWNvbiA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaXJjbGVcIj5cbiAgICAgICAgPEFpT3V0bGluZVJpZ2h0IC8+XG4gICAgICA8L2Rpdj5cbiAgICApLFxuICAgIGFyZUFycm93c1Zpc2libGUgPSB0cnVlLFxuICAgIGlzU2xpZGVDb3VudFZpc2libGUgPSBmYWxzZSxcbiAgfSA9IHByb3BzO1xuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbkNvbnRyb2xzKCk7XG4gIGNvbnN0IFtyZXNldEZsaXAsIHNldFJlc2V0RmxpcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgY29udHJvbHMuc3RhcnQoe1xuICAgICAgICB4OiBgJHstY3VycmVudFNsaWRlICogMTAwfSVgLFxuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfSwgW2NvbnRyb2xzLCBjdXJyZW50U2xpZGUsIHJlc2V0RmxpcF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGF1dG9BbmltYXRlKSB7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPCBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgLSAxKSB7XG4gICAgICAgICAgb25TbGlkZUNoYW5nZShjdXJyZW50U2xpZGUgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvblNsaWRlQ2hhbmdlKDApO1xuICAgICAgICB9XG4gICAgICB9LCBhbmltYXRlSW50ZXJ2YWwpO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9LCBbYXV0b0FuaW1hdGUsIGN1cnJlbnRTbGlkZSwgYW5pbWF0ZUludGVydmFsLCBjaGlsZHJlbiwgb25TbGlkZUNoYW5nZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlXCI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIlxuICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICBlYXNlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgZHJhZz1cInhcIlxuICAgICAgICAgIG9uRHJhZ0VuZD17KGV2ZW50LCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5mby5vZmZzZXQueCA8IC01MCkge1xuICAgICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlIDwgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pIC0gMSkge1xuICAgICAgICAgICAgICAgIG9uU2xpZGVDaGFuZ2UoY3VycmVudFNsaWRlICsgMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UmVzZXRGbGlwKCFyZXNldEZsaXApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZm8ub2Zmc2V0LnggPiA1MCkge1xuICAgICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlID4gMCkge1xuICAgICAgICAgICAgICAgIG9uU2xpZGVDaGFuZ2UoY3VycmVudFNsaWRlIC0gMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UmVzZXRGbGlwKCFyZXNldEZsaXApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvblNsaWRlQ2hhbmdlKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICAgIHNldFJlc2V0RmxpcCghcmVzZXRGbGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPntjaGlsZH08L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICB7YXJlQXJyb3dzVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIGxlZnQtMVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID4gMFxuICAgICAgICAgICAgICAgICAgPyBvblNsaWRlQ2hhbmdlKGN1cnJlbnRTbGlkZSAtIDEpXG4gICAgICAgICAgICAgICAgICA6IG9uU2xpZGVDaGFuZ2UoUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pIC0gMSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGVmdEljb259XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHJpZ2h0LTFcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA8IFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSAtIDFcbiAgICAgICAgICAgICAgICAgID8gb25TbGlkZUNoYW5nZShjdXJyZW50U2xpZGUgKyAxKVxuICAgICAgICAgICAgICAgICAgOiBvblNsaWRlQ2hhbmdlKDApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3JpZ2h0SWNvbn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7YXJlRG90c1Zpc2libGUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMlwiPlxuICAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IHJvdW5kZWQtZnVsbCBidG4teHMgbS0xIHAtMCBoLWZpdCBtaW4taC1maXQgZm9jdXM6b3V0bGluZS1vZmZzZXQtMCAgIFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2xpZGVDaGFuZ2UoaW5kZXgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJhZGdlIGJhZGdlLXhzIFxuICAgICAgICAgICAgICAgICR7aW5kZXggPT09IGN1cnJlbnRTbGlkZSA/IFwiYmctcHJpbWFyeVwiIDogXCJcIn1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2lzU2xpZGVDb3VudFZpc2libGUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPiAwXG4gICAgICAgICAgICAgICAgPyBvblNsaWRlQ2hhbmdlKGN1cnJlbnRTbGlkZSAtIDEpXG4gICAgICAgICAgICAgICAgOiBvblNsaWRlQ2hhbmdlKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSAtIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFpT3V0bGluZUxlZnQgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8VGV4dD57YCR7Y3VycmVudFNsaWRlICsgMX0vJHtSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbil9YH08L1RleHQ+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgY3VycmVudFNsaWRlIDwgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pIC0gMVxuICAgICAgICAgICAgICAgID8gb25TbGlkZUNoYW5nZShjdXJyZW50U2xpZGUgKyAxKVxuICAgICAgICAgICAgICAgIDogb25TbGlkZUNoYW5nZSgwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBaU91dGxpbmVSaWdodCAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcbiJdfQ==