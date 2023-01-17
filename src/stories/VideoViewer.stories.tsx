import { ComponentMeta, ComponentStory } from "@storybook/react";
import VideoViewer from "../components/VideoViewer/VideoViewer";

export default {
  title: "VideoViewer",
  component: VideoViewer,
} as ComponentMeta<typeof VideoViewer>;

export const Default: ComponentStory<typeof VideoViewer> = (args) => (
  <VideoViewer {...args} />
);

Default.args = {};
