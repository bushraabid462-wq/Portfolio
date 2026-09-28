'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/data/content';

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0.15, 0.7], [0, 1]);

  const stepIcons = [Search, Compass, CheckCircle2];

  return (
    <section id="process" ref={containerRef} className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full relative">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-20 space-y-3"
      >
        <span className="text-xs uppercase tracking-widest text-[#3D6A96] font-semibold">
          The Process & Methodology
        </span>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0F1B2D]">
          Here's how it <span className="font-serif-italic font-normal">works</span>.
        </h2>
        <p className="text-sm text-[#4A5A6E]">
          A structured, end-to-end framework turning ambiguous ideas into refined, validated digital experiences.
        </p>
      </motion.div>

      {/* SVG Connecting Curved Path for Desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
          {/* Path connecting Card 1 -> Card 2 -> Card 3 */}
          <motion.path
            d="M 280 260 C 400 260, 420 420, 560 420 C 700 420, 720 580, 880 580"
            stroke="#3D6A96"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            strokeOpacity="0.7"
            style={{ pathLength }}
          />
        </svg>
      </div>

      {/* Staggered Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start relative z-10">
        {PORTFOLIO_CONTENT.process.map((step, idx) => {
          const IconComponent = stepIcons[idx];
          
          // Vertical offset for staggered diagonal layout on desktop
          const translateYClass =
            idx === 0
              ? 'lg:translate-y-0 lg:-rotate-2'
              : idx === 1
              ? 'lg:translate-y-16 lg:rotate-1'
              : 'lg:translate-y-32 lg:-rotate-1';

          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`glass-card glass-card-hover p-8 flex flex-col justify-between space-y-6 transform ${translateYClass} transition-transform duration-500 hover:scale-[1.02] hover:-rotate-0`}
            >
              {/* Top Row: Number & Icon */}
              <div className="flex items-center justify-between border-b border-white/80 pb-4">
                <span className="font-mono text-3xl font-bold text-[#3D6A96]">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[#3D6A96]/10 flex items-center justify-center text-[#3D6A96]">
                  <IconComponent className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl font-medium text-[#0F1B2D] tracking-tight">
                  {step.title}
                </h3>
                <span className="text-xs text-[#3D6A96] font-semibold uppercase tracking-wider block mt-1">
                  {step.subtitle}
                </span>
                <p className="text-xs sm:text-sm text-[#4A5A6E] mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Bullet Checklist */}
              <div className="bg-white/50 p-4 rounded-2xl border border-white/80 space-y-2">
                <span className="text-[11px] font-semibold text-[#0F1B2D] uppercase tracking-wider block mb-2">
                  Key Deliverables:
                </span>
                {step.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-[#2B3A4F]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3D6A96]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
