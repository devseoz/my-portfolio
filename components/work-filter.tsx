"use client";

import { motion } from "framer-motion";
import { Category } from "@/lib/projects";

interface WorkFilterProps {
  categories: readonly Category[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function WorkFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: WorkFilterProps) {
  return (
    <div className="flex items-center gap-8 md:gap-12 flex-wrap">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`text-sm font-medium transition-colors relative ${
              isActive
                ? "text-foreground"
                : "text-foreground/50 hover:text-foreground/70"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
            {isActive && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                layoutId="activeFilter"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
