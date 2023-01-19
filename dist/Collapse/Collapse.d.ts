import React from "react";
interface Props {
    children: React.ReactNode;
    heading: React.ReactNode;
    className?: string;
    isCollapsed: boolean;
    onToggle: () => void;
}
declare function Collapse(props: Props): JSX.Element;
export default Collapse;
