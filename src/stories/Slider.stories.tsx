import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Slider from "../components/Slider/Slider";

export default {
  title: "Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

export const Default: ComponentStory<typeof Slider> = (args) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Slider
      {...args}
      currentSlide={currentSlide}
      onSlideChange={setCurrentSlide}
    />
  );
};

Default.args = {
  children: [
    <div key={1} className="bg-red-500 h-40 w-full">
      1
    </div>,
    <div key={2} className="bg-red-500 h-40 w-40">
      2
    </div>,
    <div key={3} className="bg-red-500 h-40 w-80">
      3
    </div>,
  ],
  autoAnimate: true,
  animateInterval: 5000,
  transitionDuration: 0.5,
  ease: "easeInOut",
  areDotsVisible: true,
};
