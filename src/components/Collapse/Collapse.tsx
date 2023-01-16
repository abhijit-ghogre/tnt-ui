import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { RxCaretDown } from "react-icons/rx";
import Text from "@/components/Text/Text";

interface Props {
  children: React.ReactNode;
  heading: React.ReactNode;
  className?: string;
  isCollapsed: boolean;
  onToggle: () => void;
}

function Collapse(props: Props) {
  const { children, heading, className, isCollapsed, onToggle } = props;
  return (
    <div className={className}>
      <button
        className="flex items-center justify-between px-1 py-3 w-full"
        onClick={onToggle}
      >
        <Text>{heading}</Text>
        <div
          className={`
            transition-transform transform-gpu
            ${isCollapsed ? "" : "-scale-y-100"}
          `}
        >
          <RxCaretDown size={20} />
        </div>
      </button>
      <div className="divider m-0 h-0" />

      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            className="overflow-hidden"
            layout
            transition={{ duration: 0.2, type: "tween" }}
            initial={{
              height: 0,
            }}
            animate={{
              height: "auto",
            }}
            exit={{
              height: 0,
            }}
          >
            <div className="px-1 py-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Collapse;
