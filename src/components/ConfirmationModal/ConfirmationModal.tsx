import React from "react";
import Modal from "../Modal/Modal";

interface Props {
  isVisible: boolean;
  onClose: (isConfirm: boolean) => void;
  title?: React.ReactNode;
  body?: React.ReactNode;
  confirmText?: React.ReactNode;
  cancelText?: React.ReactNode;
}

function ConfirmationModal(props: Props) {
  const {
    isVisible,
    onClose,
    title = "Are you sure?",
    body = "This action can not be undone",
    confirmText = "Yes",
    cancelText = "No",
  } = props;
  return (
    <Modal
      body={body}
      onClose={onClose}
      isVisible={isVisible}
      title={title}
      confirmText={confirmText}
      cancelText={cancelText}
    />
  );
}

export default ConfirmationModal;
