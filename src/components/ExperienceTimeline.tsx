'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/data/content';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 md:px-12 max-w-5xl mx-auto w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto mb-16 space-y-2"
      >
        <span className="text-xs uppercase tracking-widest text-[#3D6A96] font-semibold">
          Career Journey & Background
        </span>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0F1B2D]">
          Experience & <span className="font-serif-italic font-normal">Education</span>.
        </h2>
        <p className="text-sm text-[#4A5A6E]">
          A timeline of design roles, digital marketing strategy, internships, and computer science degree.
        </p>
      </motion.div>

      {/* Vertical Glass Rows Timeline */}
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:-ml-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#3D6A96]/40 before:via-[#3D6A96]/20 before:to-transparent">
        {PORTFOLIO_CONTENT.experience.map((item, idx) => {
          const isEducation = item.type === 'education';
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              {/* Timeline Dot Node */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0F1B2D] text-white border-4 border-[#EEF3F8] shadow-md shrink-0 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 left-1 md:left-auto">
                {isEducation ? (
                  <GraduationCap className="w-4 h-4 text-[#7FA3C7]" />
                ) : (
                  <Briefcase className="w-4 h-4 text-[#7FA3C7]" />
                )}
              </div>

              {/* Glass Card Container */}
              <div className="w-[calc(100%-3.25rem)] md:w-[calc(50%-2.5rem)] glass-card glass-card-hover p-6 rounded-3xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/80 pb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#3D6A96] bg-[#3D6A96]/10 px-3 py-1 rounded-full">
                    {item.company}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#4A5A6E]">
                    <Calendar className="w-3.5 h-3.5 text-[#3D6A96]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0F1B2D]">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#4A5A6E] mt-1">
                    <MapPin className="w-3 h-3 text-[#3D6A96]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-1.5 pt-1">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-[#2B3A4F] leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3D6A96] mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
