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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFDMUIsZ0VBQTZEO0FBRTdELFNBQVMsTUFBTSxDQUFDLEtBQVk7SUFDMUIsT0FBTyxDQUNMLDhCQUFDLHNCQUFXLG9CQUNOLEtBQUssSUFDVCxRQUFRLFFBQ1IsVUFBVSxFQUFFO1lBQ1YsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTtZQUM3QiwrREFBK0Q7WUFDL0QsUUFBUSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQ3RDLHVEQUFTLFVBQVU7Z0JBQ2pCLHNDQUFJLFNBQVMsRUFBQyx1RkFBdUYsSUFDbEcsUUFBUSxDQUNOLENBQ0QsQ0FDUDtZQUNELCtEQUErRDtZQUMvRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUMzRDtnQkFDRSx1REFDTSxVQUFVLElBQ2QsU0FBUyxFQUFFO2tCQUNQLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2tCQUMxQixTQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtlQUNoRCxLQUVBLFFBQVEsQ0FDTCxDQUNILENBQ047U0FDRixFQUNELFVBQVUsRUFBRTtZQUNWLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyx3QkFBd0I7WUFDdkMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSztZQUM3QixjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCO1lBQ3RDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhO1lBQy9CLGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPO1NBQzlCLElBQ0QsQ0FDSCxDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgUmVhY3RTZWxlY3QsIFByb3BzIH0gZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuXG5mdW5jdGlvbiBTZWxlY3QocHJvcHM6IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0U2VsZWN0XG4gICAgICB7Li4ucHJvcHN9XG4gICAgICB1bnN0eWxlZFxuICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICBEcm9wZG93bkluZGljYXRvcjogKCkgPT4gbnVsbCxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVuc3RhYmxlLW5lc3RlZC1jb21wb25lbnRzXG4gICAgICAgIE1lbnVMaXN0OiAoeyBpbm5lclByb3BzLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgICAgICAgPGRpdiB7Li4uaW5uZXJQcm9wc30+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudSBiZy1iYXNlLTMwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJvcmRlci1vcGFjaXR5LTIwIHJvdW5kZWQtYm94IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW5zdGFibGUtbmVzdGVkLWNvbXBvbmVudHNcbiAgICAgICAgT3B0aW9uOiAoeyBpbm5lclByb3BzLCBjaGlsZHJlbiwgaXNTZWxlY3RlZCwgaXNGb2N1c2VkIH0pID0+IChcbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAke2lzU2VsZWN0ZWQgPyBcImFjdGl2ZVwiIDogXCJcIn0gXG4gICAgICAgICAgICAgICAgJHtpc0ZvY3VzZWQgJiYgIWlzU2VsZWN0ZWQgPyBcImJnLWJhc2UtMTAwXCIgOiBcIlwifVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApLFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgY29udHJvbDogKCkgPT4gXCJzZWxlY3Qgc2VsZWN0LWJvcmRlcmVkXCIsXG4gICAgICAgIG5vT3B0aW9uc01lc3NhZ2U6ICgpID0+IFwicC00XCIsXG4gICAgICAgIGNsZWFySW5kaWNhdG9yOiAoKSA9PiBcImN1cnNvci1wb2ludGVyXCIsXG4gICAgICAgIG11bHRpVmFsdWU6ICgpID0+IFwiYmFkZ2UgZ2FwLTFcIixcbiAgICAgICAgdmFsdWVDb250YWluZXI6ICgpID0+IFwiZ2FwLTFcIixcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIl19