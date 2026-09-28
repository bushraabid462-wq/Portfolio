'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/data/content';

export default function Testimonials() {
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
          Client Feedback & Trust
        </span>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0F1B2D]">
          What People <span className="font-serif-italic font-normal">Say</span>.
        </h2>
        <p className="text-sm text-[#4A5A6E]">
          Testimonials from clients on Upwork and collaborators at Bytecorp.
        </p>
      </motion.div>

      {/* Grid of 2 Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_CONTENT.testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            className="glass-card glass-card-hover p-8 md:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden group"
          >
            {/* Background Big Quote Icon Watermark */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-[#3D6A96]/10 group-hover:text-[#3D6A96]/20 transition-colors pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center gap-1 text-[#D9A76A]">
              {[...Array(5)].map((_, sIdx) => (
                <Star key={sIdx} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Quote Body */}
            <blockquote className="text-sm sm:text-base text-[#2B3A4F] leading-relaxed italic relative z-10 font-normal">
              "{item.quote}"
            </blockquote>

            {/* Author Profile Footer */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/80">
              <img
                src={item.avatar}
                alt={item.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div>
                <h4 className="text-sm font-semibold text-[#0F1B2D]">
                  {item.author}
                </h4>
                <p className="text-xs text-[#4A5A6E]">
                  {item.role} • <span className="text-[#3D6A96] font-medium">{item.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
