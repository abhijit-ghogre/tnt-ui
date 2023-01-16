import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "../components/Modal/Modal";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} />
);

Default.args = {
  isVisible: true,
  onClose: () => {},
  title: "Modal Title",
  body: "Modal Body",
  confirmText: "OK",
  cancelText: "Cancel",
};
