"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Hero3DScene } from "@/components/Hero3DScene";
import { profile, stats } from "@/data/constants";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_18%,rgba(62,231,214,0.16),transparent_28%),radial-gradient(circle_at_78%_22%,rgba(244,184,96,0.13),transparent_24%),linear-gradient(180deg,#071012_0%,#081416_58%,#071012_100%)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full border border-cyan/20 opacity-50 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex rounded border border-cyan/25 bg-cyan/10 px-3 py-1 text-sm font-medium text-cyan">
            GSoC 2026 Contributor at OpenELIS Global
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-medium text-slate-200 sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button-primary" href="#projects">
              View Projects
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="button-secondary" href="#contact">
              Contact Me
              <Mail size={18} aria-hidden="true" />
            </a>
            <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                className="rounded border border-line bg-white/[0.045] p-4 backdrop-blur"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.28 + index * 0.08 }}
                whileHover={{ y: -4, borderColor: "rgba(62, 231, 214, 0.38)" }}
              >
                <div className="text-2xl font-semibold text-white">{item.value}</div>
                <div className="mt-1 text-sm leading-5 text-slate-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.12 }}
        >
          <Hero3DScene />
          <motion.div
            className="relative overflow-hidden rounded border border-line bg-panel shadow-card"
            whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 170, damping: 18 }}
          >
            <Image
              src="/images/developer-workstation.png"
              alt="Dark developer workstation with code panels, mobile app screen, and data nodes"
              width={1200}
              height={750}
              priority
              className="aspect-[16/10] h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </motion.div>
          <div className="absolute -bottom-5 left-6 right-6 rounded border border-line bg-ink/88 p-4 shadow-glow backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Current focus</p>
                <p className="mt-1 font-medium text-white">TypeScript migrations, performance, open source</p>
              </div>
              <span className="h-3 w-3 rounded-full bg-cyan shadow-[0_0_24px_rgba(62,231,214,0.8)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
