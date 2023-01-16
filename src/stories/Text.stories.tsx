import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "../components/Text/Text";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = (args) => {
  const { children } = args;
  return <Text {...args}>{children}</Text>;
};

Default.args = {
  size: "base",
  weight: "normal",
  children: "Hello world",
};
