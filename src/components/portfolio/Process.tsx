"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, PencilRuler, Code, Rocket } from "lucide-react";

const stepColors = [
  { bg: "bg-purple-500/10", border: "border-purple-400/20", hoverBg: "group-hover:bg-purple-500/20", hoverBorder: "group-hover:border-purple-400/40", icon: "text-purple-400", title: "group-hover:text-purple-400", number: "group-hover:text-purple-500/[0.05]", dot: "from-purple-500 to-pink-500" },
  { bg: "bg-orange-500/10", border: "border-orange-400/20", hoverBg: "group-hover:bg-orange-500/20", hoverBorder: "group-hover:border-orange-400/40", icon: "text-orange-400", title: "group-hover:text-orange-400", number: "group-hover:text-orange-500/[0.05]", dot: "from-orange-500 to-yellow-500" },
  { bg: "bg-cyan-500/10", border: "border-cyan-400/20", hoverBg: "group-hover:bg-cyan-500/20", hoverBorder: "group-hover:border-cyan-400/40", icon: "text-cyan-400", title: "group-hover:text-cyan-400", number: "group-hover:text-cyan-500/[0.05]", dot: "from-cyan-500 to-blue-500" },
  { bg: "bg-emerald-500/10", border: "border-emerald-400/20", hoverBg: "group-hover:bg-emerald-500/20", hoverBorder: "group-hover:border-emerald-400/40", icon: "text-emerald-400", title: "group-hover:text-emerald-400", number: "group-hover:text-emerald-500/[0.05]", dot: "from-emerald-500 to-neon" },
];

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Descubrimiento",
    description:
      "Nos sentamos (virtualmente) a entender tu negocio, tus objetivos y tu visión. Sin jerga técnica, solo conversación real sobre lo que necesitas.",
  },
  {
    icon: PencilRuler,
    step: "02",
    title: "Diseño",
    description:
      "Creo wireframes y diseños de alta fidelidad que capturan la esencia de tu marca. Cada pantalla se revisa contigo hasta que digas 'wow'.",
  },
  {
    icon: Code,
    step: "03",
    title: "Desarrollo",
    description:
      "Convierto el diseño en código limpio y performante. Construyo con las mejores tecnologías del mercado para asegurar velocidad y escalabilidad.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Lanzamiento",
    description:
      "Despliegue, testing exhaustivo y optimización final. Tu web sale al mundo lista para impresionar y convertir desde el primer segundo.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 overflow-hidden"
    >
      {/* Decorative line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-orange-500" />
            <span className="text-sm font-mono text-neon tracking-wider uppercase">
              Proceso
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-cyan-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            De la idea al{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-orange-400 to-emerald-400">
              lanzamiento
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Un proceso claro, transparente y sin sorpresas. Tú siempre sabes en qué fase está tu proyecto.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const c = stepColors[i];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className="relative group"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className={`hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r ${stepColors[i].dot}/30 to-transparent`} />
                )}

                <div className="relative">
                  {/* Step number */}
                  <span className={`text-6xl font-bold text-white/[0.03] absolute -top-2 -left-1 select-none ${c.number} transition-colors duration-500`}>
                    {step.step}
                  </span>

                  {/* Icon */}
                  <div className={`relative w-14 h-14 rounded-xl ${c.bg} ${c.border} flex items-center justify-center mb-6 ${c.hoverBg} ${c.hoverBorder} transition-all duration-500`}>
                    <step.icon className={`w-6 h-6 ${c.icon}`} />
                  </div>

                  <h3 className={`text-lg font-bold mb-3 ${c.title} transition-colors duration-300`}>
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}