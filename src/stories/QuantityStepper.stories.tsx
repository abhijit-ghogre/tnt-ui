import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import QuantityStepper from "../components/QuantityStepper/QuantityStepper";

export default {
  title: "QuantityStepper",
  component: QuantityStepper,
} as ComponentMeta<typeof QuantityStepper>;

export const Default: ComponentStory<typeof QuantityStepper> = (args) => {
  const [value, setValue] = useState(0);
  return (
    <QuantityStepper {...args} value={value} onChange={(v) => setValue(v)} />
  );
};

Default.args = {
  value: 0,
};
