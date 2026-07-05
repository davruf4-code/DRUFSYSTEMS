"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Logo & tagline */}
          <div className="text-center md:text-left">
            <a href="#hero" className="font-bold text-xl tracking-tight group inline-block">
              DRUF<span className="text-neon"> SYSTEMS</span>
            </a>
            <p className="text-text-secondary text-sm mt-2 font-mono">
              Experiencias digitales de élite.
            </p>
          </div>

          {/* Center - Social links */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-text-secondary hover:text-neon hover:border-neon/40 transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-text-secondary text-xs font-mono">
              © {new Date().getFullYear()} Druf Systems. Todos los derechos reservados.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-neon hover:underline transition-colors"
            >
              Volver arriba <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}