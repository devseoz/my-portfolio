"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-background">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/20" />

      {/* Main Hero Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Two-column asymmetric grid with precise vertical rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-16 md:gap-20 lg:gap-24 xl:gap-32 pt-[112px] md:pt-[128px] lg:pt-[144px] pb-40 md:pb-48 lg:pb-56">
          
          {/* Left Column - Typography (Left-aligned) */}
          <div className="flex flex-col justify-center">
            {/* Vertical spacing: increased whitespace */}
            <div className="space-y-5 md:space-y-6">
              {/* Headline with refined typography - tighter leading, subtle tracking */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[clamp(64px,8vw,96px)] font-light tracking-[-0.02em] leading-[1.05] text-foreground"
              >
                Product Designer
                <br />
                & Visual Creator
              </motion.h1>

              {/* Increased spacing for better baseline alignment */}
              <div className="h-6 md:h-8" />

              {/* Subtext with softened opacity and refined typography */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.9, 
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="text-base md:text-lg lg:text-xl text-foreground/50 font-light leading-[1.45] tracking-[0.01em] max-w-[36rem]"
              >
                Crafting thoughtful digital experiences with editorial precision
                and minimal aesthetics.
              </motion.p>
            </div>
          </div>

          {/* Right Column - Artwork/Image Zone (Simplified container) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] xl:aspect-[5/6] bg-muted/20 overflow-hidden group"
          >
            {/* Placeholder for hero image - simplified, no outline */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-foreground/15 text-xs md:text-sm font-light tracking-wide">
                Hero Image
              </div>
            </div>
            
            {/* Optional: Uncomment and add image path when ready */}
            {/* 
            <Image
              src="/path-to-hero-image.jpg"
              alt="Hero artwork"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            */}
          </motion.div>
        </div>

        {/* Subtle bottom divider with modular spacing */}
        <div className="h-px bg-border/20 mt-20 md:mt-28 lg:mt-32" />
      </div>
    </section>
  );
}
