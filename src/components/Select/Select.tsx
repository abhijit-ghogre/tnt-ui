import React from "react";
import { default as ReactSelect, Props } from "react-select";

function Select(props: Props) {
  return (
    <ReactSelect
      {...props}
      unstyled
      components={{
        DropdownIndicator: () => null,
        // eslint-disable-next-line react/no-unstable-nested-components
        MenuList: ({ innerProps, children }) => (
          // @ts-ignore
          <ul
            {...innerProps}
            className="menu bg-base-300 border border-gray-300 border-opacity-20 rounded-box overflow-hidden"
          >
            {children}
          </ul>
        ),
        // eslint-disable-next-line react/no-unstable-nested-components
        Option: ({ innerProps, children, isSelected, isFocused }) => (
          // @ts-ignore
          <li {...innerProps}>
            <div
              className={`
                ${isSelected ? "active" : ""} 
                ${isFocused && !isSelected ? "bg-base-100" : ""}
              `}
            >
              {children}
            </div>
          </li>
        ),
      }}
      classNames={{
        control: () => "select select-bordered",
        noOptionsMessage: () => "p-4",
        clearIndicator: () => "cursor-pointer",
        multiValue: () => "badge gap-1",
        valueContainer: () => "gap-1",
      }}
    />
  );
}

export default Select;
