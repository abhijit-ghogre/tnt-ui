import React from "react";
interface Props {
    isVisible: boolean;
    onOverlayClick?: () => void;
    children?: React.ReactNode;
    sideContent: React.ReactNode;
    end?: boolean;
}
declare function Drawer(props: Props): JSX.Element;
export default Drawer;
