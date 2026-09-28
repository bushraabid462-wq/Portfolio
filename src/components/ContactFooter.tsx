'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Heart } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/data/content';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactFooter() {
  const { name, email, phone, linkedin } = PORTFOLIO_CONTENT.personal;

  return (
    <footer id="contact" className="pt-20 pb-12 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Large Gradient CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="bg-gradient-to-br from-[#DCE7F2] via-[#C3D5E6] to-[#B4CBE0] rounded-[36px] p-8 sm:p-12 md:p-20 border border-white/80 shadow-lg text-center relative overflow-hidden space-y-8"
      >
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/40 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#3D6A96] font-semibold bg-white/80 px-4 py-1.5 rounded-full border border-white/90 shadow-xs inline-block">
            Start a Collaboration
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium text-[#0F1B2D] tracking-tight leading-[1.1]">
            Let's build something{' '}
            <span className="font-serif-italic font-normal block sm:inline">
              people love
            </span>
            .
          </h2>

          <p className="text-sm sm:text-base text-[#2B3A4F] max-w-lg mx-auto leading-relaxed">
            Have a project in mind, need UX consulting, or want to discuss a product design role? I'd love to connect.
          </p>

          {/* Dark Pill CTA Button */}
          <div className="pt-4 flex justify-center">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 bg-[#0F1B2D] text-white hover:bg-[#1E3550] px-8 py-4 rounded-full text-base font-semibold tracking-wide shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <Mail className="w-5 h-5 text-[#7FA3C7]" />
              <span>Say Hello — {email}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Social Icon Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-5 py-2.5 rounded-full flex items-center gap-2.5 text-xs font-semibold text-[#0F1B2D] hover:bg-white transition-all shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4 text-[#3D6A96]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={`tel:${phone}`}
              className="glass-card px-5 py-2.5 rounded-full flex items-center gap-2.5 text-xs font-semibold text-[#0F1B2D] hover:bg-white transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#3D6A96]" />
              <span>{phone}</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-[#CFDCEA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A5A6E] font-medium">
        <div>
          © 2026 {name}. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span>Designed & Crafted for</span>
          <span className="font-serif-italic text-sm text-[#0F1B2D]">{name}</span>
        </div>
      </div>
    </footer>
  );
}
