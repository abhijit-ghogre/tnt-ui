import { ComponentMeta, ComponentStory } from "@storybook/react";
import ResponsiveRow from "../components/ResponsiveRow/ResponsiveRow";

export default {
  title: "Layout/ResponsiveRow",
  component: ResponsiveRow,
  argTypes: {
    numberOfChildren: {
      type: "number",
    },
  },
} as ComponentMeta<typeof ResponsiveRow>;

export const Default: ComponentStory<typeof ResponsiveRow> = (args) => {
  // @ts-ignore
  const { numberOfChildren, ...remainingArgs } = args;
  return (
    <ResponsiveRow {...remainingArgs}>
      {Array.from(Array(numberOfChildren).keys()).map((child) => (
        <div
          key={child}
          className={`${
            child % 2 === 1 ? "bg-purple-200" : "bg-green-200"
          } p-3 flex-1`}
        >
          Child {child}
        </div>
      ))}
    </ResponsiveRow>
  );
};

Default.args = {
  breakAt: "sm",
  justify: "start",
  items: "stretch",
  // @ts-ignore
  numberOfChildren: 3,
};
