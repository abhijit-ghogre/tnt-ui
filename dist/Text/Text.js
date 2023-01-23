"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const getTagName = (size) => {
    switch (size) {
        case "xs":
            return "p";
        case "sm":
            return "p";
        case "lg":
            return "h3";
        case "xl":
            return "h2";
        case "2xl":
            return "h1";
        case "base":
        default:
            return "p";
    }
};
const getTextSizeClassNames = (size) => {
    switch (size) {
        case "xs":
            return "text-xs";
        case "sm":
            return "text-sm";
        case "lg":
            return "text-lg";
        case "xl":
            return "text-xl";
        case "2xl":
            return "text-2xl";
        case "base":
        default:
            return "text-base";
    }
};
const getTextWeightClassNames = (weight) => {
    switch (weight) {
        case "light":
            return "font-light";
        case "bold":
            return "font-bold";
        case "normal":
        default:
            return "font-normal";
    }
};
function Text(props) {
    const { children, className = "", size = "base", weight = "normal", link = "", target = "_self", } = props;
    const TagName = getTagName(size);
    const commonClasses = `
        ${getTextSizeClassNames(size)}
        ${getTextWeightClassNames(weight)}
  `;
    if (link) {
        return (react_1.default.createElement(link_1.default, { href: link, className: `${commonClasses} link ${className}`, target: target }, children));
    }
    return (react_1.default.createElement(TagName, { className: `${commonClasses} ${className}` }, children));
}
exports.default = Text;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1RleHQvVGV4dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFDMUIscURBQTZCO0FBYzdCLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7SUFDaEMsUUFBUSxJQUFJLEVBQUU7UUFDWixLQUFLLElBQUk7WUFDUCxPQUFPLEdBQUcsQ0FBQztRQUNiLEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxDQUFDO1FBQ2IsS0FBSyxJQUFJO1lBQ1AsT0FBTyxJQUFJLENBQUM7UUFDZCxLQUFLLElBQUk7WUFDUCxPQUFPLElBQUksQ0FBQztRQUNkLEtBQUssS0FBSztZQUNSLE9BQU8sSUFBSSxDQUFDO1FBQ2QsS0FBSyxNQUFNLENBQUM7UUFDWjtZQUNFLE9BQU8sR0FBRyxDQUFDO0tBQ2Q7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLHFCQUFxQixHQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7SUFDM0MsUUFBUSxJQUFJLEVBQUU7UUFDWixLQUFLLElBQUk7WUFDUCxPQUFPLFNBQVMsQ0FBQztRQUNuQixLQUFLLElBQUk7WUFDUCxPQUFPLFNBQVMsQ0FBQztRQUNuQixLQUFLLElBQUk7WUFDUCxPQUFPLFNBQVMsQ0FBQztRQUNuQixLQUFLLElBQUk7WUFDUCxPQUFPLFNBQVMsQ0FBQztRQUNuQixLQUFLLEtBQUs7WUFDUixPQUFPLFVBQVUsQ0FBQztRQUNwQixLQUFLLE1BQU0sQ0FBQztRQUNaO1lBQ0UsT0FBTyxXQUFXLENBQUM7S0FDdEI7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLHVCQUF1QixHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUU7SUFDakQsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLE9BQU87WUFDVixPQUFPLFlBQVksQ0FBQztRQUN0QixLQUFLLE1BQU07WUFDVCxPQUFPLFdBQVcsQ0FBQztRQUNyQixLQUFLLFFBQVEsQ0FBQztRQUNkO1lBQ0UsT0FBTyxhQUFhLENBQUM7S0FDeEI7QUFDSCxDQUFDLENBQUM7QUFFRixTQUFTLElBQUksQ0FBQyxLQUFZO0lBQ3hCLE1BQU0sRUFDSixRQUFRLEVBQ1IsU0FBUyxHQUFHLEVBQUUsRUFDZCxJQUFJLEdBQUcsTUFBTSxFQUNiLE1BQU0sR0FBRyxRQUFRLEVBQ2pCLElBQUksR0FBRyxFQUFFLEVBQ1QsTUFBTSxHQUFHLE9BQU8sR0FDakIsR0FBRyxLQUFLLENBQUM7SUFDVixNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakMsTUFBTSxhQUFhLEdBQUc7VUFDZCxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7VUFDM0IsdUJBQXVCLENBQUMsTUFBTSxDQUFDO0dBQ3RDLENBQUM7SUFFRixJQUFJLElBQUksRUFBRTtRQUNSLE9BQU8sQ0FDTCw4QkFBQyxjQUFJLElBQ0gsSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUUsR0FBRyxhQUFhLFNBQVMsU0FBUyxFQUFFLEVBQy9DLE1BQU0sRUFBRSxNQUFNLElBRWIsUUFBUSxDQUNKLENBQ1IsQ0FBQztLQUNIO0lBRUQsT0FBTyxDQUNMLDhCQUFDLE9BQU8sSUFBQyxTQUFTLEVBQUUsR0FBRyxhQUFhLElBQUksU0FBUyxFQUFFLElBQUcsUUFBUSxDQUFXLENBQzFFLENBQUM7QUFDSixDQUFDO0FBQ0Qsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG50eXBlIFNpemUgPSBcInNtXCIgfCBcInhzXCIgfCBcImJhc2VcIiB8IFwibGdcIiB8IFwieGxcIiB8IFwiMnhsXCI7XG50eXBlIFdlaWdodCA9IFwibGlnaHRcIiB8IFwibm9ybWFsXCIgfCBcImJvbGRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgc2l6ZT86IFNpemU7XG4gIHdlaWdodD86IFdlaWdodDtcbiAgbGluaz86IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB0YXJnZXQ/OiBcIl9ibGFua1wiIHwgXCJfc2VsZlwiO1xufVxuXG5jb25zdCBnZXRUYWdOYW1lID0gKHNpemU6IFNpemUpID0+IHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSBcInhzXCI6XG4gICAgICByZXR1cm4gXCJwXCI7XG4gICAgY2FzZSBcInNtXCI6XG4gICAgICByZXR1cm4gXCJwXCI7XG4gICAgY2FzZSBcImxnXCI6XG4gICAgICByZXR1cm4gXCJoM1wiO1xuICAgIGNhc2UgXCJ4bFwiOlxuICAgICAgcmV0dXJuIFwiaDJcIjtcbiAgICBjYXNlIFwiMnhsXCI6XG4gICAgICByZXR1cm4gXCJoMVwiO1xuICAgIGNhc2UgXCJiYXNlXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcInBcIjtcbiAgfVxufTtcblxuY29uc3QgZ2V0VGV4dFNpemVDbGFzc05hbWVzID0gKHNpemU6IFNpemUpID0+IHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSBcInhzXCI6XG4gICAgICByZXR1cm4gXCJ0ZXh0LXhzXCI7XG4gICAgY2FzZSBcInNtXCI6XG4gICAgICByZXR1cm4gXCJ0ZXh0LXNtXCI7XG4gICAgY2FzZSBcImxnXCI6XG4gICAgICByZXR1cm4gXCJ0ZXh0LWxnXCI7XG4gICAgY2FzZSBcInhsXCI6XG4gICAgICByZXR1cm4gXCJ0ZXh0LXhsXCI7XG4gICAgY2FzZSBcIjJ4bFwiOlxuICAgICAgcmV0dXJuIFwidGV4dC0yeGxcIjtcbiAgICBjYXNlIFwiYmFzZVwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJ0ZXh0LWJhc2VcIjtcbiAgfVxufTtcblxuY29uc3QgZ2V0VGV4dFdlaWdodENsYXNzTmFtZXMgPSAod2VpZ2h0OiBXZWlnaHQpID0+IHtcbiAgc3dpdGNoICh3ZWlnaHQpIHtcbiAgICBjYXNlIFwibGlnaHRcIjpcbiAgICAgIHJldHVybiBcImZvbnQtbGlnaHRcIjtcbiAgICBjYXNlIFwiYm9sZFwiOlxuICAgICAgcmV0dXJuIFwiZm9udC1ib2xkXCI7XG4gICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJmb250LW5vcm1hbFwiO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUZXh0KHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lID0gXCJcIixcbiAgICBzaXplID0gXCJiYXNlXCIsXG4gICAgd2VpZ2h0ID0gXCJub3JtYWxcIixcbiAgICBsaW5rID0gXCJcIixcbiAgICB0YXJnZXQgPSBcIl9zZWxmXCIsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgVGFnTmFtZSA9IGdldFRhZ05hbWUoc2l6ZSk7XG5cbiAgY29uc3QgY29tbW9uQ2xhc3NlcyA9IGBcbiAgICAgICAgJHtnZXRUZXh0U2l6ZUNsYXNzTmFtZXMoc2l6ZSl9XG4gICAgICAgICR7Z2V0VGV4dFdlaWdodENsYXNzTmFtZXMod2VpZ2h0KX1cbiAgYDtcblxuICBpZiAobGluaykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlua1xuICAgICAgICBocmVmPXtsaW5rfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NvbW1vbkNsYXNzZXN9IGxpbmsgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgdGFyZ2V0PXt0YXJnZXR9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGFnTmFtZSBjbGFzc05hbWU9e2Ake2NvbW1vbkNsYXNzZXN9ICR7Y2xhc3NOYW1lfWB9PntjaGlsZHJlbn08L1RhZ05hbWU+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIl19