"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzCTkCIPapjyFiyhIpihFnJiUbKp0PybVp9aUJtMf5nyLA7GkDd3WmBMU3KAQt6EOz3/exec";
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        mode: "no-cors",
      });
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4"
    >
      {/* Large glow bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-neon/[0.03] blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-neon" />
            <span className="text-sm font-mono text-neon tracking-wider uppercase">
              Contacto
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-neon to-purple-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            ¿Listo para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">transformar</span> tu web?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-secondary max-w-xl mx-auto text-lg"
          >
            Cuéntame tu proyecto y te respondo en menos de 24 horas. Sin compromiso, sin letra pequeña.
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-cyan-500/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 hover:opacity-100 transition-opacity duration-700" />

          <form
            onSubmit={handleSubmit}
            className="relative p-8 md:p-10 rounded-2xl border border-border/50 bg-surface space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-text-secondary">
                  Nombre
                </label>
                <Input
                  name="name"
                  placeholder="Tu nombre"
                  className="bg-surface-light border-border/50 focus:border-neon/50 focus:ring-neon/20 h-12 rounded-xl text-foreground placeholder:text-text-secondary/50"
                  required
                  disabled={status === "sending"}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-text-secondary">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-surface-light border-border/50 focus:border-neon/50 focus:ring-neon/20 h-12 rounded-xl text-foreground placeholder:text-text-secondary/50"
                  required
                  disabled={status === "sending"}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-text-secondary">
                ¿De qué trata tu proyecto?
              </label>
              <Textarea
                name="message"
                placeholder="Cuéntame brevemente qué necesitas, tu presupuesto estimado y cuándo te gustaría tenerlo listo..."
                className="bg-surface-light border-border/50 focus:border-neon/50 focus:ring-neon/20 min-h-[140px] rounded-xl text-foreground placeholder:text-text-secondary/50 resize-none"
                required
                disabled={status === "sending"}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={status === "sending" || status === "sent"}
                className="w-full sm:w-auto bg-gradient-to-r from-neon via-blue-400 to-cyan-400 text-white hover:opacity-90 font-bold text-base px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 disabled:opacity-70"
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </span>
                ) : status === "sent" ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    ¡Mensaje enviado!
                  </span>
                ) : status === "error" ? (
                  <span className="flex items-center gap-2">
                    Error al enviar
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Enviar mensaje
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
              <p className="text-text-secondary text-xs font-mono">
                {status === "sent"
                  ? "Te responderé lo antes posible"
                  : "Respuesta garantizada en <24h"}
              </p>
            </div>
          </form>
        </motion.div>

        {/* Bottom trust signal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-text-secondary"
        >
          <div className="flex items-center gap-2 text-sm">
            <ArrowRight className="w-4 h-4 text-cyan-400" />
            <span>Sin compromiso</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <ArrowRight className="w-4 h-4 text-purple-400" />
            <span>Presupuesto personalizado</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <ArrowRight className="w-4 h-4 text-orange-400" />
            <span>Reunión introductoria gratis</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}