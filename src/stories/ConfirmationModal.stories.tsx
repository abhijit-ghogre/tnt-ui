import { ComponentMeta, ComponentStory } from "@storybook/react";
import ConfirmationModal from "../components/ConfirmationModal/ConfirmationModal";

export default {
  title: "ConfirmationModal",
  component: ConfirmationModal,
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    body: {
      control: {
        type: "text",
      },
    },
    confirmText: {
      control: {
        type: "text",
      },
    },
    cancelText: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof ConfirmationModal>;

export const Default: ComponentStory<typeof ConfirmationModal> = (args) => (
  <ConfirmationModal {...args} />
);

Default.args = {
  isVisible: true,
  onClose: () => {},
};
