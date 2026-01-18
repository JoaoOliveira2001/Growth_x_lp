"use client";

import { motion } from "framer-motion";
import { Target, Eye, BookOpen, Zap, Heart, TrendingUp } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  cardHover,
  viewportSettings,
} from "@/lib/animations";

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description:
      "Cada estratégia é pensada para gerar impacto real no seu faturamento.",
  },
  {
    icon: Zap,
    title: "Simplicidade",
    description:
      "Processos claros e objetivos que você consegue acompanhar e entender.",
  },
  {
    icon: BookOpen,
    title: "Aprendizado Contínuo",
    description:
      "Atualizamos constantemente nossas estratégias com as últimas tendências do mercado.",
  },
  {
    icon: Heart,
    title: "Compromisso",
    description:
      "Tratamos seu negócio como se fosse o nosso. Seu sucesso é o nosso sucesso.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Sustentável",
    description:
      "Construímos bases sólidas para que seu crescimento seja duradouro.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description:
      "Relatórios claros e comunicação aberta em todas as etapas do processo.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Transformamos{" "}
              <span className="gradient-text">negócios</span> através de
              estratégias inteligentes
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              A Growth X é uma aceleradora de empresas especializada em
              marketing e vendas com inteligência artificial e CRM. Nossa missão
              é simplificar o complexo, automatizando processos e potencializando
              resultados para empresas que querem crescer de verdade.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <motion.div
                variants={cardHover}
                initial="initial"
                whileHover="hover"
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Nossa Missão</h3>
                    <p className="text-text-secondary text-sm">
                      Acelerar o crescimento de empresas através de soluções
                      inteligentes de marketing e vendas, tornando a tecnologia
                      acessível e eficiente.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardHover}
                initial="initial"
                whileHover="hover"
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Nossa Visão</h3>
                    <p className="text-text-secondary text-sm">
                      Ser a principal referência em aceleração de negócios no
                      Brasil, reconhecida pela excelência em resultados e
                      inovação.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Values Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid sm:grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(249, 115, 22, 0.15)",
                }}
                className={`glass-card-hover p-6 ${
                  index === 0 || index === 5 ? "sm:col-span-2" : ""
                }`}
              >
                <value.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-text-secondary text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
