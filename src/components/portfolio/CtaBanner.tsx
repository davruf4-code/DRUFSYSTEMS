"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden"
      >
        {/* Multicolor BG gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-surface to-orange-500/10" />
        <div className="absolute inset-0 grid-bg" />

        {/* Animated color border */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-clip-padding" style={{ borderImage: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(59,130,246,0.3), rgba(249,115,22,0.3), rgba(6,182,212,0.3)) 1" }} />
        <div className="absolute inset-0 rounded-3xl border border-border/20" />

        <div className="relative z-10 p-10 md:p-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Tu competencia ya tiene
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">
              una web increíble.
            </span>
            <br />
            ¿Y tú?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-text-secondary text-lg max-w-xl mx-auto mb-10"
          >
            Cada día que pasas con una web mediocre son clientes que se van a tu competencia. No lo dejes para mañana.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon via-blue-400 to-cyan-400 text-white hover:opacity-90 font-bold text-lg px-10 py-7 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:scale-105"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Empecemos ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}