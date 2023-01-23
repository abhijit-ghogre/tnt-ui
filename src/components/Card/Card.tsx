import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

function Card(props: Props) {
  const { className = "", children } = props;
  return (
    <div className={`card bg-base-300 shadow p-4 ${className}`}>{children}</div>
  );
}

export default Card;
