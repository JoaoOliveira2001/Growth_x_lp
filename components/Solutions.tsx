"use client";

import { motion } from "framer-motion";
import { Filter, Bot, TrendingUp, Users, Star, ArrowRight } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportSettings,
} from "@/lib/animations";

const solutions = [
  {
    icon: Filter,
    title: "CRM & Funil de Vendas",
    description:
      "Estruturamos seu funil de vendas completo com CRM profissional. Acompanhe cada lead, automatize follow-ups e nunca mais perca uma oportunidade.",
    features: ["Pipeline visual", "Automação de tarefas", "Relatórios em tempo real"],
    size: "large",
  },
  {
    icon: Bot,
    title: "Automações & Chatbots IA",
    description:
      "Chatbots inteligentes que qualificam leads 24/7. Automações que economizam horas do seu time com respostas instantâneas.",
    features: ["Atendimento 24/7", "Qualificação automática", "Integração WhatsApp"],
    size: "medium",
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    description:
      "Campanhas otimizadas em Google Ads, Meta Ads e LinkedIn. ROI maximizado com estratégias data-driven.",
    features: ["Google Ads", "Meta Ads", "Otimização contínua"],
    size: "medium",
  },
  {
    icon: Users,
    title: "Treinamentos",
    description:
      "Capacite sua equipe com técnicas modernas de vendas e marketing digital. Workshops práticos e mentorias.",
    features: ["Workshops práticos", "Mentoria individual", "Material exclusivo"],
    size: "small",
  },
  {
    icon: Star,
    title: "Branding & Posicionamento",
    description:
      "Construa uma marca memorável que se destaca no mercado. Identidade visual, tom de voz e estratégia de conteúdo.",
    features: ["Identidade visual", "Estratégia de conteúdo", "Posicionamento"],
    size: "small",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="relative py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossas Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Tudo que você precisa para{" "}
            <span className="gradient-text">escalar</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Soluções integradas que trabalham juntas para maximizar seus
            resultados em vendas e marketing.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className={`group relative glass-card overflow-hidden ${
                solution.size === "large"
                  ? "lg:col-span-2 lg:row-span-2"
                  : solution.size === "medium"
                  ? "lg:col-span-1 lg:row-span-2"
                  : "lg:col-span-1"
              }`}
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/5 transition-all duration-500" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
              </div>

              <div
                className={`relative p-8 h-full flex flex-col ${
                  solution.size === "large" ? "lg:p-12" : ""
                }`}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3
                  className={`font-bold mb-4 ${
                    solution.size === "large"
                      ? "text-2xl lg:text-3xl"
                      : "text-xl"
                  }`}
                >
                  {solution.title}
                </h3>
                <p
                  className={`text-text-secondary mb-6 flex-grow ${
                    solution.size === "large" ? "text-lg" : ""
                  }`}
                >
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
