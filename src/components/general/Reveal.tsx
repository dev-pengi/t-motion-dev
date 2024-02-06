"use client";
import { FC, useEffect, useRef, ReactNode } from "react";
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
  type?: "fade" | "fade-left" | "fade-right" | "fade-up" | "fade-down";
}

interface RevealProps
  extends PropsSpread<HTMLMotionProps<"div">, RevealPropsExtra> {}

const Reveal: FC<RevealProps> = ({
  children,
  onScroll = true,
  delay = 0.2,
  duration = 0.3,
  type = "fade-up",
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

  const animations: Record<string, any> = {
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    "fade-up": {
      hidden: { opacity: 0, y: 150 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-down": {
      hidden: { opacity: 0, y: -150 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-right": {
      hidden: { opacity: 0, x: -150 },
      visible: { opacity: 1, x: 0 },
    },
    "fade-left": {
      hidden: { opacity: 0, x: 150 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={animations[type]}
      transition={{
        duration,
        delay,
        type: "spring",
      }}
      initial="hidden"
      animate={onScroll ? mainControls : "visible"}
      {...props}
      onScroll={undefined}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
