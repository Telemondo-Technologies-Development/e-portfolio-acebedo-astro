import { SquareCode, ScrollText, Atom, TabletSmartphone, Frame, UserSearch, BookOpen, Puzzle, ToolCase, Zap, Link, BookCheck } from '@lucide/astro';

export const portfolio = {
  name: "Angela's Portfolio",
  title: "Frontend Developer & UI/UX Designer",
  tagline: "Crafting digital experiences that are both beautiful and functional.",
  email: "angelacoleenacebedo@gmail.com",

  hero: {
    heading: "Hello World, I'm Angela Coleen Acebedo!",
    subheading: "I design and build elegant web experiences.",
    cta: "Explore My Work",
  },

  about: {
    title: "About Me",
    content: [
      "Lorem ipsum dolor sit amet",
    ],
  },

  skills: {
    title: "Skills & Expertise",
    categories: [
      {
        name: "Frontend Development",
        items: [
          {
            title: "HTML & CSS",
            description: "Semantic markup and modern CSS techniques",
            icon: SquareCode,
          },
          {
            title: "TypeScript",
            description: "Type-safe JavaScript for robust applications",
            icon: ScrollText,
          },
          {
            title: "React & Next.js",
            description: "Building scalable, performant web applications",
            icon: Atom,
          },
          {
            title: "Responsive Design",
            description: "Mobile-first design that works everywhere",
            icon: TabletSmartphone,
          },
        ],
      },
      {
        name: "UI/UX Design",
        items: [
          {
            title: "UI Design",
            description: "Creating beautiful and intuitive interfaces",
            icon: Frame,
          },
          {
            title: "User Research",
            description: "Understanding user needs and behavior",
            icon: UserSearch,
          },
          {
            title: "Prototyping",
            description: "Rapid prototyping and iteration",
            icon: BookOpen,
          },
          {
            title: "Design Systems",
            description: "Building consistent and scalable design patterns",
            icon: Puzzle,
          },
        ],
      },
      {
        name: "Tools & Technologies",
        items: [
          {
            title: "Design Tools",
            description: "Figma, Adobe Creative Suite, Prototyping Tools",
            icon: ToolCase,
          },
          {
            title: "Version Control",
            description: "Git, GitHub, GitLab for collaborative development",
            icon: Link,
          },
          {
            title: "Performance",
            description: "Optimization, SEO, Web Core Vitals",
            icon: Zap,
          },
          {
            title: "Testing",
            description: "Unit testing, Integration testing, E2E testing",
            icon: BookCheck,
          },
        ],
      },
    ],
  },

  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "AI-Enhanced Web Vulnerabilty Scanner",
        description: "An AI-driven web vulnerability scanner for web applications that utilizes combined algorithms in an ensemble layer to enhance security.",
        image: "/web-vulnerability-scanner.png",
        tags: ["Ensemble Layer", "Python", "Cybersecurity"],
        link: "#",
      },
      {
        title: "Business Analytics and Order Management System",
        description: "A mobile application built with Expo and React Native that provides business analytics and order management features.",
        image: "/business-analytics-tracker.png",
        tags: ["React Native", "Expo", "Mobile Application"],
        link: "#",
      },
      {
        title: "Automated Trip Ticket System",
        description: "An interactive dashboard for data visualization and analytics with real-time updates.",
        image: "/trip-ticket-system.png",
        tags: ["Python", "Automated Booking"],
        link: "#",
      },
    ],
  },

  contact: {
    title: "Let's Create Together",
    subtitle: "Have a project in mind or want to collaborate? I'd love to hear from you.",
  },

  social: [
    { name: "GitHub", link: "https://github.com" },
    { name: "LinkedIn", link: "https://linkedin.com" },
  ],
}
