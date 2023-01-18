import { ComponentMeta, ComponentStory } from "@storybook/react";
import QuantityStepper from "../components/QuantityStepper/QuantityStepper";

export default {
  title: "QuantityStepper",
  component: QuantityStepper,
} as ComponentMeta<typeof QuantityStepper>;

export const Default: ComponentStory<typeof QuantityStepper> = (args) => (
  <QuantityStepper {...args} />
);

Default.args = {
  size: "sm",
  variant: "ghost",
  initialValue: 0,
};
