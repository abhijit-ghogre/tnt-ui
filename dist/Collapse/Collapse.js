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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGFwc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9Db2xsYXBzZS9Db2xsYXBzZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBd0Q7QUFDeEQsa0RBQTBCO0FBQzFCLHVDQUE2QztBQUM3Qyx3REFBZ0M7QUFVaEMsU0FBUyxRQUFRLENBQUMsS0FBWTtJQUM1QixNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUN0RSxPQUFPLENBQ0wsdUNBQUssU0FBUyxFQUFFLFNBQVM7UUFDdkIsMENBQ0UsU0FBUyxFQUFDLG9EQUFvRCxFQUM5RCxPQUFPLEVBQUUsUUFBUTtZQUVqQiw4QkFBQyxjQUFJLFFBQUUsT0FBTyxDQUFRO1lBQ3RCLHVDQUNFLFNBQVMsRUFBRTs7Y0FFUCxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYztXQUNwQztnQkFFRCw4QkFBQyxnQkFBVyxJQUFDLElBQUksRUFBRSxFQUFFLEdBQUksQ0FDckIsQ0FDQztRQUNULHVDQUFLLFNBQVMsRUFBQyxpQkFBaUIsR0FBRztRQUVuQyw4QkFBQywrQkFBZSxRQUNiLENBQUMsV0FBVyxJQUFJLENBQ2YsOEJBQUMsc0JBQU0sQ0FBQyxHQUFHLElBQ1QsU0FBUyxFQUFDLGlCQUFpQixFQUMzQixNQUFNLFFBQ04sVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQzVDLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsQ0FBQzthQUNWLEVBQ0QsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxNQUFNO2FBQ2YsRUFDRCxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLENBQUM7YUFDVjtZQUVELHVDQUFLLFNBQVMsRUFBQyxXQUFXLElBQUUsUUFBUSxDQUFPLENBQ2hDLENBQ2QsQ0FDZSxDQUNkLENBQ1AsQ0FBQztBQUNKLENBQUM7QUFFRCxrQkFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSeENhcmV0RG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9yeFwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHQvVGV4dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBoZWFkaW5nOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgaXNDb2xsYXBzZWQ6IGJvb2xlYW47XG4gIG9uVG9nZ2xlOiAoKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBDb2xsYXBzZShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgaGVhZGluZywgY2xhc3NOYW1lLCBpc0NvbGxhcHNlZCwgb25Ub2dnbGUgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMSBweS0zIHctZnVsbFwiXG4gICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlfVxuICAgICAgPlxuICAgICAgICA8VGV4dD57aGVhZGluZ308L1RleHQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybS1ncHVcbiAgICAgICAgICAgICR7aXNDb2xsYXBzZWQgPyBcIlwiIDogXCItc2NhbGUteS0xMDBcIn1cbiAgICAgICAgICBgfVxuICAgICAgICA+XG4gICAgICAgICAgPFJ4Q2FyZXREb3duIHNpemU9ezIwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyIG0tMCBoLTBcIiAvPlxuXG4gICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICB7IWlzQ29sbGFwc2VkICYmIChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yLCB0eXBlOiBcInR3ZWVuXCIgfX1cbiAgICAgICAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBleGl0PXt7XG4gICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0xIHB5LTNcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlO1xuIl19