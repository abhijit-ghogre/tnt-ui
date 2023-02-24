import React from "react";
interface Props {
    isVisible: boolean;
    onOverlayClick?: () => void;
    children?: React.ReactNode;
    sideContent: React.ReactNode;
    end?: boolean;
    disablePortal?: boolean;
}
declare function Drawer(props: Props): JSX.Element | null;
export default Drawer;
