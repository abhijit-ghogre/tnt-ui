"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_select_1 = __importDefault(require("react-select"));
function Select(props) {
    return (react_1.default.createElement(react_select_1.default, Object.assign({}, props, { unstyled: true, components: {
            DropdownIndicator: () => null,
            // eslint-disable-next-line react/no-unstable-nested-components
            MenuList: ({ innerProps, children }) => (react_1.default.createElement("div", Object.assign({}, innerProps),
                react_1.default.createElement("ul", { className: "menu bg-base-300 border border-gray-300 border-opacity-20 rounded-box overflow-hidden" }, children))),
            // eslint-disable-next-line react/no-unstable-nested-components
            Option: ({ innerProps, children, isSelected, isFocused }) => (react_1.default.createElement("li", null,
                react_1.default.createElement("div", Object.assign({}, innerProps, { className: `
                ${isSelected ? "active" : ""} 
                ${isFocused && !isSelected ? "bg-base-100" : ""}
              ` }), children))),
        }, classNames: {
            control: () => "select select-bordered",
            noOptionsMessage: () => "p-4",
            clearIndicator: () => "cursor-pointer",
            multiValue: () => "badge gap-1",
            valueContainer: () => "gap-1",
        } })));
}
exports.default = Select;
