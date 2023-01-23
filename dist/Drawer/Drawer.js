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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvRHJhd2VyL0RyYXdlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFVMUIsU0FBUyxNQUFNLENBQUMsS0FBWTtJQUMxQixNQUFNLEVBQ0osU0FBUyxFQUNULGNBQWMsRUFDZCxRQUFRLEVBQ1IsV0FBVyxFQUNYLEdBQUcsR0FBRyxLQUFLLEdBQ1osR0FBRyxLQUFLLENBQUM7SUFDVixPQUFPLENBQ0wsdUNBQ0UsU0FBUyxFQUFFOztVQUVQLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO0tBQzVCO1FBRUMseUNBQ0UsSUFBSSxFQUFDLFVBQVUsRUFDZixTQUFTLEVBQUMsZUFBZSxFQUN6QixPQUFPLEVBQUUsU0FBUyxFQUNsQixRQUFRLFNBQ1I7UUFDRix1Q0FBSyxTQUFTLEVBQUMsZ0JBQWdCLElBQUUsUUFBUSxDQUFPO1FBQ2hELHVDQUFLLFNBQVMsRUFBQyxhQUFhO1lBQzFCLHVDQUNFLElBQUksRUFBQyxjQUFjLEVBQ25CLFNBQVMsRUFBQyxnQkFBZ0IsRUFDMUIsT0FBTyxFQUFFLGNBQWMsR0FDdkI7WUFDRix1Q0FBSyxTQUFTLEVBQUMsa0JBQWtCLElBQUUsV0FBVyxDQUFPLENBQ2pELENBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xuICBvbk92ZXJsYXlDbGljaz86ICgpID0+IHZvaWQ7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHNpZGVDb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGVuZD86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIERyYXdlcihwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGlzVmlzaWJsZSxcbiAgICBvbk92ZXJsYXlDbGljayxcbiAgICBjaGlsZHJlbixcbiAgICBzaWRlQ29udGVudCxcbiAgICBlbmQgPSBmYWxzZSxcbiAgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICBkcmF3ZXIgZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGxcbiAgICAgICAgJHtlbmQgPyBcImRyYXdlci1lbmRcIiA6IFwiXCJ9IFxuICAgIGB9XG4gICAgPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImRyYXdlci10b2dnbGVcIlxuICAgICAgICBjaGVja2VkPXtpc1Zpc2libGV9XG4gICAgICAgIHJlYWRPbmx5XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcmF3ZXItY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhd2VyLXNpZGVcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRyYXdlci1vdmVybGF5XCJcbiAgICAgICAgICBvbkNsaWNrPXtvbk92ZXJsYXlDbGlja31cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTgwIGJnLWJhc2UtMTAwXCI+e3NpZGVDb250ZW50fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcbiJdfQ==