import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";
import ContactFooter from "@/components/contact-footer";

export default function Home() {
  // Get first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Featured Projects */}
      <section className="py-32 md:py-40 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-20 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
              Featured Work
            </h2>
            <div className="w-16 h-px bg-border/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
