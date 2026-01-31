"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectSectionProps {
  variant?: "imageLeft" | "imageRight" | "full" | "grid2";
  image?: string;
  images?: string[];
  content?: React.ReactNode;
  className?: string;
}

export default function ProjectSection({
  variant = "full",
  image,
  images,
  content,
  className = "",
}: ProjectSectionProps) {
  const imageList = images || (image ? [image] : []);

  if (variant === "full") {
    return (
      <motion.section
        className={`py-16 md:py-24 ${className}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {imageList.map((img, index) => (
          <div
            key={index}
            className="relative w-full aspect-[16/10] bg-muted mb-8 last:mb-0 overflow-hidden"
          >
            <Image
              src={img}
              alt={`Project image ${index + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        {content && <div className="mt-12">{content}</div>}
      </motion.section>
    );
  }

  if (variant === "grid2") {
    return (
      <motion.section
        className={`py-16 md:py-24 ${className}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {imageList.map((img, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/3] bg-muted overflow-hidden"
            >
              <Image
                src={img}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
        {content && <div className="mt-12">{content}</div>}
      </motion.section>
    );
  }

  const isImageLeft = variant === "imageLeft";

  return (
    <motion.section
      className={`py-16 md:py-24 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 ${
            isImageLeft ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Image - 2/3 width */}
          <div className="lg:col-span-2">
            {imageList.map((img, index) => (
              <motion.div
                key={index}
                className="relative w-full aspect-[16/10] bg-muted mb-8 last:mb-0 overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Image
                  src={img}
                  alt={`Project image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </motion.div>
            ))}
          </div>

          {/* Content - 1/3 width */}
          {content && (
            <div className="lg:col-span-1 flex items-center">
              <div className="space-y-6">{content}</div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
