'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/data/content';

export default function SelectedWorks() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <span className="text-xs uppercase tracking-widest text-[#3D6A96] font-semibold">
            Complete Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0F1B2D] mt-2">
            <span className="font-serif-italic font-normal">Selected</span> Works.
          </h2>
        </div>
        <p className="text-sm text-[#4A5A6E] max-w-md">
          Explore finished designs, functional prototypes, and upcoming case studies in production.
        </p>
      </motion.div>

      {/* 2x2 Grid Container with Soft Blue Radial Glow */}
      <div className="bg-[#E3ECF5] border border-[#CFDCEA] rounded-[32px] p-6 sm:p-8 lg:p-12 shadow-sm relative overflow-hidden">
        
        {/* Soft Blue Radial Glow Background */}
        <div className="absolute inset-0 bg-radial from-[#3D6A96]/10 via-transparent to-transparent pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {PORTFOLIO_CONTENT.selectedWorks.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-3xl flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Card Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#0F1B2D] border border-white/60 shadow-inner">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Floating "View Case Study ↗" Chip on Hover */}
                {!project.isPlaceholder ? (
                  <div className="absolute inset-0 bg-[#0F1B2D]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="inline-flex items-center gap-2 bg-white text-[#0F1B2D] text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span>View case study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                ) : (
                  <div className="absolute top-3 right-3 bg-[#0F1B2D]/80 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <Lock className="w-3 h-3 text-[#7FA3C7]" />
                    <span>Case Study In Progress</span>
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#3D6A96] uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                  <span className="text-xs font-mono text-[#4A5A6E]">{project.year}</span>
                </div>

                <h3 className="text-xl font-medium text-[#0F1B2D] tracking-tight group-hover:text-[#3D6A96] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-[#4A5A6E] line-clamp-2">
                  {project.description}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-[#4A5A6E] bg-white/80 px-2.5 py-1 rounded-full border border-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
