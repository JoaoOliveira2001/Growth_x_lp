"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportSettings,
} from "@/lib/animations";

const plans = [
  {
    name: "Starter",
    description: "Ideal para pequenos negócios que estão começando",
    price: "289",
    period: "/mês",
    features: [
      "CRM básico configurado",
      "1 automação de WhatsApp",
      "Relatórios mensais",
      "Suporte por email",
      "1 reunião mensal",
    ],
    cta: "Começar agora",
    highlighted: false,
  },
  {
    name: "Growth",
    description: "Para empresas prontas para escalar seus resultados",
    price: "1.489",
    period: "/mês",
    features: [
      "CRM completo + integrações",
      "Chatbot IA ilimitado",
      "Automações avançadas",
      "Gestão de tráfego pago",
      "Relatórios semanais",
      "Suporte prioritário",
      "4 reuniões mensais",
      "Treinamento da equipe",
    ],
    cta: "Escalar meu negócio",
    highlighted: true,
    badge: "Recomendado",
  },
  {
    name: "Enterprise",
    description: "Solução completa para grandes operações",
    price: "3.999",
    period: "/mês",
    features: [
      "Tudo do plano Growth",
      "Consultoria estratégica dedicada",
      "Desenvolvimento personalizado",
      "Integrações sob demanda",
      "SLA garantido",
      "Gestor de conta exclusivo",
      "Reuniões ilimitadas",
      "Treinamentos in-company",
    ],
    cta: "Falar com especialista",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
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
            Planos & Preços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Escolha o plano ideal para{" "}
            <span className="gradient-text">seu momento</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Planos flexíveis que crescem com o seu negócio. Sem contratos longos,
            cancele quando quiser.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid lg:grid-cols-3 gap-8 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className={`relative rounded-3xl p-8 h-full flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/20 to-accent/10 border-2 border-primary/50"
                  : "glass-card"
              }`}
            >
              {/* Highlighted Glow */}
              {plan.highlighted && (
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-30 -z-10" />
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full gradient-bg text-white text-sm font-semibold shadow-lg shadow-primary/30">
                    <Sparkles className="w-4 h-4" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className={`mb-8 ${plan.badge ? "mt-4" : ""}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-text-secondary text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-text-muted text-lg">R$</span>
                  <span
                    className={`text-5xl font-bold ${
                      plan.highlighted ? "gradient-text" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-text-muted">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.highlighted
                          ? "gradient-bg"
                          : "bg-primary/20"
                      }`}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-text-secondary text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contato"
                className={`w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? "btn-primary"
                    : "bg-white/5 border border-border text-white hover:bg-white/10 hover:border-primary/50"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Note */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center text-text-muted text-sm mt-12"
        >
          Todos os planos incluem período de teste de 7 dias. Sem compromisso.
        </motion.p>
      </div>
    </section>
  );
}
