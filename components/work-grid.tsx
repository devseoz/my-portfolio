"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/projects";
import ProjectCard from "./project-card";

interface WorkGridProps {
  projects: Project[];
}

export default function WorkGrid({ projects }: WorkGridProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={projects.map((p) => p.slug).join(",")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
