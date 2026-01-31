"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/projects";

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      {/* Hero Image */}
      <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
        <Image
          src={project.heroImage || project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Title and Metadata */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Title - Left 1/3 */}
          <div className="lg:col-span-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-foreground">
              {project.title}
            </h1>
          </div>

          {/* Metadata - Right 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-foreground/60 text-sm uppercase tracking-wider mb-4">
                Description
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.role && (
                <div>
                  <p className="text-foreground/60 text-sm uppercase tracking-wider mb-2">
                    Role
                  </p>
                  <p className="text-foreground">{project.role}</p>
                </div>
              )}
              {project.tools && project.tools.length > 0 && (
                <div>
                  <p className="text-foreground/60 text-sm uppercase tracking-wider mb-2">
                    Tools
                  </p>
                  <p className="text-foreground">
                    {project.tools.join(", ")}
                  </p>
                </div>
              )}
              {project.timeline && (
                <div>
                  <p className="text-foreground/60 text-sm uppercase tracking-wider mb-2">
                    Timeline
                  </p>
                  <p className="text-foreground">{project.timeline}</p>
                </div>
              )}
              <div>
                <p className="text-foreground/60 text-sm uppercase tracking-wider mb-2">
                  Category
                </p>
                <p className="text-foreground">
                  {project.category.join(" / ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
