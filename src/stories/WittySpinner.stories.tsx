import { ComponentMeta, ComponentStory } from "@storybook/react";
import WittySpinner from "../components/WittySpinner/WittySpinner";

export default {
  title: "WittySpinner",
  component: WittySpinner,
} as ComponentMeta<typeof WittySpinner>;

export const Default: ComponentStory<typeof WittySpinner> = (args) => (
  <WittySpinner {...args} />
);

Default.args = {
  isLoading: true,
};
