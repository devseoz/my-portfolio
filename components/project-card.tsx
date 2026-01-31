"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/work/${project.slug}`}>
        <motion.div
          className="group relative overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] bg-muted overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300"
              initial={false}
            />
          </div>

          {/* Title overlay on hover */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          >
            <h3 className="text-2xl md:text-3xl font-light text-background tracking-tight">
              {project.title}
            </h3>
          </motion.div>

          {/* Info below image */}
          <div className="mt-4 space-y-1">
            <h3 className="text-lg font-medium text-foreground tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/50 uppercase tracking-wider">
              {project.category.join(" / ")}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
