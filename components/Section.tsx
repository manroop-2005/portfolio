"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
        <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        {children}
      </div>
    </motion.section>
  );
}
