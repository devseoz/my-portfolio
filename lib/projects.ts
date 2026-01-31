export interface Project {
  slug: string;
  title: string;
  category: string[];
  thumbnail: string;
  images: string[];
  description: string;
  role?: string;
  tools?: string[];
  timeline?: string;
  heroImage?: string;
}

export const projects: Project[] = [
  {
    slug: "seed",
    title: "Seed",
    category: ["Product Design", "UIUX"],
    thumbnail: "/projects/seed-thumb.jpg",
    heroImage: "/projects/seed-hero.jpg",
    images: [
      "/projects/seed-1.jpg",
      "/projects/seed-2.jpg",
      "/projects/seed-3.jpg",
    ],
    description:
      "A minimal product design project focused on sustainable agriculture technology. Seed reimagines how farmers interact with crop management systems through intuitive interfaces and data visualization.",
    role: "Lead Product Designer",
    tools: ["Figma", "Principle", "After Effects"],
    timeline: "2024",
  },
  {
    slug: "void",
    title: "Void",
    category: ["3D / CGI"],
    thumbnail: "/projects/void-thumb.jpg",
    heroImage: "/projects/void-hero.jpg",
    images: ["/projects/void-1.jpg", "/projects/void-2.jpg"],
    description:
      "Experimental CGI artwork exploring the intersection of digital and physical space. Void creates immersive visual experiences through abstract 3D compositions.",
    role: "3D Artist & Creative Director",
    tools: ["Cinema 4D", "Octane", "After Effects"],
    timeline: "2024",
  },
  {
    slug: "atlas",
    title: "Atlas",
    category: ["Branding", "Graphic Design"],
    thumbnail: "/projects/atlas-thumb.jpg",
    heroImage: "/projects/atlas-hero.jpg",
    images: [
      "/projects/atlas-1.jpg",
      "/projects/atlas-2.jpg",
      "/projects/atlas-3.jpg",
    ],
    description:
      "Complete brand identity for a modern travel platform. Atlas combines editorial typography with bold visual language to create a distinctive brand presence.",
    role: "Brand Designer",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    timeline: "2023",
  },
  {
    slug: "flux",
    title: "Flux",
    category: ["UIUX", "Product Design"],
    thumbnail: "/projects/flux-thumb.jpg",
    heroImage: "/projects/flux-hero.jpg",
    images: ["/projects/flux-1.jpg", "/projects/flux-2.jpg"],
    description:
      "A productivity app designed for creative professionals. Flux streamlines workflow management with elegant interfaces and thoughtful micro-interactions.",
    role: "Product Designer",
    tools: ["Figma", "Framer", "React"],
    timeline: "2024",
  },
  {
    slug: "neon",
    title: "Neon",
    category: ["Poster", "Graphic Design"],
    thumbnail: "/projects/neon-thumb.jpg",
    heroImage: "/projects/neon-hero.jpg",
    images: ["/projects/neon-1.jpg"],
    description:
      "A series of experimental poster designs exploring typography and color. Neon pushes the boundaries of traditional graphic design through bold compositions.",
    role: "Graphic Designer",
    tools: ["Illustrator", "Photoshop"],
    timeline: "2023",
  },
  {
    slug: "orbit",
    title: "Orbit",
    category: ["Product Design", "UIUX"],
    thumbnail: "/projects/orbit-thumb.jpg",
    heroImage: "/projects/orbit-hero.jpg",
    images: [
      "/projects/orbit-1.jpg",
      "/projects/orbit-2.jpg",
      "/projects/orbit-3.jpg",
    ],
    description:
      "A mobile-first design system for a fintech platform. Orbit creates trust through clarity, using editorial layouts and refined typography.",
    role: "Senior Product Designer",
    tools: ["Figma", "Sketch", "Principle"],
    timeline: "2024",
  },
  {
    slug: "prism",
    title: "Prism",
    category: ["3D / CGI", "Branding"],
    thumbnail: "/projects/prism-thumb.jpg",
    heroImage: "/projects/prism-hero.jpg",
    images: ["/projects/prism-1.jpg", "/projects/prism-2.jpg"],
    description:
      "3D brand identity exploration for a luxury tech company. Prism uses light, form, and motion to create a premium visual language.",
    role: "3D Designer & Art Director",
    tools: ["Cinema 4D", "Redshift", "After Effects"],
    timeline: "2024",
  },
  {
    slug: "echo",
    title: "Echo",
    category: ["UIUX"],
    thumbnail: "/projects/echo-thumb.jpg",
    heroImage: "/projects/echo-hero.jpg",
    images: ["/projects/echo-1.jpg", "/projects/echo-2.jpg"],
    description:
      "A social audio platform redesign focused on community and connection. Echo emphasizes voice-first interactions with minimal, accessible interfaces.",
    role: "UX Designer",
    tools: ["Figma", "Prototyping"],
    timeline: "2023",
  },
];

export const categories = [
  "All",
  "UIUX",
  "Product Design",
  "Branding",
  "3D / CGI",
  "Graphic Design",
  "Poster",
] as const;

export type Category = (typeof categories)[number];

export function getProjectsByCategory(category: Category): Project[] {
  if (category === "All") return projects;
  return projects.filter((project) => project.category.includes(category));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) return undefined;
  return projects[currentIndex + 1];
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex <= 0) return undefined;
  return projects[currentIndex - 1];
}
