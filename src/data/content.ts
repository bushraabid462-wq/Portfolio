export interface NavItem {
  label: string;
  href: string;
}

export interface MarqueeItem {
  name: string;
  category: 'tool' | 'company' | 'tech';
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  isFeatured?: boolean;
  isPlaceholder?: boolean;
  link?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  type: 'work' | 'education';
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const PORTFOLIO_CONTENT = {
  personal: {
    name: "Nabiha Abid",
    role: "UI/UX Designer",
    tagline: "Available for new opportunities",
    bio: "Passionate about creating intuitive digital experiences that connect users with value.",
    email: "nabihaabid1000@gmail.com",
    phone: "+923194203661",
    linkedin: "https://www.linkedin.com/in/nabiha-abid-29578a20b",
    github: "https://github.com/bushraabid462-wq/Portfolio",
    location: "Remote",
    upworkProof: "Trusted by clients on Upwork & across freelance projects."
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ] as NavItem[],
  marqueeTools: [
    "Figma", "Framer", "Webflow", "Notion", "Jira", "Postman", "Next.js", "Google Analytics", "Bytecorp", "Markverse"
  ],
  stats: [
    { value: "6+", label: "Certifications" },
    { value: "5", label: "Roles & internships" },
    { value: "3+", label: "Years in digital" }
  ] as StatItem[],
  bentoProjects: [
    {
      id: "fin-reg-courses",
      title: "Financial Regulation Courses Website",
      subtitle: "CPD courses platform",
      role: "Figma high-fidelity prototype",
      year: "2025",
      description: "Designed a streamlined end-to-end learning platform for financial compliance professionals. Simplified complex regulatory course tracks into digestible UI components.",
      tags: ["UI/UX Design", "Figma", "CPD Platform", "Design System"],
      image: "/project-1.png",
      isFeatured: true
    },
    {
      id: "diyaa-app",
      title: "Diyaa",
      subtitle: "Gamified learning app",
      role: "Product Owner",
      year: "2024",
      description: "Led product strategy and interface design for a gamified mobile education app. Created interactive streak features, quiz modules, and user reward flows.",
      tags: ["Product Owner", "Gamification", "Mobile UI", "User Research"],
      image: "/project-2.png",
      isFeatured: true
    }
  ] as Project[],
  about: {
    part1: "My focus is on blending clear strategy, thoughtful design, and user empathy to ",
    highlightWord: "craft",
    part2: " experiences that solve real problems.",
    chips: [
      { label: "UI Design", colorDot: "#E08A5D" },     // Muted orange
      { label: "UX Research", colorDot: "#D9A76A" },  // Muted sand
      { label: "Prototyping", colorDot: "#7FA98B" },  // Muted sage
      { label: "Design Systems", colorDot: "#5C8AB5" },// Muted blue
      { label: "Requirements", colorDot: "#3D6A96" }   // Slate blue
    ]
  },
  process: [
    {
      number: "01",
      title: "Discover",
      subtitle: "Research & Requirements",
      description: "Laying the foundation through strategic enquiry and deep understanding of business goals and user constraints.",
      deliverables: ["Requirement gathering", "Stakeholder communication", "User research", "BRD/FRD and user stories"]
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Architecture & Visuals",
      description: "Iterative wireframing, crafting scalable design systems, and building high-fidelity interactive prototypes.",
      deliverables: ["Wireframes", "Figma/Framer prototypes", "Design systems", "Responsive UI"]
    },
    {
      number: "03",
      title: "Deliver",
      subtitle: "Validation & Handoff",
      description: "Ensuring pixel-perfect implementation through user testing, developer documentation, and front-end builds.",
      deliverables: ["Usability testing", "Iteration & feedback", "Dev handoff", "Webflow/Next.js builds"]
    }
  ] as ProcessStep[],
  testimonials: [
    {
      quote: "Nabiha transformed our complex financial regulatory documentation into an effortless, highly accessible CPD learning interface. Her attention to detail and UX structure was outstanding.",
      author: "Freelance Client",
      role: "Financial Compliance Platform Lead",
      company: "Upwork Client",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "Working with Nabiha on the Diyaa app product lifecycle was seamless. She bridges product requirements and visual UI design with incredible speed and empathy for the user.",
      author: "Product Team Lead",
      role: "Engineering Supervisor",
      company: "Bytecorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    }
  ] as Testimonial[],
  selectedWorks: [
    {
      id: "fin-reg-selected",
      title: "Financial Regulation Courses Website",
      subtitle: "CPD Courses Platform",
      role: "Figma High-Fidelity Prototype",
      year: "2025",
      description: "Comprehensive UI/UX overhaul for financial regulatory certification and compliance learning.",
      tags: ["UI/UX Design", "Figma Prototype", "Web App"],
      image: "/project-1.png",
      isFeatured: false,
      isPlaceholder: false
    },
    {
      id: "diyaa-selected",
      title: "Diyaa Gamified Learning App",
      subtitle: "Product Management & UI",
      role: "Product Owner",
      year: "2024",
      description: "Gamified mobile learning application with interactive quiz modules and rewards.",
      tags: ["Product Owner", "Mobile UI", "Gamification"],
      image: "/project-2.png",
      isFeatured: false,
      isPlaceholder: false
    },
    {
      id: "placeholder-1",
      title: "Enterprise Design System & Token Architecture",
      subtitle: "Design Systems & Specs",
      role: "UI/UX Lead",
      year: "2025",
      description: "Scalable component library and design system documentation for cross-platform products.",
      tags: ["Design System", "Figma", "Coming Soon"],
      image: "/project-3.png",
      isFeatured: false,
      isPlaceholder: true
    },
    {
      id: "placeholder-2",
      title: "WealthTech & Asset Analytics Dashboard",
      subtitle: "Fintech Dashboard",
      role: "UX Researcher",
      year: "2025",
      description: "Data-rich web interface for tracking multi-asset investment portfolios and regulatory metrics.",
      tags: ["UX Research", "Fintech UI", "Coming Soon"],
      image: "/project-4.png",
      isFeatured: false,
      isPlaceholder: true
    }
  ] as Project[],
  experience: [
    {
      role: "Freelance UI/UX Designer",
      company: "Self-Employed",
      location: "Remote",
      period: "Dec 2024 – Present",
      highlights: [
        "Designing intuitive web and mobile web interfaces for international clients across e-learning, SaaS, and financial platforms.",
        "Creating responsive wireframes, high-fidelity prototypes, and component design systems in Figma."
      ],
      type: "work"
    },
    {
      role: "Upwork Bidder & Solutions Consultant",
      company: "Freelance Client Operations",
      location: "Remote",
      period: "Aug 2025 – Present",
      highlights: [
        "Analyzing client project briefs, defining project scopes, and writing detailed technical proposals.",
        "Communicating requirement specifications and aligning deliverables with client expectations."
      ],
      type: "work"
    },
    {
      role: "UI/UX Design Intern",
      company: "Bytecorp",
      location: "Hybrid / Remote",
      period: "Aug – Nov 2025",
      highlights: [
        "Collaborated with product teams to refine user workflows, wireframes, and high-fidelity UI screens.",
        "Participated in client requirement reviews, usability feedback sessions, and developer handoffs."
      ],
      type: "work"
    },
    {
      role: "Freelance Digital Marketer",
      company: "Independent Client Work",
      location: "Remote",
      period: "Nov 2023 – Jan 2026",
      highlights: [
        "Managed content strategy, social media campaigns, and digital conversion funnel optimizations.",
        "Leveraged analytics insights to enhance campaign ROI and align digital touchpoints with user behavior."
      ],
      type: "work"
    },
    {
      role: "Marketing Intern",
      company: "Markverse",
      location: "On-site / Remote",
      period: "Jul – Sep 2023",
      highlights: [
        "Assisted marketing operations, copy creation, audience research, and brand positioning."
      ],
      type: "work"
    },
    {
      role: "BS Computer Science",
      company: "Salim Habib University",
      location: "Karachi, Pakistan",
      period: "Graduating 2026",
      highlights: [
        "Focus on Software Engineering, Human-Computer Interaction, Web Development, Data Structures, and Database Management."
      ],
      type: "education"
    }
  ] as ExperienceItem[],
  skills: [
    {
      category: "UI/UX & Product Design",
      skills: ["Figma", "Framer", "Wireframing", "Interactive Prototyping", "Design Systems", "User Research", "Usability Testing"]
    },
    {
      category: "Requirement Engineering & BA",
      skills: ["Requirement Gathering", "BRD/FRD Documentation", "User Stories", "Stakeholder Communication", "Product Scoping"]
    },
    {
      category: "Analytics & Marketing",
      skills: ["Google Analytics", "Digital Marketing Strategy", "Conversion Funnels", "Content Strategy", "A/B Testing Basics"]
    },
    {
      category: "Technical",
      skills: ["HTML5", "CSS3", "JavaScript", "Next.js", "Git / GitHub", "Postman", "REST APIs"]
    },
    {
      category: "Data & Tools",
      skills: ["Excel", "SQL", "Power BI", "Notion", "Jira", "Webflow"]
    }
  ] as SkillGroup[]
};
