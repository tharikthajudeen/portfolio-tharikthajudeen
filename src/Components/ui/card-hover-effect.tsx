import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity, faClock } from "@fortawesome/free-solid-svg-icons";

interface HoverEffectProps {
  items: {
    title: string;
    university: string;
    duration: string;
    link: string;
  }[];
  className?: string;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-rows-1 md:grid-rows-2 py-10", className)}>
      {items.map((item, idx) => (
        <Link
          to={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDetail icon={faUniversity}  className="flex items-start mt-4" title="University">
              {item.university}
            </CardDetail>
            <CardDetail icon={faClock} className="flex items-start mt-4" title="Duration">
              {item.duration}
            </CardDetail>
          </Card>
        </Link>
      ))}
    </div>
  );
};

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full p-4 overflow-hidden bg-white bg-opacity-5 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
      className
    )}
  >
    <div className="relative z-50">
      <div className="p-4">{children}</div>
    </div>
  </div>
);

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => (
  <h4 className={cn("text-zinc-100 text-xl md:text-3xl font-bold tracking-wide mt-4", className)}>
    {children}
  </h4>
);

interface CardDetailProps {
  title: string;
  icon: any; // Icon type from Font Awesome
  className?: string;
  children: React.ReactNode;
}

export const CardDetail: React.FC<CardDetailProps> = ({ title, icon, className, children }) => (
  <div className={cn("mt-2 text-zinc-400 tracking-wide leading-relaxed text-lg md:text-xl flex flex-col md:flex-row md:items-center", className)}>
    <FontAwesomeIcon icon={icon} className="mr-2" />
    <strong>{title}:</strong> {children}
  </div>
);
