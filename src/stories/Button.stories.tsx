import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../components/Button/Button";

export default {
  title: "Form/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => {
  const { children } = args;
  return <Button {...args}>{children}</Button>;
};

Default.args = {
  size: "md",
  variant: "solid",
  children: "Press me",
  fit: true,
};
