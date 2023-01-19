import { EasingDefinition, motion, useAnimationControls } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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
  areBottomSlideCountVisible?: boolean;
}

function Slider(props: Props) {
  const {
    children,
    currentSlide,
    onSlideChange,
    autoAnimate = true,
    animateInterval = 5000,
    transitionDuration = 0.5,
    ease = "easeInOut",
    areDotsVisible = true,
    leftIcon = <AiOutlineLeft />,
    rightIcon = <AiOutlineRight />,
    areArrowsVisible = true,
    areBottomSlideCountVisible = false,
  } = props;
  const controls = useAnimationControls();
  const [resetFlip, setResetFlip] = useState(false);

  useEffect(() => {
    (async () => {
      await controls.start({
        x: `${-currentSlide * 100}%`,
      });
    })();
  }, [controls, currentSlide, resetFlip]);

  useEffect(() => {
    if (autoAnimate) {
      const timeout = setTimeout(() => {
        if (currentSlide < React.Children.count(children) - 1) {
          onSlideChange(currentSlide + 1);
        } else {
          onSlideChange(0);
        }
      }, animateInterval);
      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [autoAnimate, currentSlide, animateInterval, children, onSlideChange]);

  return (
    <div className="overflow-hidden box-border relative">
      {areArrowsVisible && (
        <>
          <button
            className="btn btn-circle absolute top-1/3 left-1 z-10"
            onClick={() => currentSlide > 0 && onSlideChange(currentSlide - 1)}
          >
            {leftIcon}
          </button>
          <button
            className="btn btn-circle absolute top-1/3 right-1 z-10"
            onClick={() =>
              currentSlide < React.Children.count(children) - 1 &&
              onSlideChange(currentSlide + 1)
            }
          >
            {rightIcon}
          </button>
        </>
      )}
      <motion.div
        className="flex w-full"
        animate={controls}
        transition={{
          duration: transitionDuration,
          ease,
        }}
        drag="x"
        onDragEnd={(event, info) => {
          if (info.offset.x < -50) {
            if (currentSlide < React.Children.count(children) - 1) {
              onSlideChange(currentSlide + 1);
            } else {
              setResetFlip(!resetFlip);
            }
          } else if (info.offset.x > 50) {
            if (currentSlide > 0) {
              onSlideChange(currentSlide - 1);
            } else {
              setResetFlip(!resetFlip);
            }
          } else {
            onSlideChange(currentSlide);
            setResetFlip(!resetFlip);
          }
        }}
      >
        {React.Children.map(children, (child) => (
          <div className="min-w-full flex justify-center">{child}</div>
        ))}
      </motion.div>
      {areDotsVisible && (
        <div className="flex justify-center mt-2" role="tablist">
          {React.Children.map(children, (_, index) => (
            <button
              key={index}
              className="btn btn-ghost rounded-full btn-xs m-1 p-0 h-fit min-h-fit focus:outline-offset-0   "
              onClick={() => onSlideChange(index)}
            >
              <span
                className={`badge badge-xs 
                ${index === currentSlide ? "bg-primary" : ""}
            `}
              />
            </button>
          ))}
        </div>
      )}
      {areBottomSlideCountVisible && (
        <div className="border-b py-4 flex gap-2 items-center justify-center">
          <button
            onClick={() => currentSlide > 0 && onSlideChange(currentSlide - 1)}
          >
            {leftIcon}
          </button>
          {`${currentSlide + 1}/${React.Children.count(children)}`}
          <button
            onClick={() =>
              currentSlide < React.Children.count(children) - 1 &&
              onSlideChange(currentSlide + 1)
            }
          >
            {rightIcon}
          </button>
        </div>
      )}
    </div>
  );
}

export default Slider;
