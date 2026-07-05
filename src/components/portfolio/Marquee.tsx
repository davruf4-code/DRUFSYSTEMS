"use client";

const techs = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "FRAMER MOTION",
  "NODE.JS",
  "PRISMA",
  "FIGMA",
  "SHADCN/UI",
  "VERCEL",
  "THREE.JS",
  "GSAP",
];

export default function Marquee() {
  return (
    <section className="relative py-8 border-y border-border/50 overflow-hidden bg-surface/50">
      <div className="flex">
        <div className="flex shrink-0 animate-marquee items-center gap-8">
          {[...techs, ...techs].map((tech, i) => (
            <span
              key={`a-${i}`}
              className="text-sm md:text-base font-mono text-text-secondary hover:text-neon transition-colors duration-300 whitespace-nowrap cursor-default flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 bg-neon/40 rounded-full" />
              {tech}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center gap-8">
          {[...techs, ...techs].map((tech, i) => (
            <span
              key={`b-${i}`}
              className="text-sm md:text-base font-mono text-text-secondary hover:text-neon transition-colors duration-300 whitespace-nowrap cursor-default flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 bg-neon/40 rounded-full" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}