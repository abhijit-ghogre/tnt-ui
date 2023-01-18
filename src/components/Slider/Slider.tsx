import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

function Slider(props: Props) {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimationControls();
  const [resetFlip, setResetFlip] = useState(false);

  useEffect(() => {
    (async () => {
      await controls.start({ x: `${-currentIndex * 100}%` });
    })();
  }, [controls, currentIndex, resetFlip]);

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-full"
        animate={controls}
        transition={{ duration: 0.2 }}
        drag="x"
        onDragEnd={(event, info) => {
          if (info.offset.x < -50) {
            if (currentIndex < React.Children.count(children) - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              setResetFlip(!resetFlip);
            }
          } else if (info.offset.x > 50) {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
            } else {
              setResetFlip(!resetFlip);
            }
          } else {
            setCurrentIndex(currentIndex);
            setResetFlip(!resetFlip);
          }
        }}
      >
        {React.Children.map(children, (child) => (
          <div className="min-w-full flex justify-center">{child}</div>
        ))}
      </motion.div>
      <div className="flex justify-center">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            className="btn rounded-full"
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
