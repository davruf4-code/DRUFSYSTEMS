"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const words = ["Websites", "Impactantes", "que", "Convierten", "Visitantes", "en", "Clientes"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      {/* Multicolor gradient orbs */}
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-[10%] w-[450px] h-[450px] rounded-full bg-orange-400/8 blur-[100px] pointer-events-none"
        style={{ animationDelay: "3s", animation: "float 8s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-[140px] pointer-events-none"
        style={{ animationDelay: "1.5s", animation: "float 10s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[10%] right-[20%] w-[300px] h-[300px] rounded-full bg-pink-500/6 blur-[90px] pointer-events-none"
        style={{ animationDelay: "4s", animation: "float 7s ease-in-out infinite" }}
      />

      {/* Floating colorful geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"
        animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-2 h-2 bg-orange-400/80 rounded-full"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-[15%] w-1 h-16 bg-gradient-to-b from-cyan-400/60 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3], height: [40, 60, 40] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-[10%] w-16 h-1 bg-gradient-to-r from-transparent to-pink-400/50"
        animate={{ opacity: [0.2, 0.7, 0.2], width: [40, 70, 40] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-[30%] w-2 h-2 bg-cyan-300/50 rounded-full"
        animate={{ y: [0, -15, 0], x: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] left-[40%] w-4 h-4 border border-orange-400/30 rounded-sm rotate-45"
        animate={{ rotate: [45, 135, 225, 315, 45], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <div className="text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/20 bg-neon/5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-neon" />
              <span className="text-sm font-mono text-neon tracking-wider uppercase">
                Diseño & Desarrollo Web
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="overflow-hidden mb-4">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-text-secondary text-lg md:text-xl font-mono mb-4"
              >
                Creo
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-x-3 gap-y-2 mb-8">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 80, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none ${
                    word === "Convierten"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500"
                      : word === "Impactantes"
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
                        : "text-foreground"
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-text-secondary text-base md:text-lg max-w-xl mb-10 leading-relaxed"
            >
              No hago páginas web cualquiera. Diseño experiencias digitales que
              atrapan, convencen y transforman tu presencia online en tu mayor
              activo de negocio.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon via-blue-400 to-cyan-400 text-white hover:opacity-90 font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Quiero mi web de ensueño
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:border-purple-400 hover:text-purple-400 font-medium text-lg px-8 py-6 rounded-full transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver servicios
              </Button>
            </motion.div>
          </div>

          {/* Right - Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/30 shadow-2xl shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-10" />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-orange-500/20 rounded-2xl blur-sm -z-10" />
              <Image
                src="https://sfile.chatglm.cn/images-ppt/b8189e75c4cc.png"
                alt="Diseño web moderno por DRUF SYSTEMS"
                width={700}
                height={440}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
            {/* Floating color badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-purple-500/90 text-white text-xs font-bold shadow-lg shadow-purple-500/30"
            >
              Next.js
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-orange-500/90 text-white text-xs font-bold shadow-lg shadow-orange-500/30"
            >
              Framer Motion
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-6 px-3 py-1.5 rounded-full bg-cyan-500/90 text-white text-xs font-bold shadow-lg shadow-cyan-500/30"
            >
              TypeScript
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-text-secondary tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-neon" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}