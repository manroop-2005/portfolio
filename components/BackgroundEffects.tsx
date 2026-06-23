"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function BackgroundEffects() {
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(62, 231, 214, 0.11), transparent 46%)`;

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <>
      <motion.div className="pointer-events-none fixed inset-0 z-[-1] hidden md:block" style={{ background }} />
      <div className="pointer-events-none fixed inset-0 z-[-2] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="pointer-events-none fixed inset-0 z-[-1] opacity-[0.035] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
    </>
  );
}
