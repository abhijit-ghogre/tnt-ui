"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Card(props) {
    const { className = "", children } = props;
    return (react_1.default.createElement("div", { className: `card bg-base-300 shadow p-4 ${className}` }, children));
}
exports.default = Card;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFPMUIsU0FBUyxJQUFJLENBQUMsS0FBWTtJQUN4QixNQUFNLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDM0MsT0FBTyxDQUNMLHVDQUFLLFNBQVMsRUFBRSwrQkFBK0IsU0FBUyxFQUFFLElBQUcsUUFBUSxDQUFPLENBQzdFLENBQUM7QUFDSixDQUFDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmZ1bmN0aW9uIENhcmQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lID0gXCJcIiwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZCBiZy1iYXNlLTMwMCBzaGFkb3cgcC00ICR7Y2xhc3NOYW1lfWB9PntjaGlsZHJlbn08L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdfQ==