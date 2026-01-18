"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import {
  heroStagger,
  fadeInUp,
  fadeInRight,
  floatAnimation,
} from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Aceleradora de Empresas
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Cresça suas Vendas{" "}
              <span className="gradient-text">10x</span> mais com a{" "}
              <span className="gradient-text">Growth X</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Automatizamos seus funis de vendas com IA e CRM para transformar
              leads em clientes fiéis. Estratégias personalizadas que geram
              resultados reais.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#planos"
                className="btn-primary inline-flex items-center justify-center gap-2 text-base animate-pulse-glow"
              >
                Quero impulsionar meus resultados
                <ArrowRight size={18} />
              </a>
              <a
                href="#contato"
                className="btn-ghost inline-flex items-center justify-center gap-2 text-base"
              >
                <Play size={18} />
                Agende consultoria
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 pt-8 border-t border-border"
            >
              <p className="text-text-muted text-sm mb-4">
                Empresas que confiam na Growth X
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-8 opacity-50">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-24 h-8 bg-white/10 rounded-md"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <motion.div
              animate={floatAnimation}
              className="relative"
            >
              {/* Main Visual Container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl" />
                
                {/* Abstract 3D Grid */}
                <div className="relative glass-card p-8 h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Hexagonal Pattern */}
                    <svg
                      viewBox="0 0 400 400"
                      className="w-full h-full"
                      fill="none"
                    >
                      {/* Central Hexagon */}
                      <motion.path
                        d="M200 50 L320 120 L320 260 L200 330 L80 260 L80 120 Z"
                        stroke="url(#gradient1)"
                        strokeWidth="2"
                        fill="rgba(249,115,22,0.05)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      
                      {/* Inner Hexagon */}
                      <motion.path
                        d="M200 100 L280 150 L280 240 L200 290 L120 240 L120 150 Z"
                        stroke="url(#gradient1)"
                        strokeWidth="1.5"
                        fill="rgba(249,115,22,0.08)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
                      />
                      
                      {/* Center Circle */}
                      <motion.circle
                        cx="200"
                        cy="195"
                        r="40"
                        stroke="url(#gradient1)"
                        strokeWidth="2"
                        fill="rgba(249,115,22,0.15)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      />
                      
                      {/* G Letter */}
                      <motion.text
                        x="200"
                        y="210"
                        textAnchor="middle"
                        className="text-5xl font-bold fill-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      >
                        G
                      </motion.text>
                      
                      {/* Connecting Lines - Pre-calculated coordinates */}
                      {[
                        { x2: 300, y2: 195 },
                        { x2: 250, y2: 282 },
                        { x2: 150, y2: 282 },
                        { x2: 100, y2: 195 },
                        { x2: 150, y2: 108 },
                        { x2: 250, y2: 108 },
                      ].map((line, i) => (
                        <motion.line
                          key={i}
                          x1="200"
                          y1="195"
                          x2={line.x2}
                          y2={line.y2}
                          stroke="rgba(249,115,22,0.3)"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                        />
                      ))}
                      
                      {/* Gradient Definition */}
                      <defs>
                        <linearGradient
                          id="gradient1"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FF4500" />
                          <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Floating Particles */}
                    {[
                      { top: "25%", left: "30%", duration: 2.5 },
                      { top: "40%", left: "70%", duration: 3 },
                      { top: "60%", left: "25%", duration: 3.5 },
                      { top: "35%", left: "55%", duration: 2.8 },
                      { top: "70%", left: "65%", duration: 3.2 },
                      { top: "50%", left: "45%", duration: 2.7 },
                    ].map((particle, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-primary"
                        style={{
                          top: particle.top,
                          left: particle.left,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: particle.duration,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
