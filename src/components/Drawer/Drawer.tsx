import React from "react";

interface Props {
  isVisible: boolean;
  onOverlayClick?: () => void;
  children: React.ReactNode;
  sideContent: React.ReactNode;
  end?: boolean;
}

function Drawer(props: Props) {
  const {
    isVisible,
    onOverlayClick,
    children,
    sideContent,
    end = false,
  } = props;
  return (
    <div
      className={`
        drawer fixed top-0 left-0 w-full h-full
        ${end ? "drawer-end" : ""} 
    `}
    >
      <input
        type="checkbox"
        className="drawer-toggle"
        defaultChecked={isVisible}
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
    </div>
  );
}

export default Drawer;
