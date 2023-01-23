import { EasingDefinition } from "framer-motion";
import React, { ReactNode } from "react";
interface Props {
    children: React.ReactNode;
    currentSlide: number;
    onSlideChange: (currentSlide: number) => void;
    autoAnimate?: boolean;
    animateInterval?: number;
    transitionDuration?: number;
    ease?: EasingDefinition;
    areDotsVisible?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    areArrowsVisible?: boolean;
    isSlideCountVisible?: boolean;
}
declare function Slider(props: Props): JSX.Element;
export default Slider;
