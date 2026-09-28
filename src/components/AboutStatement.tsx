'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_CONTENT } from '@/data/content';

export default function AboutStatement() {
  const { part1, highlightWord, part2, chips } = PORTFOLIO_CONTENT.about;

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto w-full relative overflow-hidden text-center select-none">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#3D6A96]/10 blur-3xl pointer-events-none rounded-full" />

      {/* Floating Skill Chips (Desktop Floating Positions) */}
      <div className="hidden md:block">
        {/* Chip 1 Top Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-8 lg:left-16 animate-float-slow z-10"
        >
          <div className="glass-card px-4 py-2 flex items-center gap-2.5 shadow-md border border-white text-xs font-medium text-[#0F1B2D]">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: chips[0].colorDot }} />
            <span>{chips[0].label}</span>
          </div>
        </motion.div>

        {/* Chip 2 Top Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-12 right-8 lg:right-16 animate-float-delayed z-10"
        >
          <div className="glass-card px-4 py-2 flex items-center gap-2.5 shadow-md border border-white text-xs font-medium text-[#0F1B2D]">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: chips[1].colorDot }} />
            <span>{chips[1].label}</span>
          </div>
        </motion.div>

        {/* Chip 3 Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute bottom-12 left-12 lg:left-24 animate-float-delayed z-10"
        >
          <div className="glass-card px-4 py-2 flex items-center gap-2.5 shadow-md border border-white text-xs font-medium text-[#0F1B2D]">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: chips[2].colorDot }} />
            <span>{chips[2].label}</span>
          </div>
        </motion.div>

        {/* Chip 4 Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-8 right-12 lg:right-24 animate-float-slow z-10"
        >
          <div className="glass-card px-4 py-2 flex items-center gap-2.5 shadow-md border border-white text-xs font-medium text-[#0F1B2D]">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: chips[3].colorDot }} />
            <span>{chips[3].label}</span>
          </div>
        </motion.div>
      </div>

      {/* Main Centered Paragraph with Two-Tone Typography */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="max-w-4xl mx-auto px-4 relative z-20"
      >
        <span className="text-xs uppercase tracking-widest text-[#3D6A96] font-semibold mb-6 block">
          Design Philosophy
        </span>

        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.25] font-normal">
          <span className="text-[#0F1B2D] font-medium">{part1}</span>
          <span className="text-[#4A5A6E]">
            <span className="font-serif-italic text-[#0F1B2D] px-1 font-normal underline decoration-[#3D6A96]/30 underline-offset-8">
              {highlightWord}
            </span>
            {part2}
          </span>
        </p>

        {/* Mobile Skill Chips Row */}
        <div className="flex md:hidden flex-wrap justify-center gap-3 mt-10 z-20">
          {chips.map((chip, idx) => (
            <div
              key={idx}
              className="glass-card px-3.5 py-1.5 flex items-center gap-2 text-xs font-medium text-[#0F1B2D]"
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: chip.colorDot }} />
              <span>{chip.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
