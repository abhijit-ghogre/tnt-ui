import { EasingDefinition, motion, useAnimationControls } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Text from "../Text/Text";

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
    leftIcon = (
      <div className="btn btn-circle">
        <AiOutlineLeft />
      </div>
    ),
    rightIcon = (
      <div className="btn btn-circle">
        <AiOutlineRight />
      </div>
    ),
    areArrowsVisible = true,
    isSlideCountVisible = false,
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
    <div className="">
      <div className="overflow-hidden relative">
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
        {areArrowsVisible && (
          <>
            <button
              className="absolute top-1/2 -translate-y-1/2 left-1"
              onClick={() =>
                currentSlide > 0
                  ? onSlideChange(currentSlide - 1)
                  : onSlideChange(React.Children.count(children) - 1)
              }
            >
              {leftIcon}
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-1"
              onClick={() =>
                currentSlide < React.Children.count(children) - 1
                  ? onSlideChange(currentSlide + 1)
                  : onSlideChange(0)
              }
            >
              {rightIcon}
            </button>
          </>
        )}
      </div>
      {areDotsVisible && (
        <div className="flex justify-center mt-2">
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
      {isSlideCountVisible && (
        <div className="pt-2 flex gap-2 items-center justify-center">
          <button
            onClick={() =>
              currentSlide > 0
                ? onSlideChange(currentSlide - 1)
                : onSlideChange(React.Children.count(children) - 1)
            }
          >
            <AiOutlineLeft />
          </button>
          <Text>{`${currentSlide + 1}/${React.Children.count(children)}`}</Text>
          <button
            onClick={() =>
              currentSlide < React.Children.count(children) - 1
                ? onSlideChange(currentSlide + 1)
                : onSlideChange(0)
            }
          >
            <AiOutlineRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default Slider;
