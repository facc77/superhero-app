import { ReactNode } from "react";
import { MotionValue, useTransform, motion } from "framer-motion";

const Character = ({
  children,
  range,
  progress,
}: {
  children: ReactNode;
  range: number[];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <>
      <span style={{ opacity: 0.1, position: "absolute" }}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </>
  );
};

export default Character;
