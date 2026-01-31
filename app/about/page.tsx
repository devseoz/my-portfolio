import Navigation from "@/components/navigation";
import ContactFooter from "@/components/contact-footer";
import Image from "next/image";

export const metadata = {
  title: "About | SEOHYUN",
  description: "About SEOHYUN - Product Designer & Visual Creator",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 md:pt-40 pb-24 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="mb-20 md:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
              About
            </h1>
            <div className="w-16 h-px bg-foreground/20" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-24">
            {/* Portrait - Left 1/3 */}
            <div className="lg:col-span-1">
              <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                <Image
                  src="/projects/seed-thumb.jpg"
                  alt="Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Bio - Right 2/3 */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
                  Product Designer & Visual Creator
                </h2>
                <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                  <p>
                    I craft thoughtful digital experiences with editorial
                    precision and minimal aesthetics. My work focuses on
                    creating interfaces and visual identities that balance
                    beauty with functionality.
                  </p>
                  <p>
                    With a background in product design and visual arts, I bring
                    a unique perspective to every project. I believe in the
                    power of simplicity and the importance of every detail.
                  </p>
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="space-y-8 pt-8 border-t border-border/50">
                <h3 className="text-xl font-medium text-foreground">
                  Experience
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      role: "Senior Product Designer",
                      company: "Studio",
                      period: "2022 — Present",
                    },
                    {
                      role: "Product Designer",
                      company: "Agency",
                      period: "2020 — 2022",
                    },
                    {
                      role: "Visual Designer",
                      company: "Startup",
                      period: "2018 — 2020",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="md:w-48">
                        <p className="text-sm text-foreground/50 uppercase tracking-wider">
                          {item.period}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">
                          {item.role}
                        </p>
                        <p className="text-foreground/60">{item.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Skills */}
              <div className="space-y-6 pt-8 border-t border-border/50">
                <h3 className="text-xl font-medium text-foreground">
                  Tools & Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Figma",
                    "Sketch",
                    "Principle",
                    "After Effects",
                    "Cinema 4D",
                    "Illustrator",
                    "Photoshop",
                    "InDesign",
                    "Framer",
                  ].map((tool) => (
                    <p key={tool} className="text-foreground/70">
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
