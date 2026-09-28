'use client';

import { motion } from 'framer-motion';
import { Layers, Cpu, BarChart3, Code2, Database } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/data/content';

export default function SkillsSection() {
  const categoryIcons = [Layers, Cpu, BarChart3, Code2, Database];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto mb-16 space-y-2"
      >
        <span className="text-xs uppercase tracking-widest text-[#3D6A96] font-semibold">
          Core Competencies
        </span>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0F1B2D]">
          Skills & <span className="font-serif-italic font-normal">Tooling</span>.
        </h2>
        <p className="text-sm text-[#4A5A6E]">
          A breakdown of design craft, requirements analysis, technical development, and data toolsets.
        </p>
      </motion.div>

      {/* Skills Grid of Category Pill Clusters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_CONTENT.skills.map((group, idx) => {
          const IconComponent = categoryIcons[idx % categoryIcons.length];

          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-3xl flex flex-col justify-between space-y-5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-white/80 pb-3">
                <div className="w-9 h-9 rounded-xl bg-[#3D6A96]/10 flex items-center justify-center text-[#3D6A96]">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-[#0F1B2D]">
                  {group.category}
                </h3>
              </div>

              {/* Skills Pill Cluster */}
              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-[#0F1B2D] bg-white/90 px-3.5 py-1.5 rounded-full border border-white shadow-xs hover:border-[#3D6A96] hover:text-[#3D6A96] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
