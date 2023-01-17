import React from "react";

interface Props {
  url: string;
  className?: string;
}
function VideoViewer(props: Props) {
  const { url, className } = props;
  return (
    <iframe
      className={`${className}`}
      width="100%"
      height="480"
      src={url}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
}

export default VideoViewer;
