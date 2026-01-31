import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import ProjectHeader from "@/components/project-header";
import ProjectSection from "@/components/project-section";
import ContactFooter from "@/components/contact-footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getProjectBySlug,
  getNextProject,
  getPreviousProject,
} from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Work`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);
  const previousProject = getPreviousProject(slug);

  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="pt-24 md:pt-32">
        {/* Project Header */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mb-16 md:mb-24">
          <ProjectHeader project={project} />
        </div>

        {/* Project Sections */}
        <div className="space-y-0">
          {project.images.map((image, index) => {
            // Alternate between full and grid layouts
            if (index % 3 === 0 && project.images.length > index + 1) {
              return (
                <ProjectSection
                  key={index}
                  variant="grid2"
                  images={project.images.slice(index, index + 2)}
                />
              );
            } else if (index % 3 === 2) {
              return null; // Skip, already rendered in grid
            } else {
              return (
                <ProjectSection
                  key={index}
                  variant={index % 2 === 0 ? "imageLeft" : "imageRight"}
                  image={image}
                  content={
                    index === 0 ? (
                      <div>
                        <h3 className="text-2xl font-light mb-4 text-foreground">
                          Process
                        </h3>
                        <p className="text-foreground/60 leading-relaxed">
                          This project represents a thoughtful approach to
                          design, balancing aesthetics with functionality.
                        </p>
                      </div>
                    ) : undefined
                  }
                />
              );
            }
          })}
        </div>

        {/* Navigation */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 border-t border-border/50">
          <div className="flex items-center justify-between">
            <Link
              href="/work"
              className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">All Work</span>
            </Link>

            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}`}
                className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors group"
              >
                <span className="text-sm font-medium">Next Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </article>

      <ContactFooter />
    </main>
  );
}
