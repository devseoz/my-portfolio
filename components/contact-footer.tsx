"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@seohyeon.design",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
  },
];

export default function ContactFooter() {
  return (
    <footer className="relative py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-background border-t border-border/50">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-2">
              <a
                href="mailto:hello@seohyeon.design"
                className="text-2xl md:text-3xl font-light text-foreground hover:text-foreground/70 transition-colors block"
              >
                hello@seohyeon.design
              </a>
              <p className="text-sm text-foreground/50">
                Available for new projects
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 hover:text-foreground transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-foreground/50">
                <p>© {new Date().getFullYear()} SEOHYEON. All rights reserved.</p>
            <p className="font-light">Designed with editorial precision</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
