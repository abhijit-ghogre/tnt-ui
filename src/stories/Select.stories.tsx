import { ComponentMeta, ComponentStory } from "@storybook/react";
import Select from "../components/Select/Select";

export default {
  title: "External/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);

Default.args = {
  isMulti: true,
  options: [
    { value: "homer", label: "Homer" },
    { value: "marge", label: "Marge" },
    { value: "bart", label: "Bart" },
    { value: "lisa", label: "Lisa" },
  ],
};
