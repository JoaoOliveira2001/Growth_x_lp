"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  drawLine,
  viewportSettings,
} from "@/lib/animations";

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Estruturação",
    description:
      "Analisamos seu negócio a fundo, identificamos gargalos e criamos um plano estratégico personalizado. Definimos metas claras e métricas de sucesso.",
    features: [
      "Diagnóstico completo",
      "Mapeamento de processos",
      "Definição de KPIs",
    ],
  },
  {
    number: "02",
    icon: Rocket,
    title: "Implementação",
    description:
      "Colocamos o plano em ação. Configuramos ferramentas, automatizamos processos e treinamos sua equipe para operar no novo modelo.",
    features: [
      "Setup de ferramentas",
      "Automações ativas",
      "Treinamento da equipe",
    ],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Crescimento",
    description:
      "Monitoramos resultados, otimizamos campanhas e escalamos o que funciona. Seu negócio cresce de forma sustentável e previsível.",
    features: [
      "Monitoramento contínuo",
      "Otimização de resultados",
      "Escala sustentável",
    ],
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossa Metodologia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Como <span className="gradient-text">aceleramos</span> seu negócio
          </h2>
          <p className="text-text-secondary text-lg">
            Um processo estruturado em 3 etapas para garantir resultados
            consistentes e escaláveis.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* SVG Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 pointer-events-none">
            <svg
              className="w-full h-20 absolute top-1/2 -translate-y-1/2"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="16.66%"
                y1="50%"
                x2="83.33%"
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                variants={drawLine}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF4500" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative"
              >
                {/* Mobile Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
                )}

                <div className="glass-card-hover p-8 h-full relative group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mt-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-text-secondary mb-6">{step.description}</p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {step.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mt-16"
        >
          <a href="#contato" className="btn-primary inline-flex items-center gap-2">
            Iniciar minha jornada
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
