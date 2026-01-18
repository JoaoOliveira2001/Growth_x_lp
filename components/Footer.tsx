"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";

const footerLinks = {
  empresa: [
    { name: "Sobre", href: "#sobre" },
    { name: "Soluções", href: "#solucoes" },
    { name: "Planos", href: "#planos" },
    { name: "Blog", href: "#" },
  ],
  suporte: [
    { name: "Central de Ajuda", href: "#" },
    { name: "Termos de Uso", href: "#" },
    { name: "Política de Privacidade", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contato" className="relative pt-24 pb-8 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-full blur-[200px]" />
      </div>

      <div className="section-container relative z-10">
        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="glass-card p-8 lg:p-12 mb-20 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-[80px]" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Pronto para <span className="gradient-text">acelerar</span>?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como podemos transformar
              seus resultados em vendas.
            </p>
            <a
              href="mailto:contato@growthx.com.br"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Agendar consultoria gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-border"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <a href="#inicio" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">
                Growth<span className="gradient-text">X</span>
              </span>
            </a>
            <p className="text-text-secondary text-sm mb-6">
              Aceleradora de empresas especializada em marketing e vendas com IA
              e CRM.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:contato@growthx.com.br"
                className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contato@growthx.com.br
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +55 (11) 99999-9999
              </a>
              <p className="flex items-center gap-3 text-text-secondary text-sm">
                <MapPin className="w-4 h-4" />
                São Paulo, Brasil
              </p>
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold text-white mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-text-secondary text-sm mb-4">
              Receba dicas exclusivas de crescimento toda semana.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-border text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg gradient-bg text-white hover:opacity-90 transition-opacity"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Growth X. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-white/5 border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
