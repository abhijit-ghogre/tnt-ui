import { ComponentMeta, ComponentStory } from "@storybook/react";
import Drawer from "../components/Drawer/Drawer";

export default {
  title: "Drawer",
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

export const Default: ComponentStory<typeof Drawer> = (args) => {
  const { children } = args;
  return <Drawer {...args}>{children}</Drawer>;
};

Default.args = {
  isVisible: true,
  children: "Page contents",
  end: false,
  sideContent: <div>Side Content</div>,
  onOverlayClick: () => {},
};
