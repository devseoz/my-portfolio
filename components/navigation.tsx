"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/50 backdrop-blur-lg"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-base md:text-lg font-medium tracking-tight text-foreground hover:opacity-60 transition-opacity duration-200"
          >
            SEOHYEON
          </Link>

          <div className="flex items-center gap-6 md:gap-10">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 relative ${
                      isActive
                        ? "text-foreground"
                        : "text-foreground/60 hover:text-foreground/90"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                        layoutId="activeNav"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
