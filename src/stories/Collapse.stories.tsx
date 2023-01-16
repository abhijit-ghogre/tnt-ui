import { ComponentMeta, ComponentStory } from "@storybook/react";
import Collapse from "../components/Collapse/Collapse";

export default {
  title: "Collapse",
  component: Collapse,
} as ComponentMeta<typeof Collapse>;

export const Default: ComponentStory<typeof Collapse> = (args) => {
  const { children, ...rest } = args;
  return <Collapse {...rest}>{children}</Collapse>;
};

Default.args = {
  heading: "Heading",
  onToggle: () => {},
  isCollapsed: true,
  children: (
    <div>
      <div>Some content.</div>
      <div>Some content.</div>
      <div>Some content.</div>
      <div>Some content.</div>
      <div>Some content.</div>
      <div>Some content.</div>
    </div>
  ),
};
