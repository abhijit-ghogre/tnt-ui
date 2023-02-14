import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  isVisible: boolean;
  onOverlayClick?: () => void;
  children?: React.ReactNode;
  sideContent: React.ReactNode;
  end?: boolean;
}

function Drawer(props: Props) {
  const {
    isVisible,
    onOverlayClick,
    children = null,
    sideContent,
    end = false,
  } = props;

  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("body");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div
          className={`drawer fixed top-0 left-0 w-full h-full ${
            end ? "drawer-end" : ""
          }`}
        >
          <input
            type="checkbox"
            className="drawer-toggle"
            checked={isVisible}
            readOnly
          />
          <div className="drawer-content">{children}</div>
          <div className="drawer-side">
            <div
              role="presentation"
              className="drawer-overlay"
              onClick={onOverlayClick}
            />
            <div className="w-80 bg-base-100">{sideContent}</div>
          </div>
        </div>,
        document.body
      )
    : null;
}

export default Drawer;
