"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto cuesta una web?",
    a: "Depende completamente del proyecto. Una landing page simple es diferente a una tienda online con cientos de productos. Por eso ofrezco presupuesto personalizado sin compromiso: me cuentas qué necesitas y te doy un precio justo y transparente.",
  },
  {
    q: "¿Cuánto tardas en hacer una web?",
    a: "Varía según la complejidad. Una web corporativa puede estar lista en 2-3 semanas. Un proyecto más complejo con funcionalidades avanzadas puede llevar 4-8 semanas. En la primera reunión te doy una estimación realista.",
  },
  {
    q: "¿Qué tecnologías usas?",
    a: "Trabajo principalmente con Next.js, React, TypeScript y Tailwind CSS. Para bases de datos uso PostgreSQL con Prisma, y para despliegue Vercel. Eligo las herramientas que mejor se adaptan a cada proyecto.",
  },
  {
    q: "¿La web será mía al final?",
    a: "Sí, al 100%. Una vez entregada y pagada, el código fuente y todos los activos son tuyos. Te doy acceso completo al repositorio y documentación por si en el futuro quieres trabajar con otro desarrollador.",
  },
  {
    q: "¿Ofreces mantenimiento después de la entrega?",
    a: "Sí, ofrezco planes de mantenimiento mensual que incluyen actualizaciones de seguridad, correcciones de bugs y pequeños cambios de contenido. También puedes optar por gestionarlo tú mismo — yo te entrego todo documentado.",
  },
  {
    q: "¿Puedo ver avances durante el proceso?",
    a: "Por supuesto. Trabajo de forma iterativa: te voy mostrando el progreso en cada fase para que puedas dar feedback y ajustar el rumbo. Nada se envía a producción sin tu aprobación.",
  },
];

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border border-border/50 rounded-xl overflow-hidden bg-surface hover:border-neon/20 transition-colors duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-semibold pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-neon" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-text-secondary leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-4">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-px bg-gradient-to-r from-neon to-cyan-500" />
            <span className="text-sm font-mono text-neon tracking-wider uppercase">
              FAQ
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-purple-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Preguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400">
              frecuentes
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-secondary max-w-xl mx-auto text-lg"
          >
            Las dudas más comunes antes de empezar un proyecto juntos.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}