import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

function ScrollEffectContainer({ className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      className={className}
      ref={ref}
      style={{ scale: scale, opacity: opacity }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollEffectContainer;
