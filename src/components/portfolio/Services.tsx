"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Palette,
  Code2,
  Rocket,
  Zap,
  Smartphone,
  Shield,
} from "lucide-react";

const serviceColors = [
  { bg: "bg-purple-500/10", hoverBg: "group-hover:bg-purple-500/20", icon: "text-purple-400", hoverTitle: "group-hover:text-purple-400", dot: "bg-purple-400/60", border: "hover:border-purple-500/30", glow: "from-purple-500", number: "group-hover:text-purple-500/[0.05]" },
  { bg: "bg-neon/10", hoverBg: "group-hover:bg-neon/20", icon: "text-neon", hoverTitle: "group-hover:text-neon", dot: "bg-neon/60", border: "hover:border-neon/30", glow: "from-neon", number: "group-hover:text-neon/[0.05]" },
  { bg: "bg-cyan-500/10", hoverBg: "group-hover:bg-cyan-500/20", icon: "text-cyan-400", hoverTitle: "group-hover:text-cyan-400", dot: "bg-cyan-400/60", border: "hover:border-cyan-500/30", glow: "from-cyan-500", number: "group-hover:text-cyan-500/[0.05]" },
  { bg: "bg-orange-500/10", hoverBg: "group-hover:bg-orange-500/20", icon: "text-orange-400", hoverTitle: "group-hover:text-orange-400", dot: "bg-orange-400/60", border: "hover:border-orange-500/30", glow: "from-orange-500", number: "group-hover:text-orange-500/[0.05]" },
  { bg: "bg-pink-500/10", hoverBg: "group-hover:bg-pink-500/20", icon: "text-pink-400", hoverTitle: "group-hover:text-pink-400", dot: "bg-pink-400/60", border: "hover:border-pink-500/30", glow: "from-pink-500", number: "group-hover:text-pink-500/[0.05]" },
  { bg: "bg-emerald-500/10", hoverBg: "group-hover:bg-emerald-500/20", icon: "text-emerald-400", hoverTitle: "group-hover:text-emerald-400", dot: "bg-emerald-400/60", border: "hover:border-emerald-500/30", glow: "from-emerald-500", number: "group-hover:text-emerald-500/[0.05]" },
];

const services = [
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description:
      "Interfaces que enamoran. Cada diseño parte de entender tu negocio y tu cliente para crear una experiencia visual que genera confianza y acción.",
    features: ["Research & Strategy", "Wireframing", "High-fidelity Design", "Design System"],
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Código limpio, rendimiento extremo. Uso las tecnologías más modernas para construir sitios rápidos, seguros y escalables.",
    features: ["Next.js & React", "TypeScript", "API Development", "Database Design"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Tu web lucirá perfecta en cualquier dispositivo. Optimización móvil-first que asegura una experiencia impecable en cada pantalla.",
    features: ["Mobile-First", "Tablet & Desktop", "Touch Interactions", "Performance"],
  },
  {
    icon: Zap,
    title: "Animaciones & Micro-interacciones",
    description:
      "Los detalles importan. Añado animaciones fluidas y micro-interacciones que hacen que tu web se sienta viva y premium.",
    features: ["Framer Motion", "Scroll Animations", "Page Transitions", "Hover Effects"],
  },
  {
    icon: Rocket,
    title: "SEO & Rendimiento",
    description:
      "Lo bonito también tiene que ser rápido. Optimizo cada aspecto para que Google te ame y tus visitantes no esperen.",
    features: ["Core Web Vitals", "Semantic HTML", "Image Optimization", "Caching"],
  },
  {
    icon: Shield,
    title: "Soporte & Mantenimiento",
    description:
      "No te dejo tirado después de entregar. Ofrezco soporte continuo para que tu web siempre esté al 100%.",
    features: ["24/7 Monitoring", "Security Updates", "Content Updates", "Analytics"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const c = serviceColors[index];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative p-6 md:p-8 rounded-2xl border border-border/50 bg-surface ${c.border} transition-all duration-500`}
    >
      {/* Glow border on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${c.glow} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none`} />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-5">
          <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.hoverBg} flex items-center justify-center shrink-0 transition-colors duration-300`}>
            <service.icon className={`w-6 h-6 ${c.icon}`} />
          </div>
          <h3 className={`text-xl font-bold ${c.hoverTitle} transition-colors duration-300`}>
            {service.title}
          </h3>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="grid grid-cols-2 gap-2">
          {service.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-xs font-mono text-text-secondary"
            >
              <div className={`w-1 h-1 ${c.dot} rounded-full shrink-0`} />
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Corner number */}
      <span className={`absolute top-4 right-4 text-6xl font-bold text-white/[0.02] select-none ${c.number} transition-colors duration-500`}>
        0{index + 1}
      </span>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4"
    >
      {/* Colorful bg accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-500/3 blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/3 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-neon" />
            <span className="text-sm font-mono text-neon tracking-wider uppercase">
              Servicios
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-neon to-cyan-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Todo lo que necesitas para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-purple-400 to-pink-500">
              dominar online
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Un servicio integral que cubre cada aspecto de tu presencia digital, desde el primer boceto hasta el lanzamiento y más allá.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}