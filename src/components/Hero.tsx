'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Star } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/data/content';

export default function Hero() {
  const line1Words = "Hi I'm Nabiha".split(" ");
  const line2Words = "UI/UX Designer".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between bg-gradient-to-b from-[#F5F8FC] via-[#DCE7F2] to-[#C3D5E6] pt-28 pb-8 overflow-hidden select-none">
      {/* Blurred Soft Radial Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[350px] bg-[#B4CBE0]/60 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-white/40 blur-2xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between z-10 relative">
        
        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/90 shadow-sm text-xs font-medium text-[#0F1B2D]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4CAF7A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4CAF7A]"></span>
            </span>
            <span>{PORTFOLIO_CONTENT.personal.tagline}</span>
          </motion.div>
        </div>

        {/* Main Headline & Cutout Overlay Wrapper */}
        <div className="relative w-full flex flex-col items-center justify-center my-auto">
          
          {/* Centered Headline Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center z-10 space-y-1 md:space-y-2 relative"
          >
            {/* Line 1: Hi I'm Nabiha (sans, medium weight) */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px] font-medium tracking-tight text-[#0F1B2D] leading-[1.05]">
              {line1Words.map((word, idx) => (
                <motion.span key={idx} variants={wordVariants} className="inline-block mr-[0.25em]">
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Line 2: UI/UX Designer (Instrument Serif italic) */}
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[104px] font-serif-italic text-[#0F1B2D] leading-[1.05] relative z-0">
              {line2Words.map((word, idx) => (
                <motion.span key={idx} variants={wordVariants} className="inline-block mr-[0.25em]">
                  {word}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          {/* Grayscale Portrait Cutout layered IN FRONT of Line 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative -mt-16 sm:-mt-24 md:-mt-36 lg:-mt-44 z-20 pointer-events-none w-full max-w-sm sm:max-w-md md:max-w-lg flex flex-col items-center"
          >
            <div className="relative w-[280px] h-[340px] sm:w-[360px] sm:h-[420px] md:w-[440px] md:h-[500px]">
              <Image
                src="/nabiha-cutout.png"
                alt="Nabiha Abid UI/UX Designer"
                fill
                priority
                className="object-contain filter grayscale contrast-105 drop-shadow-xl"
              />
              {/* Fade bottom gradient mask */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#C3D5E6] via-[#C3D5E6]/70 to-transparent" />
            </div>
          </motion.div>

          {/* Right of Portrait Brief & CTA (Desktop: absolute floating / Mobile: below image) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="md:absolute md:right-4 lg:right-12 md:bottom-8 z-30 max-w-xs bg-white/60 backdrop-blur-xl border border-white/70 p-5 rounded-3xl shadow-lg mt-4 md:mt-0 text-left space-y-3"
          >
            <p className="text-xs sm:text-sm text-[#2B3A4F] leading-relaxed">
              {PORTFOLIO_CONTENT.personal.bio}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0F1B2D] text-white hover:bg-[#1E3550] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-md group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Bottom-left Social Proof Avatars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="md:absolute md:left-4 lg:left-12 md:bottom-8 z-30 max-w-xs bg-white/60 backdrop-blur-xl border border-white/70 p-4 rounded-3xl shadow-lg mt-4 md:mt-0 flex items-center gap-3"
          >
            {/* Overlapping Avatars */}
            <div className="flex -space-x-3 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80"
                alt="Client Reviewer"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80"
                alt="Client Reviewer"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=80"
                alt="Client Reviewer"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="text-[11px] text-[#4A5A6E] leading-snug font-medium">
              {PORTFOLIO_CONTENT.personal.upworkProof}
            </div>
          </motion.div>

        </div>

        {/* Bottom Marquee Container */}
        <div className="w-full mt-10 pt-6 border-t border-[#3D6A96]/15 relative overflow-hidden">
          <div className="text-center mb-3">
            <span className="text-[10px] uppercase tracking-widest text-[#4A5A6E] font-semibold">
              Tools & Platforms I Design With
            </span>
          </div>
          <div className="relative w-full overflow-hidden flex items-center py-2">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-sm sm:text-base font-medium text-[#4A5A6E] grayscale opacity-85 hover:opacity-100 transition-opacity">
              {[...PORTFOLIO_CONTENT.marqueeTools, ...PORTFOLIO_CONTENT.marqueeTools].map((tool, index) => (
                <div key={index} className="flex items-center gap-12 shrink-0">
                  <span className="hover:text-[#0F1B2D] transition-colors cursor-default font-mono">
                    {tool}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3D6A96]/30 inline-block" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
