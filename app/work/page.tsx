"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import WorkFilter from "@/components/work-filter";
import WorkGrid from "@/components/work-grid";
import ContactFooter from "@/components/contact-footer";
import { categories, getProjectsByCategory, type Category } from "@/lib/projects";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 md:pt-40 pb-24 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          {/* Header with Filter */}
          <div className="mb-20 md:mb-24">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
                All Work
              </h1>
              <WorkFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>
            <div className="w-16 h-px bg-foreground/20" />
          </div>

          {/* Projects Grid */}
          <WorkGrid projects={filteredProjects} />
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
