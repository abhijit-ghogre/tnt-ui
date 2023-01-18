import { EasingDefinition, motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  currentSlide: number;
  onSlideChange: (currentSlide: number) => void;
  autoAnimate?: boolean;
  animateInterval?: number;
  transitionDuration?: number;
  ease?: EasingDefinition;
  areDotsVisible?: boolean;
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
    <div className="overflow-hidden">
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
    </div>
  );
}

export default Slider;
