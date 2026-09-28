import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedBento from '@/components/FeaturedBento';
import AboutStatement from '@/components/AboutStatement';
import ProcessSection from '@/components/ProcessSection';
import Testimonials from '@/components/Testimonials';
import SelectedWorks from '@/components/SelectedWorks';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsSection from '@/components/SkillsSection';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEF3F8] text-[#2B3A4F] relative selection:bg-[#3D6A96]/20 selection:text-[#0F1B2D]">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Featured Project Bento */}
      <FeaturedBento />

      {/* 4. About Statement */}
      <AboutStatement />

      {/* 5. Process Section ("Here's how it works") */}
      <ProcessSection />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Selected Works Grid */}
      <SelectedWorks />

      {/* 8. Experience Timeline */}
      <ExperienceTimeline />

      {/* 9. Skills Section */}
      <SkillsSection />

      {/* 10. Contact CTA & Footer */}
      <ContactFooter />
    </main>
  );
}
