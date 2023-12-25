"use client";
import { FC, useEffect, useRef, ReactNode, HTMLAttributes } from "react";
import {
  motion,
  useInView,
  useAnimation,
  HTMLMotionProps,
} from "framer-motion";

type PropsSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

interface RevealPropsExtra {
  children: ReactNode;
  onScroll?: boolean;
  delay?: number;
  duration?: number;
}

interface RevealProps
  extends PropsSpread<HTMLMotionProps<"div">, RevealPropsExtra> {}

const Reveal: FC<RevealProps> = ({
  children,
  onScroll = true,
  delay = 0.2,
  duration = 0.3,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 175 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration,
        delay,
        type: "spring",
      }}
      initial="hidden"
      animate={onScroll ? mainControls : "visible"}
      {...props}
      onScroll={undefined} // Override onScroll prop to satisfy HTMLMotionProps
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
