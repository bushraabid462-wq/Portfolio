'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Briefcase, Clock, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/data/content';

export default function FeaturedBento() {
  const [card1, card2] = PORTFOLIO_CONTENT.bentoProjects;

  return (
    <section id="work" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Section Label & Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <span className="text-xs uppercase tracking-widest text-[#3D6A96] font-semibold">
            Featured Case Studies
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0F1B2D] mt-2">
            Selected <span className="font-serif-italic font-normal">Projects</span> & Impact
          </h2>
        </div>
        <p className="text-sm text-[#4A5A6E] max-w-md">
          A showcase of high-fidelity interface design, complex requirement mapping, and user-centric digital products.
        </p>
      </motion.div>

      {/* Bento Container */}
      <div className="bg-[#E3ECF5] border border-[#CFDCEA] rounded-[32px] p-6 sm:p-8 lg:p-12 shadow-sm relative overflow-hidden">
        
        {/* Decorative soft glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3D6A96]/10 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7FA3C7]/15 blur-3xl pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          
          {/* Card 1: Financial Regulation Courses Website (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-card glass-card-hover p-6 sm:p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden transform lg:-translate-y-2"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3D6A96] bg-[#3D6A96]/10 px-3 py-1 rounded-full">
                  {card1.role}
                </span>
                <span className="text-xs font-mono text-[#4A5A6E]">{card1.year}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#0F1B2D] tracking-tight group-hover:text-[#3D6A96] transition-colors">
                {card1.title}
              </h3>
              <p className="text-sm text-[#4A5A6E] mt-3 leading-relaxed">
                {card1.description}
              </p>
            </div>

            {/* Project Image Mockup */}
            <div className="relative mt-6 rounded-2xl overflow-hidden border border-white/60 bg-[#0F1B2D] aspect-[16/10] shadow-md">
              <Image
                src={card1.image}
                alt={card1.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="inline-flex items-center gap-2 bg-white text-[#0F1B2D] font-medium text-xs py-2 px-4 rounded-full shadow-lg">
                  Explore High-Fidelity Prototype ↗
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {card1.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-[#4A5A6E] bg-white/70 px-3 py-1 rounded-full border border-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 & Stats Column (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            
            {/* Card 2: Diyaa Gamified Learning App */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card glass-card-hover p-6 sm:p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden transform lg:translate-y-4"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#3D6A96] bg-[#3D6A96]/10 px-3 py-1 rounded-full">
                    {card2.role}
                  </span>
                  <span className="text-xs font-mono text-[#4A5A6E]">{card2.year}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#0F1B2D] tracking-tight group-hover:text-[#3D6A96] transition-colors">
                  {card2.title} — {card2.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5A6E] mt-2 leading-relaxed">
                  {card2.description}
                </p>
              </div>

              {/* Mobile Image Mockup */}
              <div className="relative mt-5 rounded-2xl overflow-hidden border border-white/60 bg-[#0F1B2D] aspect-[16/9] shadow-md">
                <Image
                  src={card2.image}
                  alt={card2.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {card2.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-[#4A5A6E] bg-white/70 px-3 py-1 rounded-full border border-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card p-6 rounded-3xl bg-white/80 border border-white flex flex-col justify-center space-y-4"
            >
              <div className="flex items-center gap-2 text-xs uppercase font-semibold text-[#3D6A96] tracking-wider">
                <Sparkles className="w-4 h-4 text-[#3D6A96]" />
                <span>Career Highlights & Stats</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                {PORTFOLIO_CONTENT.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 bg-[#EEF3F8]/60 rounded-2xl border border-white/80">
                    <div className="text-2xl sm:text-3xl font-bold text-[#0F1B2D] tracking-tight font-sans">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-[#4A5A6E] mt-1 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
