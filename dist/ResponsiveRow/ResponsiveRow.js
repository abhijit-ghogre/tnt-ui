"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const getJustifyClassNames = (justify) => {
    switch (justify) {
        case "end":
            return "justify-end";
        case "center":
            return "justify-center";
        case "between":
            return "justify-between";
        case "around":
            return "justify-around";
        case "evenly":
            return "justify-evenly";
        case "start":
        default:
            return "justify-start";
    }
};
const getItemsClassnames = (items) => {
    switch (items) {
        case "start":
            return "items-start";
        case "end":
            return "items-end";
        case "center":
            return "items-center";
        case "stretch":
        default:
            return "items-stretch";
    }
};
const getBreakpointClassNames = (breakAt) => {
    switch (breakAt) {
        case "lg":
            return "lg:flex-row";
        case "md":
            return "md:flex-row";
        case "sm":
        default:
            return "sm:flex-row";
    }
};
function ResponsiveRow(props) {
    const { children, className = "", justify = "start", items = "stretch", breakAt = "sm", } = props;
    return (react_1.default.createElement("div", { className: `
        flex
        flex-col
        ${getJustifyClassNames(justify)}
        ${getItemsClassnames(items)}
        ${getBreakpointClassNames(breakAt)}    
        ${className}
      ` }, children));
}
exports.default = ResponsiveRow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2l2ZVJvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1Jlc3BvbnNpdmVSb3cvUmVzcG9uc2l2ZVJvdy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFhMUIsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtJQUNoRCxRQUFRLE9BQU8sRUFBRTtRQUNmLEtBQUssS0FBSztZQUNSLE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLEtBQUssUUFBUTtZQUNYLE9BQU8sZ0JBQWdCLENBQUM7UUFDMUIsS0FBSyxTQUFTO1lBQ1osT0FBTyxpQkFBaUIsQ0FBQztRQUMzQixLQUFLLFFBQVE7WUFDWCxPQUFPLGdCQUFnQixDQUFDO1FBQzFCLEtBQUssUUFBUTtZQUNYLE9BQU8sZ0JBQWdCLENBQUM7UUFDMUIsS0FBSyxPQUFPLENBQUM7UUFDYjtZQUNFLE9BQU8sZUFBZSxDQUFDO0tBQzFCO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO0lBQzFDLFFBQVEsS0FBSyxFQUFFO1FBQ2IsS0FBSyxPQUFPO1lBQ1YsT0FBTyxhQUFhLENBQUM7UUFDdkIsS0FBSyxLQUFLO1lBQ1IsT0FBTyxXQUFXLENBQUM7UUFDckIsS0FBSyxRQUFRO1lBQ1gsT0FBTyxjQUFjLENBQUM7UUFDeEIsS0FBSyxTQUFTLENBQUM7UUFDZjtZQUNFLE9BQU8sZUFBZSxDQUFDO0tBQzFCO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLE9BQW1CLEVBQUUsRUFBRTtJQUN0RCxRQUFRLE9BQU8sRUFBRTtRQUNmLEtBQUssSUFBSTtZQUNQLE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLEtBQUssSUFBSTtZQUNQLE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLEtBQUssSUFBSSxDQUFDO1FBQ1Y7WUFDRSxPQUFPLGFBQWEsQ0FBQztLQUN4QjtBQUNILENBQUMsQ0FBQztBQUNGLFNBQVMsYUFBYSxDQUFDLEtBQVk7SUFDakMsTUFBTSxFQUNKLFFBQVEsRUFDUixTQUFTLEdBQUcsRUFBRSxFQUNkLE9BQU8sR0FBRyxPQUFPLEVBQ2pCLEtBQUssR0FBRyxTQUFTLEVBQ2pCLE9BQU8sR0FBRyxJQUFJLEdBQ2YsR0FBRyxLQUFLLENBQUM7SUFDVixPQUFPLENBQ0wsdUNBQ0UsU0FBUyxFQUFFOzs7VUFHUCxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7VUFDN0Isa0JBQWtCLENBQUMsS0FBSyxDQUFDO1VBQ3pCLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztVQUNoQyxTQUFTO09BQ1osSUFFQSxRQUFRLENBQ0wsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBKdXN0aWZ5ID0gXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiY2VudGVyXCIgfCBcImJldHdlZW5cIiB8IFwiYXJvdW5kXCIgfCBcImV2ZW5seVwiO1xudHlwZSBJdGVtcyA9IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImNlbnRlclwiIHwgXCJzdHJldGNoXCI7XG50eXBlIEJyYWtlUG9pbnQgPSBcInNtXCIgfCBcIm1kXCIgfCBcImxnXCI7XG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBqdXN0aWZ5PzogSnVzdGlmeTtcbiAgaXRlbXM/OiBJdGVtcztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgYnJlYWtBdD86IEJyYWtlUG9pbnQ7XG59XG5cbmNvbnN0IGdldEp1c3RpZnlDbGFzc05hbWVzID0gKGp1c3RpZnk6IEp1c3RpZnkpID0+IHtcbiAgc3dpdGNoIChqdXN0aWZ5KSB7XG4gICAgY2FzZSBcImVuZFwiOlxuICAgICAgcmV0dXJuIFwianVzdGlmeS1lbmRcIjtcbiAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICByZXR1cm4gXCJqdXN0aWZ5LWNlbnRlclwiO1xuICAgIGNhc2UgXCJiZXR3ZWVuXCI6XG4gICAgICByZXR1cm4gXCJqdXN0aWZ5LWJldHdlZW5cIjtcbiAgICBjYXNlIFwiYXJvdW5kXCI6XG4gICAgICByZXR1cm4gXCJqdXN0aWZ5LWFyb3VuZFwiO1xuICAgIGNhc2UgXCJldmVubHlcIjpcbiAgICAgIHJldHVybiBcImp1c3RpZnktZXZlbmx5XCI7XG4gICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcImp1c3RpZnktc3RhcnRcIjtcbiAgfVxufTtcblxuY29uc3QgZ2V0SXRlbXNDbGFzc25hbWVzID0gKGl0ZW1zOiBJdGVtcykgPT4ge1xuICBzd2l0Y2ggKGl0ZW1zKSB7XG4gICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICByZXR1cm4gXCJpdGVtcy1zdGFydFwiO1xuICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgIHJldHVybiBcIml0ZW1zLWVuZFwiO1xuICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgIHJldHVybiBcIml0ZW1zLWNlbnRlclwiO1xuICAgIGNhc2UgXCJzdHJldGNoXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIml0ZW1zLXN0cmV0Y2hcIjtcbiAgfVxufTtcblxuY29uc3QgZ2V0QnJlYWtwb2ludENsYXNzTmFtZXMgPSAoYnJlYWtBdDogQnJha2VQb2ludCkgPT4ge1xuICBzd2l0Y2ggKGJyZWFrQXQpIHtcbiAgICBjYXNlIFwibGdcIjpcbiAgICAgIHJldHVybiBcImxnOmZsZXgtcm93XCI7XG4gICAgY2FzZSBcIm1kXCI6XG4gICAgICByZXR1cm4gXCJtZDpmbGV4LXJvd1wiO1xuICAgIGNhc2UgXCJzbVwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJzbTpmbGV4LXJvd1wiO1xuICB9XG59O1xuZnVuY3Rpb24gUmVzcG9uc2l2ZVJvdyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzTmFtZSA9IFwiXCIsXG4gICAganVzdGlmeSA9IFwic3RhcnRcIixcbiAgICBpdGVtcyA9IFwic3RyZXRjaFwiLFxuICAgIGJyZWFrQXQgPSBcInNtXCIsXG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgZmxleFxuICAgICAgICBmbGV4LWNvbFxuICAgICAgICAke2dldEp1c3RpZnlDbGFzc05hbWVzKGp1c3RpZnkpfVxuICAgICAgICAke2dldEl0ZW1zQ2xhc3NuYW1lcyhpdGVtcyl9XG4gICAgICAgICR7Z2V0QnJlYWtwb2ludENsYXNzTmFtZXMoYnJlYWtBdCl9ICAgIFxuICAgICAgICAke2NsYXNzTmFtZX1cbiAgICAgIGB9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zaXZlUm93O1xuIl19