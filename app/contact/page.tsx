import Navigation from "@/components/navigation";
import ContactFooter from "@/components/contact-footer";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export const metadata = {
  title: "Contact | SEOHYEON",
  description: "Get in touch with SEOHYEON",
};

export default function ContactPage() {
  const contactMethods = [
    {
      label: "Email",
      value: "hello@seohyeon.design",
      href: "mailto:hello@seohyeon.design",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/seohyeon",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      label: "Twitter",
      value: "@seohyeon",
      href: "https://twitter.com",
      icon: Twitter,
    },
    {
      label: "GitHub",
      value: "github.com/seohyeon",
      href: "https://github.com",
      icon: Github,
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 md:pt-40 pb-24 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="mb-20 md:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
              Contact
            </h1>
            <div className="w-16 h-px bg-foreground/20" />
          </div>

          {/* Contact Methods */}
          <div className="max-w-2xl space-y-12">
            <div className="space-y-6">
              <p className="text-xl text-foreground/70 leading-relaxed">
                Interested in collaborating or have a project in mind? I'd love
                to hear from you.
              </p>
            </div>

            <div className="space-y-8 pt-8">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-6 py-4 border-b border-border/50 hover:border-foreground/50 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-foreground/50 group-hover:text-foreground transition-colors" />
                    <div className="flex-1">
                      <p className="text-sm text-foreground/50 uppercase tracking-wider mb-1">
                        {method.label}
                      </p>
                      <p className="text-lg text-foreground group-hover:opacity-70 transition-opacity">
                        {method.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
