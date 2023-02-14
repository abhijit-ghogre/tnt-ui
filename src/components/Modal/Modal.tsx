import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Text from "../Text/Text";

interface Props {
  isVisible: boolean;
  onClose: (isConfirm: boolean) => void;
  title: React.ReactNode;
  body: React.ReactNode;
  confirmText?: React.ReactNode;
  cancelText?: React.ReactNode;
  disablePortal?: boolean;
}

function Modal(props: Props) {
  const {
    isVisible,
    onClose,
    title,
    body,
    confirmText = "OK",
    cancelText = "Cancel",
    disablePortal = false,
  } = props;

  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("body");
    setMounted(true);
  }, []);

  const modal = () => (
    <div
      className={`modal modal-bottom sm:modal-middle ${
        isVisible ? "modal-open" : ""
      }`}
    >
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => onClose(false)}
        >
          x
        </button>
        {typeof title === "string" ? (
          <Text size="lg" weight="bold">
            {title}
          </Text>
        ) : (
          title
        )}
        {typeof body === "string" ? <Text className="py-4">{body}</Text> : body}
        <div className="modal-action justify-center sm:justify-end">
          <button
            className="btn btn-primary flex-1 sm:flex-none sm:w-40"
            onClick={() => onClose(true)}
          >
            {confirmText}
          </button>
          <button
            className="btn btn-neutral btn-outline flex-1 sm:flex-none sm:w-40"
            onClick={() => onClose(false)}
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );

  if (disablePortal) {
    return <>{modal()}</>;
  }

  return mounted && ref.current ? createPortal(modal(), document.body) : null;
}

export default Modal;
