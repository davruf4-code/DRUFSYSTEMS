"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const techStack = [
  { name: "Next.js", category: "Framework", color: "text-foreground" },
  { name: "React", category: "UI Library", color: "text-cyan-400" },
  { name: "TypeScript", category: "Language", color: "text-blue-400" },
  { name: "Tailwind CSS", category: "Styling", color: "text-cyan-300" },
  { name: "Framer Motion", category: "Animations", color: "text-purple-400" },
  { name: "Prisma", category: "Database", color: "text-neon" },
  { name: "Node.js", category: "Runtime", color: "text-green-400" },
  { name: "PostgreSQL", category: "Database", color: "text-blue-300" },
  { name: "Vercel", category: "Hosting", color: "text-foreground" },
  { name: "Figma", category: "Design", color: "text-purple-300" },
  { name: "Git", category: "Version Control", color: "text-orange-400" },
  { name: "REST / GraphQL", category: "API", color: "text-pink-400" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-px bg-gradient-to-r from-neon to-purple-500" />
          <span className="text-sm font-mono text-neon tracking-wider uppercase">
            Sobre mí
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text + Photo */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
            >
              No soy un desarrollador{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                cualquiera
              </span>
              .
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed mb-6"
            >
              Mientras otros hacen plantillas genéricas, yo construyo experiencias
              digitales que reflejan la esencia de tu marca. Cada pixel, cada
              animación, cada interacción está diseñada con un propósito: que tus
              clientes sientan que están en el lugar correcto.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-text-secondary text-lg leading-relaxed mb-8"
            >
              Mi obsesión por el detalle y las últimas tecnologías me permite crear
              sitios web que no solo lucen increíbles, sino que cargan rápido,
              funcionan perfecto en cualquier dispositivo y generan resultados
              reales para tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-neon/30">
                <Image
                  src="https://sfile.chatglm.cn/images-ppt/6c1b85db69ce.jpg"
                  alt="Fundador de DRUF SYSTEMS"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-lg">Druf Systems</p>
                <p className="text-text-secondary text-sm font-mono">
                  Founder & Creative Developer
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Photo + Tech Stack */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-cyan-500/20 z-10 pointer-events-none" />
              <Image
                src="https://sfile.chatglm.cn/images-ppt/573e0ac9854b.jpg"
                alt="Espacio de trabajo de DRUF SYSTEMS"
                width={800}
                height={530}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </motion.div>

            {/* Tech stack grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-6 rounded-2xl bg-surface border border-border/50"
            >
              <h3 className="text-sm font-mono text-text-secondary tracking-wider uppercase mb-4">
                Tecnologías que domino
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-surface-light border border-border/50 text-xs font-mono hover:border-neon/30 hover:bg-neon/5 transition-all duration-300 cursor-default"
                  >
                    <span className={tech.color}>{tech.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}