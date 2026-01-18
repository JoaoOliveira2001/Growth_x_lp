"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Quote, Star } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportSettings,
} from "@/lib/animations";

const stats = [
  {
    value: 3,
    suffix: "x",
    label: "Aumento médio no faturamento",
  },
  {
    value: 50,
    suffix: "%",
    label: "Redução em custos operacionais",
  },
  {
    value: 200,
    suffix: "+",
    label: "Empresas aceleradas",
  },
  {
    value: 98,
    suffix: "%",
    label: "Clientes satisfeitos",
  },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toString()
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    return display.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [display]);

  return (
    <span ref={ref} className="gradient-text">
      {displayValue}
      {suffix}
    </span>
  );
}

const testimonial = {
  quote:
    "A Growth X transformou completamente nossa operação de vendas. Em apenas 3 meses, triplicamos nosso faturamento e reduzimos o tempo de fechamento em 60%. A equipe é extremamente profissional e os resultados falam por si.",
  author: "Carlos Silva",
  role: "CEO, TechSolutions Brasil",
  rating: 5,
};

export default function Results() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
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
            Resultados Comprovados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Números que{" "}
            <span className="gradient-text">impressionam</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Veja os resultados reais que entregamos para nossos clientes
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="glass-card p-8 text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-text-secondary text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative Quote Icon */}
            <Quote className="absolute top-8 right-8 w-24 h-24 text-primary/10" />

            <div className="relative">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-white font-medium mb-8 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
