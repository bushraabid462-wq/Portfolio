'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail, Phone, Github } from 'lucide-react';
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#EEF3F8]/80 backdrop-blur-xl border-b border-[#CFDCEA]/60 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            className="font-serif-italic text-2xl md:text-3xl text-[#0F1B2D] hover:opacity-80 transition-opacity tracking-tight font-normal"
          >
            {PORTFOLIO_CONTENT.personal.name}
          </a>

          {/* Desktop Links & Menu Toggle Button */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-8 mr-4">
              {PORTFOLIO_CONTENT.nav.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-[#4A5A6E] hover:text-[#0F1B2D] transition-colors relative group py-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3D6A96] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {PORTFOLIO_CONTENT.personal.github && (
              <a
                href={PORTFOLIO_CONTENT.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="w-12 h-12 rounded-full bg-white/90 shadow-md border border-white/80 flex items-center justify-center text-[#0F1B2D] hover:bg-[#0F1B2D] hover:text-white transition-all duration-300 active:scale-95 group"
                title="View GitHub Repository"
              >
                <Github className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            )}

            {/* Circular Hamburger Button */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="w-12 h-12 rounded-full bg-white/90 shadow-md border border-white/80 flex items-center justify-center text-[#0F1B2D] hover:bg-[#0F1B2D] hover:text-white transition-all duration-300 active:scale-95 group"
            >
              {isOpen ? (
                <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <Menu className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 4rem) 3rem)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 4rem) 3rem)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 4rem) 3rem)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-40 bg-[#0F1B2D] text-white flex flex-col justify-between p-8 md:p-16 overflow-y-auto"
          >
            {/* Top row spacing for close button */}
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full pt-4">
              <span className="font-serif-italic text-2xl text-white/70">
                {PORTFOLIO_CONTENT.personal.name}
              </span>
            </div>

            {/* Main Navigation Links */}
            <div className="max-w-7xl mx-auto w-full my-auto py-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <nav className="flex flex-col gap-6">
                  {PORTFOLIO_CONTENT.nav.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="group flex items-baseline gap-4 text-4xl sm:text-6xl font-medium tracking-tight text-white/80 hover:text-white transition-all text-left"
                      >
                        <span className="text-xs sm:text-base font-mono text-[#7FA3C7]">
                          0{idx + 1}
                        </span>
                        <span className="group-hover:translate-x-3 transition-transform duration-300">
                          {item.label}
                        </span>
                      </button>
                    </motion.div>
                  ))}
                </nav>

                {/* Direct Contact Card inside overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl flex flex-col justify-between space-y-8"
                >
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#7FA3C7] font-semibold">
                      Direct Contact
                    </span>
                    <h4 className="text-2xl font-serif-italic text-white mt-2">
                      Let's start a conversation
                    </h4>
                    <p className="text-sm text-gray-300 mt-2">
                      Available for freelance projects, product design roles, and UX consultations.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a
                      href={`mailto:${PORTFOLIO_CONTENT.personal.email}`}
                      className="flex items-center gap-3 text-sm text-gray-200 hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#7FA3C7]" />
                      <span>{PORTFOLIO_CONTENT.personal.email}</span>
                    </a>
                    <a
                      href={`tel:${PORTFOLIO_CONTENT.personal.phone}`}
                      className="flex items-center gap-3 text-sm text-gray-200 hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#7FA3C7]" />
                      <span>{PORTFOLIO_CONTENT.personal.phone}</span>
                    </a>
                    <a
                      href={PORTFOLIO_CONTENT.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-200 hover:text-white transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4 text-[#7FA3C7]" />
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                    {PORTFOLIO_CONTENT.personal.github && (
                      <a
                        href={PORTFOLIO_CONTENT.personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-gray-200 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4 text-[#7FA3C7]" />
                        <span>GitHub Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    )}
                  </div>

                  <a
                    href={`mailto:${PORTFOLIO_CONTENT.personal.email}`}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center gap-2 bg-[#3D6A96] hover:bg-[#7FA3C7] hover:text-[#0F1B2D] text-white py-3 px-6 rounded-full font-medium transition-all text-sm"
                  >
                    Send Email ↗
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Footer note in overlay */}
            <div className="max-w-7xl mx-auto w-full pt-6 border-t border-white/10 flex justify-between items-center text-xs text-gray-400">
              <span>© 2026 Nabiha Abid</span>
              <span>UI/UX Designer</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
