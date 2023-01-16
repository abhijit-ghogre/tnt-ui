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
          <ul {...innerProps} className="menu bg-base-200">
            {children}
          </ul>
        ),
        // eslint-disable-next-line react/no-unstable-nested-components
        Option: ({ innerProps, children, isSelected, isFocused }) => (
          // @ts-ignore
          <li {...innerProps} className={isFocused ? "bordered" : ""}>
            <div className={isSelected ? "active" : ""}>{children}</div>
          </li>
        ),
      }}
      classNames={{
        control: () => "select select-bordered",
        noOptionsMessage: () => "p-4",
        clearIndicator: () => "cursor-pointer",
        multiValue: () => "badge",
      }}
    />
  );
}

export default Select;
