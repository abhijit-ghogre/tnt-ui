import React from "react";
interface Props {
    isVisible: boolean;
    onClose: (isConfirm: boolean) => void;
    title?: React.ReactNode;
    body?: React.ReactNode;
    confirmText?: React.ReactNode;
    cancelText?: React.ReactNode;
}
declare function ConfirmationModal(props: Props): JSX.Element;
export default ConfirmationModal;
