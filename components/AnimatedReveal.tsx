"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

type AnimatedRevealProps = {
  children: ReactNode;
  delay?: number;
};

export function AnimatedReveal({ children, delay = 0 }: AnimatedRevealProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
